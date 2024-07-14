import { usersMongooseModel } from './users.mongoose.model.js';

export function findUserByUsername(username) {
    return usersMongooseModel.findOne({
        username,
    });
}
