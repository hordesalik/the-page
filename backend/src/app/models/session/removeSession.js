export function removeSession(res) {
    res.cookie('tpaJwt', '');
}
