import bcrypt from 'bcrypt';

/**
 * @param {string} password
 * @returns {Promise<string>}
 */
export const createHash = async password => {
    return await bcrypt.hash(password, 10);
}

/**
 * @param {string} password
 * @param {string} hashedPassword
 * @returns {Promise<boolean>}
 */
export const isValidPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}