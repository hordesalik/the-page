import { Router } from 'express';
import { renderWithAdminLayout } from '../../../../../../../helpers/renderWithAdminLayout.js';
import { accountsModel } from '../../../../../../../models/accounts/accounts.model.js';
import { createAccountsBreadcrumbs } from '../createAccountsBreadcrumbs.js';

export const accountsListRouter = new Router();

accountsListRouter.get('/',
    async (req, res) => {
        const accounts = await accountsModel.findAccountsAvailableForUser(req.user.id);

        renderWithAdminLayout(res, 'admin/accounts/list', {
            accounts,
        }, {
            pageTitle: 'Accounts List Page',
            breadcrumbs: createAccountsBreadcrumbs(false),
        });
    },
);
