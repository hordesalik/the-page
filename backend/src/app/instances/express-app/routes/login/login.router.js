import { Router } from 'express';
import { bodyParserUrlencodedExtended } from '../../../../helpers/bodyParserUrlencodedExtended.js';
import { sessionModel } from '../../../../models/session/session.model.js';
import { loginModel } from '../../../../models/login/login.model.js';
import { renderLoginPage } from './renderLoginPage.js';
import { LoginFormModel } from './LoginFormModel.js';
import { getAppBasePath } from '../../../../helpers/getAppBasePath.js';

export const loginRouter = Router();

loginRouter.get('/login', function (req, res) {
    const loginFormModel = new LoginFormModel();

    renderLoginPage(res, loginFormModel);
});

loginRouter.post('/login',
    bodyParserUrlencodedExtended(),
    async function (req, res) {
        const loginFormModel = new LoginFormModel(req.body);

        try {
            const userIdentity = await loginModel.loginWithFormModel(loginFormModel);
            if (userIdentity) {
                sessionModel.setUserIdentity(res, userIdentity);
                res.redirect(`${getAppBasePath()}admin`);
                return;
            }
        } catch (e) {
            loginFormModel.errorDetails = e.message;
        }

        loginFormModel.error = 'Failed to login';

        renderLoginPage(res, loginFormModel);
    }
);
