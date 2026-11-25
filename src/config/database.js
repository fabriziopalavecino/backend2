import mongoose from 'mongoose';
import { env } from './config.js';

export const connectDB = async () => {
    try{
        await mongoose.connect(env.MONGO_URL)
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
}