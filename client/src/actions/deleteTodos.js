import * as api from "../api/index.js";

const deleteTodos = async (todo) => {
  try {
    const data = await api.deleteTodos(todo);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default deleteTodos;
