import { createSite } from './createSite.js';
import { findSites } from './findSites.js';
import { findSitesForAccount } from './findSitesForAccount.js';
import { findSiteById } from './findSiteById.js';
import { updateSiteById } from './updateSiteById.js';

export const sitesModel = {
    createSite,
    findSites,
    findSitesForAccount,
    findSiteById,
    updateSiteById,
}
