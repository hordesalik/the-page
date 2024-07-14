import { sitesMongooseModel } from './sites.mongoose.model.js';

export function createSite(data) {
    return sitesMongooseModel.create(data);
}
