import { accountsModel } from '../../models/accounts/accounts.model.js';
import { createDropdownOptions } from '../createDropdownOptions.js';
import { DropdownComponent } from '../../components/dropdown/dropdown.component.js';

export async function createAccountsDropdown(userId, selectedValue) {
    const accounts = await accountsModel.findAccountsAvailableForUser(userId);
    const options = createDropdownOptions(accounts, selectedValue, {
        emptyTitle: 'Select an account...',
    });

    return new DropdownComponent({
        name: 'accountId',
        options,
    });
}
