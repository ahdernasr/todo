import React, {useState} from 'react'
import CurrentTodo from './CurrentTodo.js'
import DoneTodo from './DoneTodo.js'
import DoingTodo from './DoingTodo.js'

const Home = () => {
    const [currentTodos, setCurrentTodos] = useState(['Fix wall', 'Learn program']);
    const [doingTodos, setDoingTodos] = useState(['Water plant']);
    const [doneTodos, setDoneTodos] = useState(['Read book', 'Do this', 'Do this']);

    return (
    
        <div className="todo column-div">
            <div className="column-div">
                <div className="column-div todo-type"><DoingTodo todos={doingTodos} /></div>
                <div className="column-div todo-type"><CurrentTodo todos={currentTodos} /></div>
                <div className="column-div todo-type"><DoneTodo todos={doneTodos}/></div>
            </div>
        </div>
    )
}

export default Home
