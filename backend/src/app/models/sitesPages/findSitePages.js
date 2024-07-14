import { sitesPagesMongooseModel } from './sitesPages.mogoose.model.js';

export function findSitePages(filter) {
    return sitesPagesMongooseModel.find(filter);
}
