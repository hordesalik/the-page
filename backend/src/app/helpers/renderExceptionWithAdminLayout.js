import { renderErrorWithAdminLayout } from './renderErrorWithAdminLayout.js';

export function renderExceptionWithAdminLayout(res, exception) {
    renderErrorWithAdminLayout(res, 'Error', exception.message);
}
