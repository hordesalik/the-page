import { findAccounts } from './findAccounts.js';

export function findAccountsAvailableForUser(userId) {
    return findAccounts({ ownerUserId: userId });
}
