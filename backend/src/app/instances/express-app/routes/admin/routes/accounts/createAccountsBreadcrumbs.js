import { createAdminBreadcrumbs } from '../createAdminBreadcrumbs.js';
import { getAppBasePath } from '../../../../../../helpers/getAppBasePath.js';

export function createAccountsBreadcrumbs(addUrl = true) {
    return [
        ...createAdminBreadcrumbs(),
        {
            label: 'Accounts',
            url: addUrl ? `${getAppBasePath()}admin/accounts` : null,
            active: !addUrl,
        },
    ];
}
