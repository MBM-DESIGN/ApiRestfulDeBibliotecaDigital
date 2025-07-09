import { Request, Response, NextFunction } from 'express';

//Middleware genérico para manejo de errores
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err); //Mostrar el error

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';

/*Si estamos en producción y no queremos enviar detalles completos del error
  if (process.env.NODE_ENV === 'production') {
     message = 'Ha ocurrido un error inesperado.';
    }*/

  res.status(statusCode).json({
    success: false,
    message: message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined //Mostrar stack en desarrollo
  });
};

// Clase personalizada para errores HTTP
export class ApiError extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
};