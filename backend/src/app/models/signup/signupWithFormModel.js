import { usersModel } from '../users/users.model.js';

export async function signupWithFormModel(signupFormModel) {
    const { username, password } = signupFormModel.values;
    const passwordHash = await usersModel.hashPassword(password);
    const result = await usersModel.createUser({
        username,
        passwordHash,
    });

    const id = result._id.valueOf();

    return {
        id,
    };
}
