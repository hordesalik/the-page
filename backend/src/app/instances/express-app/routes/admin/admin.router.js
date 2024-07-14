import { Router } from 'express';
import cookieParser from 'cookie-parser';
import { adminCheckLoggedInUser } from './middlewares/adminCheckLoggedInUser.js';
import { indexController } from './controllers/index.controller.js';
import { accountsRouter } from './routes/accounts/accounts.router.js';
import { sitesRouter } from './routes/sites/sites.router.js';

export const adminRouter = new Router();

adminRouter.use(cookieParser());
adminRouter.use(adminCheckLoggedInUser);
adminRouter.get('/', indexController);
adminRouter.use(accountsRouter);
adminRouter.use(sitesRouter);
