import * as api from "../api/index.js";

const createTodos = async (todo) => {
  try {
    const data = await api.createTodos(todo);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default createTodos;
