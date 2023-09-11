import { v4 as uuidv4 } from 'uuid';

let todoList = [];

//showing all the todo at one place
export const showTodoList = (req, res) => {
  res.send(todoList);
};

//showing individual todo
export const showTodo = (req, res) => {
  const { id } = req.params;
  const todo = todoList.find((todo) => id === todo.id);
  res.send(todo);
};

//creating todo
export const addTodo = (req, res) => {
  const todo = req.body;

  todoList.push({ ...todo, id: uuidv4() });

  res.send(todoList);
};

//update todo
export const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;
  const todo = todoList.find((todo) => id === todo.id);

  if (title) todo.title = title;
  if (desc) todo.desc = desc;

  res.send(todoList);
};

//delete todo
export const deleteTodo = (req, res) => {
  const { id } = req.params;
  todoList = todoList.filter((todo) => id !== todo.id);
  res.send(todoList);
};
