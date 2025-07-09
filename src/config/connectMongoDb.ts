import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI no está definida en el archivo .env');
    }
    await mongoose.connect(mongoUri);
    console.log('✅ Conectado a Mongo DB exitosamente');
  } catch (error: any) {
    console.error('🛑 Error al conectarse a Mongo DB:', error.message);
    process.exit(1); //Salir del proceso con error
  }
};

export default connectDB;