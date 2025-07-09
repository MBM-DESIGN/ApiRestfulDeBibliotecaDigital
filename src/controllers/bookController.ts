import { Request, Response } from 'express';
import { Book } from '../models/bookModel';
import { ICreateBookDto, IUpdateBookDto } from '../interfaces/bookInterface';

export const getAllBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({ message: 'Libro no encontrado' });
      return;
    }
    res.status(200).json(book);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const bookData: ICreateBookDto = req.body;
    const newBook = new Book(bookData);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error: any) {
    if (error.code === 11000) { //Error de clave duplicada (para 'title' único)
      res.status(409).json({ message: 'El título del libro ya existe.' });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
};

export const updateBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: IUpdateBookDto = req.body;

    const updatedBook = await Book.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

    if (!updatedBook) {
      res.status(404).json({ message: 'Libro no encontrado' });
      return;
    }
    res.status(200).json(updatedBook);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      res.status(404).json({ message: 'Libro no encontrado' });
      return;
    }
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};