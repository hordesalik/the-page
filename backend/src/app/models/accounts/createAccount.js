import { accountsMongooseModel } from './accounts.mongoose.model.js';

export function createAccount(data) {
    return accountsMongooseModel.create(data);
}
