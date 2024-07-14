import { createSitesBreadcrumbs } from '../createSitesBreadcrumbs.js';
import { getAppBasePath } from '../../../../../../../helpers/getAppBasePath.js';

export function createSitesEditBreadcrumbs(id, addUrl = true) {
    return [
        ...createSitesBreadcrumbs(),
        {
            label: 'Edit Site',
            url: addUrl ? `${getAppBasePath()}admin/sites/edit/${id}` : null,
            active: !addUrl,
        },
    ];
}
