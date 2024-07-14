import { sitesPagesModel } from '../../../../../../../../../models/sitesPages/sitesPages.model.js';

export function sitePageEditWithForm(sitePageId, sitePageEditForm) {
    const { name, uri, htmlBody } = sitePageEditForm.values;
    const data = {
        name,
        uri,
        htmlBody,
    };

    return sitesPagesModel.updateSitePageById(sitePageId, data);
}
