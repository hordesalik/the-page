import { findSitePage } from './findSitePage.js';

export function findSitePageForSite(siteId, sitePageId) {
    return findSitePage({
        siteId,
        _id: sitePageId,
    });
}
