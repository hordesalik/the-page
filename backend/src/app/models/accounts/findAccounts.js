import { accountsMongooseModel } from './accounts.mongoose.model.js';

export function findAccounts(filter) {
    return accountsMongooseModel.find(filter);
}
