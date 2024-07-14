import { sitesPagesModel } from '../../../../../../../../../models/sitesPages/sitesPages.model.js';

export function createPageFromForm(siteId, createPageForm) {
    const {name} = createPageForm.values;
    const data = {
        siteId,
        name,
    };

    return sitesPagesModel.createSitePage(data);
}
