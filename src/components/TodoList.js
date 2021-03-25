import React, { Component } from "react";
import Todo from './Todo';

const TodoList = () => {
    return(
        <div className="DisplayTasks-Container">
            <ul className="DisplayTasks-List">
                <Todo />
            </ul>

        </div>
    )
}

export default TodoList;