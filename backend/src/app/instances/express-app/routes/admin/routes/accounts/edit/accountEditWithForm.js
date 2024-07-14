import { accountsModel } from '../../../../../../../models/accounts/accounts.model.js';

export function accountEditWithForm(id, editAccountForm) {
    const { name } = editAccountForm.values;
    const data = { name };

    return accountsModel.updateAccountById(id, data);
}
