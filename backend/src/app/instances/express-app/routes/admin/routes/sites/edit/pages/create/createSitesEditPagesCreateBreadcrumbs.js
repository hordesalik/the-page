import { createSitesEditPagesBreadcrumbs } from '../createSitesEditPagesBreadcrumbs.js';
import { getAppBasePath } from '../../../../../../../../../helpers/getAppBasePath.js';

export function createSitesEditPagesCreateBreadcrumbs(siteId, addUrl = true) {
    return [
        ...createSitesEditPagesBreadcrumbs(siteId),
        {
            label: 'Create Page',
            url: addUrl ? `${getAppBasePath()}admin/sites/edit/${siteId}/pages/create` : null,
            active: !addUrl,
        },
    ];
}
