import { sitesMongooseModel } from './sites.mongoose.model.js';

export function findSites(filter) {
    return sitesMongooseModel.find(filter);
}
