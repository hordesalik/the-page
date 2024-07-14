import { accountsMongooseModel } from './accounts.mongoose.model.js';

export function findAccountById(id) {
    return accountsMongooseModel.findById(id);
}
