import express { Request, Response, NextFunction } from "express"
import dotenv from 'dotenv';
import { connectDb } from "./config/connectMongoDb"
import bookRoutes from './routes/bookRouter'

dotenv.config(); //Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;

//Conectar a la base de datos
connectDb();

//Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

//Rutas de la API
app.use('/api/books', bookRoutes);

//Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor HTTP en funcionamiento en el puerto ${PORT}.`)
  connectDb()
});
