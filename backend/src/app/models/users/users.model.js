import { comparePassword } from './comparePassword.js';
import { createUser } from './createUser.js';
import { findUserById } from './findUserById.js';
import { findUserByUsername } from './findUserByUsername.js';
import { hashPassword } from './hashPassword.js';

export const usersModel = {
    comparePassword,
    createUser,
    findUserById,
    findUserByUsername,
    hashPassword,
};
