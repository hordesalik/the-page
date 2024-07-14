import { sitesPagesMongooseModel } from './sitesPages.mogoose.model.js';

export function updateSitePageById(sitePageId, data) {
    return sitesPagesMongooseModel.updateOne({ _id: sitePageId }, data);
}
