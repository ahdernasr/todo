import React from "react";

const Todo = (props) => {

  return (
    <div className="single-todo">
      <div onClick={() => {
        props.update(props.todos)
      }} className={props.todos.done ? "fas fa-undo" : "fas fa-check"}></div>
      <div className={props.todos.done ? "done-todo" : ""}>{props.todos.text}</div>
      <div onClick={() => {
        props.delete(props.todos)
      }} className="fas fa-times-circle"></div>
    </div>
  );
};

export default Todo;
