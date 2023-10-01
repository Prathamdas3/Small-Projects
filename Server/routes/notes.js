import express from 'express';
import {
  showNote,
  showNotes,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notes.js';

const router = express.Router();

router.get('/', showNotes);

router.get('/:id', showNote);

router.post('/', createNote);

router.patch('/:id', updateNote);

router.delete('/:id', deleteNote);

export default router;
