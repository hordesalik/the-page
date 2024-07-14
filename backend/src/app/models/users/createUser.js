import { usersMongooseModel } from './users.mongoose.model.js';

export function createUser(data) {
    const {username, passwordHash} = data;

    return usersMongooseModel.create({
        username,
        passwordHash,
    });
}
