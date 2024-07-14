import { Router } from 'express';
import { renderWithAdminLayout } from '../../../../../../../../../helpers/renderWithAdminLayout.js';
import { bodyParserUrlencodedExtended } from '../../../../../../../../../helpers/bodyParserUrlencodedExtended.js';
import { createSitesEditPagesEditBreadcrumbs } from './createSitesEditPagesEditBreadcrumbs.js';
import { loadSitePageFromParams } from '../loadSitePageFromParams.js';
import { sitePageEditWithForm } from './sitePageEditWithForm.js';
import { SitePageEditFormModel } from './SitePageEditFormModel.js';
import { getAppBasePath } from '../../../../../../../../../helpers/getAppBasePath.js';

export const sitesEditPagesEditRouter = new Router();

function renderEditPage(res, sitePageId, sitePageEditForm) {
    renderWithAdminLayout(res, 'admin/sites/edit/pages/edit', {
            sitePageEditForm,
        }, {
            pageTitle: 'Edit Site Page Page',
            breadcrumbs: createSitesEditPagesEditBreadcrumbs(res.locals.site.id, sitePageId, false),
        },
    );
}

sitesEditPagesEditRouter.use('/edit/:id',
    [
        loadSitePageFromParams,
    ],
);

sitesEditPagesEditRouter.get('/edit/:id',
    (req, res) => {
        const sitePageForm = new SitePageEditFormModel(res.locals.sitePage);
        renderEditPage(res, res.locals.sitePage.id, sitePageForm);
    }
);

sitesEditPagesEditRouter.post('/edit/:id',
    bodyParserUrlencodedExtended(),
    async (req, res) => {
        const { site, sitePage } = res.locals;
        const sitePageEditForm = new SitePageEditFormModel(sitePage, req.body);
        try {
            const result = await sitePageEditWithForm(sitePage.id, sitePageEditForm);
            if (result) {
                return res.redirect(`${getAppBasePath()}admin/sites/edit/${site.id}/pages/edit/${sitePage.id}`);
            }
        } catch (e) {
            sitePageEditForm.errorDetails = e.message;
        }

        sitePageEditForm.error = 'Failed to save a site page'

        renderEditPage(res, res.locals.sitePage.id, sitePageEditForm);
    }
);
