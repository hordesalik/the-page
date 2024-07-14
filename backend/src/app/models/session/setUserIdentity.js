import jsonwebtoken from 'jsonwebtoken';
import { getJwtSecret } from './getJwtSecret.js';

export function setUserIdentity(res, userIdentity) {
    const jwdData = {
        user: userIdentity
    };
    const jwt = jsonwebtoken.sign(jwdData, getJwtSecret());
    res.cookie('tpaJwt', jwt);
}
