import { Router } from 'express';
import { renderWithAdminLayout } from '../../../../../../../../../helpers/renderWithAdminLayout.js';
import { bodyParserUrlencodedExtended } from '../../../../../../../../../helpers/bodyParserUrlencodedExtended.js';
import { FormModel } from '../../../../../../../../../components/form/formModel.js';
import { createSitesEditPagesCreateBreadcrumbs } from './createSitesEditPagesCreateBreadcrumbs.js';
import { createPageFromForm } from './createPageFromForm.js';
import { SitePageCreateFormModel } from './SitePageCreateFormModel.js';
import { getAppBasePath } from '../../../../../../../../../helpers/getAppBasePath.js';

export const sitesEditPagesCreateRouter = new Router();

function renderCreatePage(res, sitePageCreateForm) {
    renderWithAdminLayout(res, 'admin/sites/edit/pages/create', {
        sitePageCreateForm,
    }, {
        pageTitle: 'Create Site Page',
        breadcrumbs: createSitesEditPagesCreateBreadcrumbs(res.locals.site.id, false),
    });
}

sitesEditPagesCreateRouter.get('/create',
    (req, res) => {
        renderCreatePage(res, new SitePageCreateFormModel());
    },
);

sitesEditPagesCreateRouter.post('/create',
    bodyParserUrlencodedExtended(),
    async (req, res) => {
        const sitePageCreateForm = new SitePageCreateFormModel(req.body);
        const { id: siteId } = res.locals.site;

        try {
            const result = await createPageFromForm(siteId, sitePageCreateForm);

            if (result) {
                res.redirect(`${getAppBasePath()}admin/sites/edit/${siteId}/pages/edit/${result._id.valueOf()}`);
                return;
            }
        } catch (e) {
            sitePageCreateForm.errorDetails = e.message;
        }

        sitePageCreateForm.error = 'Failed to create a site page';

        renderCreatePage(res, sitePageCreateForm);
    },
);
