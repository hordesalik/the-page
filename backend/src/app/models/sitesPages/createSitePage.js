import { sitesPagesMongooseModel } from './sitesPages.mogoose.model.js';

export function createSitePage(data) {
    return sitesPagesMongooseModel.create(data);
}
