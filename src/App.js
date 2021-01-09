import React, { Component } from "react";
import Todo from "./Todo";
import TodosData from "./TodosData";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todo: TodosData,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState((prevState) => {
            const newState = prevState.todo.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                } else {
                    return { ...todo };
                }
            });
            console.log(this.state.todo[0]);
            return { todo: newState };
        });
    }
    render() {
        const TodosComponents = this.state.todo.map((todo) => {
            return (
                <Todo
                    id={todo.id}
                    key={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onChangeProps={this.handleChange}
                />
            );
        });

        return <div className="items-container">{TodosComponents}</div>;
    }
}
