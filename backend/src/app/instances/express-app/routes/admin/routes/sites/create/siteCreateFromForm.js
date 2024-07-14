import { sitesModel } from '../../../../../../../models/sites/sites.model.js';
import { accountsModel } from '../../../../../../../models/accounts/accounts.model.js';

export function siteCreateFromForm(userId, siteCreateForm) {
    const { name, accountId } = siteCreateForm.values;
    const account = accountId ? accountsModel.findAccountByIdForUser(accountId, userId) : null;
    if (!account) {
        return null;
    }

    const data = { name, accountId };

    return sitesModel.createSite(data);
}
