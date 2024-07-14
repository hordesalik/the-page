import { Router } from 'express';
import { accountsModel } from '../../../../../../../models/accounts/accounts.model.js';
import { renderWithAdminLayout } from '../../../../../../../helpers/renderWithAdminLayout.js';
import { bodyParserUrlencodedExtended } from '../../../../../../../helpers/bodyParserUrlencodedExtended.js';
import { accountEditWithForm } from './accountEditWithForm.js';
import { createAccountsEditBreadcrumbs } from './createAccountsEditBreadcrumbs.js';
import { AccountEditForm } from './accountEdit.form.js';
import { getAppBasePath } from '../../../../../../../helpers/getAppBasePath.js';

export const accountsEditRouter = new Router();

async function loadAccountFromParams(req, res, next) {
    try {
        const account = await accountsModel.findAccountByIdForUser(req.params.id, req.user.id);
        if (!account) {
            return renderWithAdminLayout(res, 'admin/error', {
                error: 'Account Not Found',
            }, {
                pageTitle: 'Account Not Found',
            });
        }

        res.locals.account = account;
        next();
    } catch (e) {
        renderWithAdminLayout(res, 'admin/error', {
            error: 'Error',
            errorDetails: e.message,
        }, {
            pageTitle: 'Error',
        });
    }
}

function renderEditAccount(res, editAccountForm) {
    renderWithAdminLayout(res, 'admin/accounts/edit', {
        editAccountForm,
    }, {
        pageTitle: 'Edit Account Page',
        breadcrumbs: createAccountsEditBreadcrumbs(res.locals.account.id, false),
    });
}

accountsEditRouter.get('/edit/:id',
    loadAccountFromParams,
    (req, res) => {
        const { account } = res.locals;
        const editAccountForm = new AccountEditForm(account);
        renderEditAccount(res, editAccountForm);
    }
);

accountsEditRouter.post('/edit/:id',
    bodyParserUrlencodedExtended(),
    loadAccountFromParams,
    async (req, res) => {
        const { account } = res.locals;
        const editAccountForm = new AccountEditForm(account, req.body);

        try {
            const result = await accountEditWithForm(account.id, editAccountForm);
            if (result) {
                return res.redirect(`${getAppBasePath()}admin/accounts/edit/${account.id}`);
            }
        } catch (e) {
            editAccountForm.errorDetails = e.message;
        }

        editAccountForm.error = 'Failed to edit account';

        renderEditAccount(res, editAccountForm);
    }
);
