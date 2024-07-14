import { Router } from 'express';
import { renderWithAdminLayout } from '../../../../../../../helpers/renderWithAdminLayout.js';
import { sitesModel } from '../../../../../../../models/sites/sites.model.js';
import { accountsModel } from '../../../../../../../models/accounts/accounts.model.js';
import { renderExceptionWithAdminLayout } from '../../../../../../../helpers/renderExceptionWithAdminLayout.js';
import { renderErrorWithAdminLayout } from '../../../../../../../helpers/renderErrorWithAdminLayout.js';
import { bodyParserUrlencodedExtended } from '../../../../../../../helpers/bodyParserUrlencodedExtended.js';
import { siteEditWithForm } from './siteEditWithForm.js';
import { createSitesEditBreadcrumbs } from './createSitesEditBreadcrumbs.js';
import { sitesEditPagesRouter } from './pages/sites.edit.pages.router.js';
import { SiteEditFormModel } from './SiteEditFormModel.js';
import { getAppBasePath } from '../../../../../../../helpers/getAppBasePath.js';

export const sitesEditRouter = new Router();

function renderSitesEdit(res, sitesEditForm) {
    renderWithAdminLayout(res, 'admin/sites/edit', {
        sitesEditForm,
    }, {
        pageTitle: 'Edit Site Page',
        breadcrumbs: createSitesEditBreadcrumbs(res.locals.site.id, false),
    });
}

async function loadSiteAndAccountFromParams(req, res, next) {
    try {
        const site = await sitesModel.findSiteById(req.params.id);
        // check if the site's account is available for user
        const account = site ? await accountsModel.findAccountByIdForUser(site.accountId, req.user.id) : null;
        if (!(site && account)) {
            return renderErrorWithAdminLayout(res, 'Site Not Found');
        }

        res.locals.site = site;
        res.locals.account = account;
        next();
    } catch (e) {
        renderExceptionWithAdminLayout(res, e);
    }
}

sitesEditRouter.use('/edit/:id',
    [
        loadSiteAndAccountFromParams,
    ],
);

sitesEditRouter.get('/edit/:id',
    async (req, res) => {
        const siteEditForm = new SiteEditFormModel(res.locals.site);
        renderSitesEdit(res, siteEditForm);
    }
);

sitesEditRouter.post('/edit/:id',
    bodyParserUrlencodedExtended(),
    async (req, res) => {
        const {site} = res.locals;
        const siteEditForm = new SiteEditFormModel(req.body);
        try {
            const result = await siteEditWithForm(site.id, siteEditForm);
            if (result) {
                return res.redirect(`${getAppBasePath()}admin/sites/edit/${site.id}`);
            }
        } catch (e) {
            siteEditForm.errorDetails = e.message;
        }

        siteEditForm.error = 'Failed to save a site';

        renderSitesEdit(res, siteEditForm);
    }
);

sitesEditRouter.use('/edit/:id', sitesEditPagesRouter);
