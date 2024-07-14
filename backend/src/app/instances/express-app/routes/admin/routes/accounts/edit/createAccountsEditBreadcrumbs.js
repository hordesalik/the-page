import { createAccountsBreadcrumbs } from '../createAccountsBreadcrumbs.js';
import { getAppBasePath } from '../../../../../../../helpers/getAppBasePath.js';

export function createAccountsEditBreadcrumbs(id, addUrl = true) {
    return [
        ...createAccountsBreadcrumbs(),
        {
            label: 'Edit Account',
            url: addUrl ? `${getAppBasePath()}admin/accounts/edit/${id}` : null,
            active: !addUrl,
        },
    ];
}
