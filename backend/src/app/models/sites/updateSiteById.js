import { sitesMongooseModel } from './sites.mongoose.model.js';

export function updateSiteById(id, data) {
    return sitesMongooseModel.updateOne({ _id: id }, data);
}
