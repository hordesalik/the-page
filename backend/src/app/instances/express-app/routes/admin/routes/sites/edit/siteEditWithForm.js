import { sitesModel } from '../../../../../../../models/sites/sites.model.js';

export function siteEditWithForm(id, siteEditForm) {
    const { name } = siteEditForm.values;
    const data = { name };

    return sitesModel.updateSiteById(id, data);
}
