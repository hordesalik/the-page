import { Router } from 'express';
import { sessionModel } from '../../../../models/session/session.model.js';
import { getAppBasePath } from '../../../../helpers/getAppBasePath.js';
import { renderLogoutPage } from './renderLogoutPage.js';

export const logoutRouter = new Router();

logoutRouter.get('/logout',
    function (req, res) {
        renderLogoutPage(res);
    }
);

logoutRouter.post('/logout',
    function (req, res) {
        sessionModel.removeSession(res);
        res.redirect(`${getAppBasePath()}login`);
    }
);
