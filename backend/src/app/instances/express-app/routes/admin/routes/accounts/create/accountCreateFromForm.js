import { accountsModel } from '../../../../../../../models/accounts/accounts.model.js';

export function accountCreateFromForm(ownerUserId, createAccountForm) {
    const { name } = createAccountForm.values;
    const data = { name, ownerUserId };

    return accountsModel.createAccount(data);
}
