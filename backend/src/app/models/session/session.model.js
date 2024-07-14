import { getUserFromCookies } from './getUserFromCookies.js';
import { removeSession } from './removeSession.js';
import { setUserIdentity } from './setUserIdentity.js';

export const sessionModel = {
    getUserFromCookies,
    removeSession,
    setUserIdentity,
};
