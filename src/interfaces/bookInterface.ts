export interface IBook {
  id: string;
  title: string;
  author: string;
  publishedYear?: number; // El '?' indica que es opcional
  genre?: string; // El '?' indica que es opcional
  available?: boolean; // El backend manejará el valor por defecto
}