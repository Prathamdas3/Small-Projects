import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//showing all the todo at one place
export const showTodoList = async (req, res) => {
  const todoList = await prisma.todo.findMany();
  res.json(todoList);
};

//showing individual todo
export const showTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await prisma.todo.findUnique({ where: { id: parseInt(id) } });
  res.json(todo);
};

//creating todo
export const addTodo = async (req, res) => {
  const newTodo = await prisma.todo.create({
    data: req.body,
  });
  res.json(newTodo);
};

//update todo
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const updateTodo = await prisma.todo.update({
    where: { id: parseInt(id) },
    data: { title, description },
  });

  res.json(updateTodo);
};

//delete todo
export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const deleteTodo = await prisma.todo.delete({
    where: { id: parseInt(id) },
  });

  res.json(deleteTodo);
};
