import jsonwebtoken from 'jsonwebtoken';
import { getJwtSecret } from './getJwtSecret.js';

export function getUserFromCookies(req) {
    const tpaJwt = req.cookies?.tpaJwt;

    try {
        return tpaJwt && jsonwebtoken.verify(tpaJwt, getJwtSecret())?.user;
    } catch (e) {
        return null;
    }
}
