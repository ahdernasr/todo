import Todos from "../models/todoModel.js";
import mongoose from "mongoose"

export const getTodos = async (req, res) => {
  try {
    const todoList = await Todos.find();

    res.status(200).json(todoList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTodos = async (req, res) => {
  const todo = req.body;

  const newTodo = new Todos(todo);

  try {
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTodos = async (req, res) => {
  const updatedTodo = req.body;

  if (!mongoose.Types.ObjectId.isValid(updatedTodo._id))
    return res.status(404).send(`No post with id: ${_id}`);

  await Todos.findByIdAndUpdate(updatedTodo._id, updatedTodo, { new: true });

  res.json(updatedTodo);
};

export const deleteTodos = async (req, res) => {

  const todo = req.body;
  const id = todo._id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Todos.findByIdAndDelete(id);

  res.json({ message: "Todo deleted successfully. " });
};
