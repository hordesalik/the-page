import { Router } from 'express';
import { bodyParserUrlencodedExtended } from '../../../../helpers/bodyParserUrlencodedExtended.js';
import { sessionModel } from '../../../../models/session/session.model.js';
import { signupModel } from '../../../../models/signup/signup.model.js';
import { renderSignupPage } from './renderSignupPage.js';
import { LoginFormModel } from '../login/LoginFormModel.js';
import { getAppBasePath } from '../../../../helpers/getAppBasePath.js';

export const signupRouter = new Router();

signupRouter.get('/signup',
    function (req, res) {
        const signupFormModel = new LoginFormModel();
        renderSignupPage(res, signupFormModel);
    }
)

signupRouter.post('/signup',
    bodyParserUrlencodedExtended(),
    async function (req, res) {
        const signupFormModel = new LoginFormModel(req.body);

        try {
            if (signupFormModel) {
                const userIdentity = await signupModel.signupWithFormModel(signupFormModel);
                if (userIdentity) {
                    sessionModel.setUserIdentity(res, userIdentity);
                    res.redirect(`${getAppBasePath()}admin/`);
                    return;
                }
            }
        } catch (e) {
            signupFormModel.errorDetails = e.message;
        }

        signupFormModel.error = 'Failed to sign up';

        renderSignupPage(res, signupFormModel);
    }
)
