import { findSitePage } from './findSitePage.js';

export function findSitePageForSiteByUri(siteId, sitePageUri) {
    return findSitePage({
        siteId,
        uri: sitePageUri,
    });
}
