import { escapeRegExp } from '../../helpers/escapeRegExp.js';

export function resolveHostAsSitePath(req, res, next) {
    const { APP_BASE_HOSTNAME } = process.env;
    if (APP_BASE_HOSTNAME) {
        const match = req.hostname.match(new RegExp(`(^.*)\.${escapeRegExp(APP_BASE_HOSTNAME)}`));
        if (match?.length > 1 && match[1]) {
            req.url = `/site/${match[1]}${req.path}`;
        }
    }
    next();
}
