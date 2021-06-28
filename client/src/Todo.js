import React from 'react'

const Todo = (props) => {
    return (
        <div className="row-div">
                <i className="fas fa-check-square" />
                <p>{props.todo}</p>
                <i className="fas fa-minus-circle" />
        </div>
    )
}

export default Todo
