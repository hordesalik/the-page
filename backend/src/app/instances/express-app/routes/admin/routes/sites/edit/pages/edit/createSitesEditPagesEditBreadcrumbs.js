import { createSitesEditPagesBreadcrumbs } from '../createSitesEditPagesBreadcrumbs.js';
import { getAppBasePath } from '../../../../../../../../../helpers/getAppBasePath.js';

export function createSitesEditPagesEditBreadcrumbs(siteId, pageId, addUrl = true) {
    return [
        ...createSitesEditPagesBreadcrumbs(siteId),
        {
            label: 'Edit Page',
            url: addUrl ? `${getAppBasePath()}admin/sites/edit/${siteId}/pages/edit/${pageId}` : null,
            active: !addUrl,
        },
    ];
}
