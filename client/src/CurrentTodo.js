import React from 'react'
import Todo from './Todo'
import {Container} from "react-bootstrap"

const CurrentTodo = (props) => {
    return (
        <Container>
            <p className="todo-list-title">Todo</p>
            <div>
            {props.todos.map(function(todo, i){
                return <Todo todo={todo} key={i} done="false"></Todo>;
            })}
            </div>
        </Container>
    )
}

export default CurrentTodo
