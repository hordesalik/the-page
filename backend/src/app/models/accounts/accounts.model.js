import { findAccount } from './findAccount.js';
import { findAccountById } from './findAccountById.js';
import { createAccount } from './createAccount.js';
import { updateAccountById } from './updateAccountById.js';
import { findAccounts } from './findAccounts.js';
import { findAccountsAvailableForUser } from './findAccountsAvailableForUser.js';
import { findAccountByIdForUser } from './findAccountByIdForUser.js';

export const accountsModel = {
    findAccount,
    findAccountById,
    findAccountByIdForUser,
    createAccount,
    updateAccountById,
    findAccounts,
    findAccountsAvailableForUser,
};
