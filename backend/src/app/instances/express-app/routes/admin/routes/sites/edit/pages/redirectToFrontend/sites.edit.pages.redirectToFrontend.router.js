import { Router } from 'express';
import { loadSitePageFromParams } from '../loadSitePageFromParams.js';

export const sitesEditPagesRedirectToFrontendRouter = new Router();

sitesEditPagesRedirectToFrontendRouter.get('/redirect-to-frontend/:id',
    loadSitePageFromParams,
    (req, res) => {
        const { site, sitePage } = res.locals;
        const url = `${process.env.FRONTEND_BASE_URL}/site/${site.id}${sitePage.uri}`;

        res.redirect(url);
    },
);
