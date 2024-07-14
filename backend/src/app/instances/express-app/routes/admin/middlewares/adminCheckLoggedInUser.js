import { sessionModel } from '../../../../../models/session/session.model.js';
import { usersModel } from '../../../../../models/users/users.model.js';
import { getAppBasePath } from '../../../../../helpers/getAppBasePath.js';

export async function adminCheckLoggedInUser(req, res, next) {
    const cookieUser = sessionModel.getUserFromCookies(req);

    if (cookieUser) {
        const user = await usersModel.findUserById(cookieUser.id)

        if (user) {
            console.log('user', cookieUser);
            req.user = cookieUser;
            return next();
        }
    }

    sessionModel.removeSession(res);
    res.redirect(`${getAppBasePath()}login`);
}
