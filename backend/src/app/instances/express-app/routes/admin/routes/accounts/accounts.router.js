import { Router } from 'express';
import { accountsListRouter } from './list/accounts.list.router.js';
import { accountsCreateRouter } from './create/accounts.create.router.js';
import { accountsEditRouter } from './edit/accounts.edit.router.js';

export const accountsRouter = new Router();

accountsRouter.use('/accounts',
    [
        accountsListRouter,
        accountsCreateRouter,
        accountsEditRouter,
    ],
);
