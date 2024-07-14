import fs from 'fs';

export function getJwtSecret() {
    const { JWT_SECRET_FILE } = process.env;
    return fs.readFileSync(JWT_SECRET_FILE, 'utf8');
}
