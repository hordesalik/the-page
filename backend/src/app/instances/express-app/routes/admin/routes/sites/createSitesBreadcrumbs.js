import { createAdminBreadcrumbs } from '../createAdminBreadcrumbs.js';
import { getAppBasePath } from '../../../../../../helpers/getAppBasePath.js';

export function createSitesBreadcrumbs(addUrl = true) {
    return [
        ...createAdminBreadcrumbs(),
        {
            label: 'Sites',
            url: addUrl ? `${getAppBasePath()}admin/sites` : null,
            active: !addUrl,
        },
    ];
}
