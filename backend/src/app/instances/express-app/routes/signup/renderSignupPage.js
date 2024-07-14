import { renderWithLayout } from '../../../../helpers/renderWithLayout.js';

export function renderSignupPage(res, signupFormModel) {
    renderWithLayout(res, 'signup', {
        signupFormModel,
    }, {
        pageTitle: 'Sign Up Page',
    });
}
