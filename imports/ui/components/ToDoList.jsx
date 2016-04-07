import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import ToDoForm from './ToDoForm.jsx';
import ToDo from './ToDo.jsx';

import { ToDos } from '../../api/todos.js';

export default class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            todo: "To-Do"
        };
    }

    getToDos() {
        return [
            { _id:1, text: 'Teste 1'},
            { _id:2, text: 'Teste 2'},
            { _id:3, text: 'Teste 3'},
            { _id:4, text: 'Teste 4'}
        ];
    }

    addToDo(todo) {
        this.setState({todo});
    }

    renderToDos() {
        return this.props.todos.map((todo) => (
            <ToDo key={todo._id} todo={todo} />
        ));
    }

    render() {
        return (
            <ul className="list">
                <ToDoForm addToDo={this.addToDo.bind(this)}/>
                {this.renderToDos()}
            </ul>
        );
    }
}

ToDoList.PropTypes = {
    todos: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        todos: ToDos.find({}).fetch()
    };
}, ToDoList);
