import { Router } from 'express';
import { renderWithAdminLayout } from '../../../../../../../helpers/renderWithAdminLayout.js';
import { createSitesBreadcrumbs } from '../createSitesBreadcrumbs.js';
import { accountsModel } from '../../../../../../../models/accounts/accounts.model.js';
import { sitesModel } from '../../../../../../../models/sites/sites.model.js';
import { createAccountsDropdown } from '../../../../../../../helpers/accounts/createAccountsDropdown.js';
import { SitesListFormModel } from './SitesListFormModel.js';
import { mapDropdownOptions } from '../../../../../../../helpers/mapDropdownOptions.js';

export const sitesListRouter = new Router();

async function getSites(userId, accountId) {
    if (!accountId) {
        return [];
    }

    const account = await accountsModel.findAccountByIdForUser(accountId, userId);
    if (account) {
        return sitesModel.findSitesForAccount(accountId);
    }

    return [];
}

sitesListRouter.get('/',
    async (req, res) => {
        const userId = req.user.id;
        const { accountId } = req.query;
        const sitesListForm = new SitesListFormModel({accountId});

        const [accounts, sites] = await Promise.all([
            accountsModel.findAccountsAvailableForUser(userId),
            getSites(userId, accountId)
        ]);

        sitesListForm.accountIdDropdownFormField.options = mapDropdownOptions(accounts, sitesListForm.values.accountId);

        renderWithAdminLayout(res, 'admin/sites/list', {
            sitesListForm,
            accountId,
            sites,
        }, {
            pageTitle: 'Sites List Page',
            breadcrumbs: createSitesBreadcrumbs(false),
        });
    }
);
