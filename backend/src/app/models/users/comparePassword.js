import bcrypt from 'bcrypt';

export function comparePassword(plainPassword, passwordHash) {
    return bcrypt.compare(plainPassword, passwordHash);
}
