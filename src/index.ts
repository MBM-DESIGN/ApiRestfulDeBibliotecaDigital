import express from 'express';
import { connectDb } from './config/connectMongoDb';
import bookRoutes from './routes/bookRouter';
import { errorHandler } from './utils/errorHandler';

//Cargar variables de entorno usando process.loadEnvFile()
process.loadEnvFile();

const app = express();
const PORT = process.env.PORT || 3000;

//Conectar a la base de datos
connectDb();

//Middleware para parsear JSON
app.use(express.json());

//Rutas de la API
app.use('/api/books', bookRoutes);

//Manejo de rutas no encontradas
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada') as any;
  error.statusCode = 404;
  next(error);
});

//Middleware centralizado de manejo de errores
app.use(errorHandler);

//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor HTTP en funcionamiento en el puerto ${PORT}.`)
  connectDb()
});