import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ToDoForm extends Component {

    handleSubmit(e) {
        e.preventDefault();
        const newTodo = ReactDOM.findDOMNode(this.refs.textInput);
        this.props.addToDo(newTodo.value);
        newTodo.value = '';
    }

    render() {
        const buttonStyle = {
            minWidth: 80,
            minHeight: 40,
            fontWeight: "bold",
            fontSize: "115%"
        };

        const itemStyle = {
            minHeight: 40
        };

        return (
            <form className="new-todo" onSubmit={this.handleSubmit.bind(this)}>
                <li className="item item-input-inset">
                    <label className="item-input-wrapper"  style={itemStyle}>
                        <input type="text" placeholder="New To-Do..." ref="textInput"/>
                    </label>
                    <button className="button button-small button-energized" type="submit" style={buttonStyle}>
                        Add
                    </button>
                </li>
            </form>
        );
    }
}
