import { sitesMongooseModel } from './sites.mongoose.model.js';

export function findSiteById(id) {
    return sitesMongooseModel.findById(id);
}
