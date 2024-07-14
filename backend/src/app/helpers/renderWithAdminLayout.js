import { renderWithLayout } from './renderWithLayout.js';

export function renderWithAdminLayout(res, view, viewData, layoutData) {
    renderWithLayout(res, view, viewData, layoutData, 'admin/layout');
}
