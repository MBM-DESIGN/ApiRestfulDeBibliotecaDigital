import { Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  publishedYear?: number; //El '?' indica que es opcional
  genre?: string; //El '?' indica que es opcional
  available: boolean;
}

//Interfaz para la creación de libros
export interface ICreateBookDto {
  title: string;
  author: string;
  publishedYear?: number;
  genre?: string;
}

//Interfaz para la actualización de libros
export interface IUpdateBookDto {
  title: string;
  author: string;
  publishedYear?: number;
  genre?: string;
  available: boolean;
}