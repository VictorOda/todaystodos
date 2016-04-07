import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Button from './Button.jsx';
import ToDoForm from './ToDoForm.jsx';
import ToDo from './ToDo.jsx';

import { ToDos } from '../../api/todos.js';

export default class ToDoList extends Component {

    // Clear list of checked todos
    newDay() {
        Meteor.call("clearList");
        console.log("ClearList");
    }

    addToDo(text) {
        ToDos.insert({
            text,
            checked: false,
            createdAt: new Date()
        });
    }

    renderToDos() {
        return this.props.todos.map((todo) => (
            <ToDo key={todo._id} todo={todo} />
        ));
    }

    render() {
        return (
            <div>
                <ul className="list">
                    <ToDoForm addToDo={this.addToDo.bind(this)}/>
                    {this.renderToDos()}
                    <Button value="It's A New Day!" newDay={this.newDay.bind(this)}/>
                </ul>

            </div>
        );
    }
}

ToDoList.PropTypes = {
    todos: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        todos: ToDos.find({}, { sort: { checked: false, createdAt: 1 } }).fetch()
    };
}, ToDoList);
