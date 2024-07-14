import { accountsMongooseModel } from './accounts.mongoose.model.js';

export function findAccount(filter) {
    return accountsMongooseModel.findOne(filter);
}
