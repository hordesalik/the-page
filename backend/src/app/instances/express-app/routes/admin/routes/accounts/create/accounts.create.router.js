import { Router } from 'express';
import { renderWithAdminLayout } from '../../../../../../../helpers/renderWithAdminLayout.js';
import { bodyParserUrlencodedExtended } from '../../../../../../../helpers/bodyParserUrlencodedExtended.js';
import { accountCreateFromForm } from './accountCreateFromForm.js';
import { createAccountsCreateBreadcrumbs } from './createAccountsCreateBreadcrumbs.js';
import { AccountEditForm } from '../edit/accountEdit.form.js';
import { getAppBasePath } from '../../../../../../../helpers/getAppBasePath.js';

export const accountsCreateRouter = new Router();

function renderCreateAccount(res, createAccountForm) {
    renderWithAdminLayout(res, 'admin/accounts/create', {
        createAccountForm,
    }, {
        pageTitle: 'Create Account Page',
        breadcrumbs: createAccountsCreateBreadcrumbs(false),
    });
}

accountsCreateRouter.get('/create',
    (req, res) => {
        const createAccountForm = new AccountEditForm();

        renderCreateAccount(res, createAccountForm);
    }
);

accountsCreateRouter.post('/create',
    bodyParserUrlencodedExtended(),
    async (req, res) => {
        const createAccountForm = new AccountEditForm(req.body);

        try {
            const result = await accountCreateFromForm(req.user.id, createAccountForm);

            if (result) {
                res.redirect(`${getAppBasePath()}admin/accounts/edit/${result._id.valueOf()}`);
                return;
            }
        } catch (e) {
            createAccountForm.errorDetails = e.message;
        }

        createAccountForm.error = 'Failed to create account';

        renderCreateAccount(res, createAccountForm);
    }
);
