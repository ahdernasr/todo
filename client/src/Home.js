import React, { useState } from "react";
import Todo from "./Todo.js";
import Form from "./Form.js";

const Home = () => {
  const [todos, setTodos] = useState([
    {
      text: "Water plant",
      done: false,
    }
  ]);

  const createTodo = (input) => {
    input ? setTodos([...todos, input]) : setTodos([...todos]);
  };

  const updateTodo = (todo) => {
    const text = todo.text;
    var newTodos;

    if (todo.done) {
      newTodos = todos
        .filter(function (e) {
          return e.text !== text;
        })
        .push({
          done: false,
          text: text,
        });
    } else {
      newTodos = todos
        .filter(function (e) {
          return e.text !== text;
        })
        .push({
          done: true,
          text: text,
        });
    }
    
    setTodos(newTodos);

    console.log(todos)
  };

  const deleteTodo = (todo) => {

  };

  const submitHandler = (input) => {
    createTodo(input);
  };

  return (
    <div className="todo column-div">
      <div className="todo-type-container">
        <div className="column-div todo-type-sub-div">
          <p className="todo-type-title">Todo</p>
          {todos.map(function (todo, i) {
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
