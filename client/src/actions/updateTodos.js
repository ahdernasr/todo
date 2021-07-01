import * as api from "../api/index.js";

const updateTodos = async (todo) => {
  try {
    const data = await api.updateTodos(todo);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default updateTodos;
