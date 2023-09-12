import { prisma } from '../prisma/index.js';

//showing all the todo at one place
export const showTodoList = async (req, res) => {
  const todoList = await prisma.todos.findMany();
  res.json(todoList);
};

//showing individual todo
export const showTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await prisma.todos.findUnique({ where: { id: id } });
  res.json(todo);
};

//creating todo
export const addTodo = async (req, res) => {
  const newTodo = await prisma.todos.create({
    data: req.body,
  });
  res.json(newTodo);
};

//update todo
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const updatedTodo = await prisma.todos.update({
    where: { id: id },
    data: { title, description },
  });

  res.json(updatedTodo);
};

//delete todo
export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const deleteTodo = await prisma.todos.delete({
    where: { id: id },
  });

  res.json(deleteTodo);
};
