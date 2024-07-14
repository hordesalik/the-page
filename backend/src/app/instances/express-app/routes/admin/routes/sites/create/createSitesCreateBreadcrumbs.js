import { createSitesBreadcrumbs } from '../createSitesBreadcrumbs.js';
import { getAppBasePath } from '../../../../../../../helpers/getAppBasePath.js';

export function createSitesCreateBreadcrumbs(addUrl = true) {
    return [
        ...createSitesBreadcrumbs(),
        {
            label: 'Create Site',
            url: addUrl ? `${getAppBasePath()}admin/sites/create` : null,
            active: !addUrl,
        },
    ];
}
