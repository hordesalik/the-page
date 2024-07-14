import { Router } from 'express';
import { renderWithAdminLayout } from '../../../../../../../../../helpers/renderWithAdminLayout.js';
import { createSitesEditPagesBreadcrumbs } from '../createSitesEditPagesBreadcrumbs.js';
import { sitesPagesModel } from '../../../../../../../../../models/sitesPages/sitesPages.model.js';

export const sitesEditPagesListRouter = new Router();

sitesEditPagesListRouter.get('/',
    async (req, res) => {
        const sitePages = await sitesPagesModel.findSitePagesForSite(res.locals.site.id);
        renderWithAdminLayout(res, 'admin/sites/edit/pages/list', {
            sitePages,
        }, {
            pageTitle: 'Site Pages List',
            breadcrumbs: createSitesEditPagesBreadcrumbs(res.locals.site.id, false)
        });
    }
);
