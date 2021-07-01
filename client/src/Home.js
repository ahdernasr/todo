import React, { useState, useEffect } from "react";
import Todo from "./Todo.js";
import Form from "./Form.js";

import fetchTodos from "./actions/getTodos.js";
import updateTodos from "./actions/updateTodos.js";
import createTodos from "./actions/createTodos.js";
import deleteTodos from "./actions/deleteTodos.js";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchAndSetTodos = async () => {
      var response = await fetchTodos();
      console.log(response.data)
      setTodos(response.data);
    };

    fetchAndSetTodos();
  }, []);

  function hasDuplicates(myArray, item) {
    var newArray = [...myArray, item]
    newArray = newArray.map(x => x.text)
    return newArray.length === new Set(newArray).size;
  }

  const createTodo = (input) => {
    var todo = {
      text: input.text,
      done: false,
    };

    if (hasDuplicates(todos, todo) && input.text.length > 0) {
      createTodos(todo);
      setTodos([...todos, todo]);
    } else {
      setTodos([...todos]);
    }
  };

  const updateTodo = (todo) => {
    const text = todo.text;
    const id = todo._id;

    var filteredTodos, newTodo;

    if (todo.done) {
      newTodo = {
        done: false,
        text: text,
        _id: id,
      };

      filteredTodos = todos.filter((e) => e.text !== text);
      filteredTodos.unshift(newTodo);

      setTodos(filteredTodos);

      updateTodos(newTodo);
    } else {
      newTodo = {
        done: true,
        text: text,
        _id: id,
      };

      filteredTodos = todos.filter((e) => e.text !== text);
      filteredTodos.push(newTodo);

      setTodos(filteredTodos);

      updateTodos(newTodo);
    }
  };

  const deleteTodo = (todo) => {
    const id = todo._id;
    const text = todo.text;

    var newTodo = {
      done: true,
      text: text,
      _id: id,
    };

    var filteredTodos;

    filteredTodos = todos.filter((e) => e.text !== text);

    deleteTodos(newTodo);

    setTodos(filteredTodos);
  };

  const submitHandler = (input) => {
    createTodo(input);
  };

  return (
    <div className="todo column-div">
      <div className="todo-type-container">
        <div className="column-div todo-type-sub-div">
          <p className="todo-type-title">Todo</p>
          {todos &&
            todos.map(function (todo, i) {
              return (
                <Todo
                  delete={deleteTodo}
                  update={updateTodo}
                  key={i}
                  todos={todo}
                />
              );
            })}
        </div>
      </div>
      <div className="input-container">
        <Form submit={submitHandler}></Form>
      </div>
    </div>
  );
};

export default Home;
