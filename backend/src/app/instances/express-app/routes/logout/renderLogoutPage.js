import { renderWithLayout } from '../../../../helpers/renderWithLayout.js';

export function renderLogoutPage(res) {
    renderWithLayout(res, 'logout', {}, {
        pageTitle: 'Logout Page',
    });
}
