import { usersMongooseModel } from './users.mongoose.model.js';

export function findUserById(id) {
    return usersMongooseModel.findById(id);
}
