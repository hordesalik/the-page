import { renderWithAdminLayout } from './renderWithAdminLayout.js';

export function renderErrorWithAdminLayout(res, error, errorDetails = null) {
    renderWithAdminLayout(res, 'admin/error', {
        error,
        errorDetails,
    }, {
        pageTitle: error,
    });
}
