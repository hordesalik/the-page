import { findSitePages } from './findSitePages.js';

export function findSitePagesForSite(siteId) {
    return findSitePages({
        siteId,
    });
}
