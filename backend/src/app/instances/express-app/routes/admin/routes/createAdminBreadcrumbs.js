import { getAppBasePath } from '../../../../../helpers/getAppBasePath.js';

export function createAdminBreadcrumbs(addurl = true) {
    return [
        {
            label: 'Admin Panel',
            url: addurl ? `${getAppBasePath()}admin` : false,
            active: !addurl,
        },
    ];
}
