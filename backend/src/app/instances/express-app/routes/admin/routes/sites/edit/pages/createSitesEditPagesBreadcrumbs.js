import { createSitesEditBreadcrumbs } from '../createSitesEditBreadcrumbs.js';
import { getAppBasePath } from '../../../../../../../../helpers/getAppBasePath.js';

export function createSitesEditPagesBreadcrumbs(siteId, addUrl = true) {
    return [
        ...createSitesEditBreadcrumbs(siteId),
        {
            label: 'Pages',
            url: addUrl ? `${getAppBasePath()}admin/sites/edit/${siteId}/pages` : null,
            active: !addUrl,
        },
    ];
}
