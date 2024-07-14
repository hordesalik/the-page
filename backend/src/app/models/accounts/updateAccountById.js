import { accountsMongooseModel } from './accounts.mongoose.model.js';

export function updateAccountById(id, data) {
    return accountsMongooseModel.updateOne({ _id: id }, data);
}
