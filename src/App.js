import React, { Component } from "react";
import Todo from "./Todo";
import TodosData from "./TodosData";
import SearchBar from "./SearchBar";
import Fuse from "fuse.js";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todo: TodosData,
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchTodos = this.searchTodos.bind(this);
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
    searchTodos(pattern) {
        // console.log("search...");
        if (!pattern) {
            this.setState({ todo: TodosData });
        }
        // Searching
        const fuse = new Fuse(TodosData, {
            keys: ["title"],
        });
        const results = fuse.search(pattern);
        let matches = [];
        if (results.length === 0) {
            const emptyTodo = [
                {
                    userId: 1,
                    id: 1,
                    title: "SORRY NO RESULTS!",
                    completed: false,
                },
            ];
            this.setState({ todo: emptyTodo });
        } else {
            results.forEach(({ item }) => {
                const todo = { ...item };
                console.log(todo);
                matches.push(todo);
            });
            console.log("MATCHES", matches);
            console.log("STATE", this.state);
            this.setState({ todo: matches });
        }
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

        return (
            <div className="items-container">
                <SearchBar
                    placeholder="Search"
                    onChange={(e) => this.searchTodos(e.target.value)}
                />
                {TodosComponents}
            </div>
        );
    }
}
