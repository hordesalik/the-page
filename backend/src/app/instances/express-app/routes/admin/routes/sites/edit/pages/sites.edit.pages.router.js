import { Router } from 'express';
import { sitesEditPagesListRouter } from './list/sites.edit.pages.list.router.js';
import { sitesEditPagesCreateRouter } from './create/sites.edit.pages.create.router.js';
import { sitesEditPagesEditRouter } from './edit/sites.edit.pages.edit.router.js';
import { sitesEditPagesRedirectToFrontendRouter } from './redirectToFrontend/sites.edit.pages.redirectToFrontend.router.js';

export const sitesEditPagesRouter = new Router();

sitesEditPagesRouter.use('/pages', [
    sitesEditPagesListRouter,
    sitesEditPagesCreateRouter,
    sitesEditPagesEditRouter,
    sitesEditPagesRedirectToFrontendRouter,
]);
