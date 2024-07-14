import { Router } from 'express';
import { renderWithAdminLayout } from '../../../../../../../helpers/renderWithAdminLayout.js';
import { bodyParserUrlencodedExtended } from '../../../../../../../helpers/bodyParserUrlencodedExtended.js';
import { mapDropdownOptions } from '../../../../../../../helpers/mapDropdownOptions.js';
import { accountsModel } from '../../../../../../../models/accounts/accounts.model.js';
import { createSitesCreateBreadcrumbs } from './createSitesCreateBreadcrumbs.js';
import { siteCreateFromForm } from './siteCreateFromForm.js';
import { SiteCreateFormModel } from './SiteCreateFormModel.js';
import { getAppBasePath } from '../../../../../../../helpers/getAppBasePath.js';

export const sitesCreateRouter = new Router();

async function renderCreateSite(req, res, createSiteForm) {
    const accounts = await accountsModel.findAccountsAvailableForUser(req.user.id);
    const options = mapDropdownOptions(accounts, createSiteForm.values.accountId);

    createSiteForm.getFieldByName('accountId').options = options;

    renderWithAdminLayout(res, 'admin/sites/create', {
        createSiteForm,
    }, {
        pageTitle: 'Create Site Page',
        breadcrumbs: createSitesCreateBreadcrumbs(false),
    });
}

sitesCreateRouter.get('/create',
    async (req, res) => {
        const { accountId } = req.query;
        const sitesCreateForm = new SiteCreateFormModel({ accountId });
        await renderCreateSite(req, res, sitesCreateForm);
    },
);

sitesCreateRouter.post('/create',
    bodyParserUrlencodedExtended(),
    async (req, res) => {
        const sitesCreateForm = new SiteCreateFormModel(req.body);

        try {
            const result = await siteCreateFromForm(req.user.id, sitesCreateForm);

            if (result) {
                res.redirect(`${getAppBasePath()}admin/sites/edit/${result._id.valueOf()}`);
                return;
            }
        } catch (e) {
            sitesCreateForm.errorDetails = e.message;
        }

        sitesCreateForm.error = 'Failed to create a site';

        await renderCreateSite(req, res, sitesCreateForm);
    },
);
