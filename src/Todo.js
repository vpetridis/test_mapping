import React, { Component } from "react";

export default class Todo extends Component {
    constructor() {
        super();
        this.state = { isHover: false };
        this.onHover = this.onHover.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    onHover() {
        this.setState((prevState) => {
            return { isHover: !prevState.isHover };
        });
        console.log(this.state.isHover);
    }
    handleClick() {
        console.log("clicked");
        const clicked = () => this.props.onChangeProps(this.props.id);
        this.onHover();
        clicked();
    }
    render() {
        return (
            <div
                className={`todo-item ${this.state.isHover ? "hovered" : " "}`}
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
