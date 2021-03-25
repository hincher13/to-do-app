import React, { Component } from "react";
import TodoList from './TodoList'

class Dashboard extends Component {

    render() {
        return (
            <div>
                <TodoList />
            </div>
        )
    };

}

export default Dashboard;