import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ToDoForm extends Component {

    handleSubmit(e) {
        e.preventDefault();
        // const newTodo = ReactDOM.findDOMNode(this.refs.textInput);
        // this.props.addToDo(newTodo.value.trim());
        // newTodo.value = '';
    }

    render() {

        const buttonStyle = {
            width: "50%",
            maxWidth: "300px",
            margin: "5px",
            fontWeight: "bold",
        };

        return (
            <form className="login" onSubmit={this.handleSubmit.bind(this)}>
                <div className="list list-inset">
                    <label className="item item-input">
                        <input type="text" placeholder="E-mail" />
                    </label>
                    <label className="item item-input">
                        <input type="password" placeholder="Password" />
                    </label>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <button className="button button button-energized" style={buttonStyle}>
                            Sign In
                        </button>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <button className="button button button-energized" style={buttonStyle}>
                            Register
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
