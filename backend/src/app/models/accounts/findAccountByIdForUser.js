import { findAccount } from './findAccount.js';

export function findAccountByIdForUser(id, ownerUserId) {
    return findAccount({
        _id: id,
        ownerUserId,
    });
}
