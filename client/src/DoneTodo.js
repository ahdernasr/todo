import React from 'react'
import Todo from "./Todo"
import {Container} from "react-bootstrap"

const DoneTodo = (props) => {
    return (
        <div>
            <p className="todo-list-title">Done</p>
            <div>
            {props.todos.map(function(todo, i){
                return <Todo todo={todo} key={i} done="false"></Todo>;
            })}
            </div>
        </div>
    )
}

export default DoneTodo
