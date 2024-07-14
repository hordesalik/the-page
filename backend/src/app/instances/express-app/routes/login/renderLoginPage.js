import { renderWithLayout } from '../../../../helpers/renderWithLayout.js';

export function renderLoginPage(res, loginFormModel) {
    renderWithLayout(res, 'login', {
        loginFormModel,
    }, {
        pageTitle: 'Log In Page',
    });
}
