import { Router } from 'express';
import { sitesListRouter } from './list/sites.list.router.js';
import { sitesCreateRouter } from './create/sites.create.router.js';
import { sitesEditRouter } from './edit/sites.edit.router.js';

export const sitesRouter = new Router();

sitesRouter.use('/sites',
    [
        sitesListRouter,
        sitesCreateRouter,
        sitesEditRouter,
    ],
);
