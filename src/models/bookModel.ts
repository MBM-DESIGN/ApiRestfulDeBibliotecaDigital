import { Schema, model } from 'mongoose';
import { IBook } from '../interfaces/bookInterface';

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    publishedYear: { type: Number },
    genre: { type: String },
    available: { type: Boolean, default: true },
  },
  {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
  }
);

const Book = model("Book", bookSchema)

export { Book }