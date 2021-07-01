import * as api from "../api/index.js";

const getTodos = async () => {
  try {
    const data = await api.fetchTodos();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getTodos;
