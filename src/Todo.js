import React, { Component } from "react";

export default class Todo extends Component {
    constructor() {
        super();
        this.state = { isClicked: false };
        this.clicked = this.clicked.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    clicked() {
        this.setState((prevState) => {
            return { isClicked: !prevState.isClicked };
        });
    }
    handleClick() {
        console.log("clicked");
        const clicked = () => this.props.onChangeProps(this.props.id);
        clicked();
        this.clicked();
    }
    render() {
        return (
            <div
                className={`animate__animated animate__backInUp animate__faster todo-item 
                ${this.state.isClicked ? " hovered" : " "}`}
                onClick={() => this.handleClick()}
            >
                <h4>{this.props.title}</h4>
                <input
                    type="checkbox"
                    name="check"
                    id="check"
                    checked={this.props.completed}
                    onChange={() => this.props.onChangeProps(this.props.id)}
                />
            </div>
        );
    }
}
