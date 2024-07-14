import { renderWithAdminLayout } from '../../../../../helpers/renderWithAdminLayout.js';
import { createAdminBreadcrumbs } from '../routes/createAdminBreadcrumbs.js';

export function indexController(req, res) {
    renderWithAdminLayout(res, 'admin/index', {

    }, {
        pageTitle: 'Admin Dashboard',
        breadcrumbs: createAdminBreadcrumbs(false),
    });
}
