import express from 'express';
import {
  showTodoList,
  addTodo,
  showTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/todo.js';

const router = express.Router();

router.get('/', showTodoList);

router.get('/:id', showTodo);

router.post('/', addTodo);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;
