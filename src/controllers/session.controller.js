import { UserModel } from '../models/user.js';
import { getUserByEmail } from '../services/user.service.js';
import { createHash } from '../utils/password.utils.js';

/**
 * @param {import{"express"}.Request} req 
 * @param {import{"express"}.Response} res 
 */

export const register = async (req, res) => {

    const { first_name, last_name, email, password } = req.body

    if (!first_name || !last_name || !email || !password || typeof email !== 'string' ||
    typeof password !== 'string') {
        return res.status(400).json({
            status: "error",
            message: "Faltan campos obligatorios"
        })
    }

    const minPasswordLength = 8;

    if (password.length < minPasswordLength) {
        return res.status(400).json({
            status: "error",
            message: `La contraseña debe tener al menos ${minPasswordLength} caracteres`
        });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const userExists = await getUserByEmail(normalizedEmail);
    if (userExists) {
        return res.status(409).json({
            status: "error",
            message: "El email ya está registrado"
        })
    }

    const hashedPassword = await createHash(password);

    const newUser = await UserModel.create({
        first_name: first_name,
        last_name: last_name,
        email: normalizedEmail,
        password: hashedPassword,
        role: 'user'
    })

    const userWithoutPassword = newUser.toObject();
    delete userWithoutPassword.password;

    res.status(201).json({ data: userWithoutPassword });
}