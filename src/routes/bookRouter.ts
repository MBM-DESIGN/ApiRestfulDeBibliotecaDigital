import { Router } from 'express';
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from '../controllers/bookController';

const router = Router();

router.get('/', getAllBooks); //Obtener todos los libros
router.get('/:id', getBookById); //Obtener un libro por ID
router.post('/', createBook); //Agregar un nuevo libro
router.patch('/:id', updateBook); //Actualizar un libro
router.delete('/:id', deleteBook); //Borrar un libro

export default router;