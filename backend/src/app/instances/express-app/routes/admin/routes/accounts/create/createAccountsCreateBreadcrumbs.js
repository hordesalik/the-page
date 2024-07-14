import { createAccountsBreadcrumbs } from '../createAccountsBreadcrumbs.js';
import { getAppBasePath } from '../../../../../../../helpers/getAppBasePath.js';

export function createAccountsCreateBreadcrumbs(addUrl = true) {
    return [
        ...createAccountsBreadcrumbs(),
        {
            label: 'Create Account',
            url: addUrl ? `${getAppBasePath()}admin/accounts/create` : null,
            active: !addUrl,
        },
    ];
}
