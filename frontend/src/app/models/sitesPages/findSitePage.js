import { sitesPagesMongooseModel } from './sitesPages.mogoose.model.js';

export function findSitePage(filter) {
    return sitesPagesMongooseModel.findOne(filter);
}
