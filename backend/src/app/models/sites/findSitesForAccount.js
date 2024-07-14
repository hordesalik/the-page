import { findSites } from './findSites.js';

export function findSitesForAccount(accountId) {
    return findSites({
        accountId,
    });
}
