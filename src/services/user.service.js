import { UserModel } from '../models/user.js';

/**
 * @param {string} email 
 * @returns {Promise<import{"mongoose"}.Document | null>} res 
 */

export const getUserByEmail = async email => {
    return await UserModel.findOne({ email })
}