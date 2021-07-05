import axios from 'axios';

// const url = 'https://m-e-r-n-todo.herokuapp.com/todos'
const url = 'http://localhost:5000/todos'

export const fetchTodos = () => axios.get(url);
export const createTodos = (newTodo) => axios.post(url, newTodo);
export const deleteTodos = (todo) => {
    axios.delete(url, {data: todo})
};
export const updateTodos = (todo) => axios.patch(url, todo);