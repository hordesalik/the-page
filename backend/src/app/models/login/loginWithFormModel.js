import { usersModel } from '../users/users.model.js';

export async function loginWithFormModel(loginFormModel) {
    const { username, password } = loginFormModel.values;
    const user = await usersModel.findUserByUsername(username);

    if (user) {
        const passwordMatch = await usersModel.comparePassword(password, user.passwordHash);

        if (passwordMatch) {
            return {
                id: user._id.valueOf(),
            };
        }
    }
}
