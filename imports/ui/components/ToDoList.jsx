import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Button from './Button.jsx';
import ToDoForm from './ToDoForm.jsx';
import ToDo from './ToDo.jsx';
import AllToDo from './AllToDo.jsx';

import { ToDos } from '../../api/todos.js';

export default class ToDoList extends Component {

    componentWillMount() {
        if(!Meteor.userId())
            browserHistory.push('/login');
    }

    // Clear list of checked todos
    newDay() {
        Meteor.call('todos.newDay');
    }

    addToDo(text) {
        // ToDo is on the ALL list
        Meteor.call('todos.insert', text, true);
    }



    renderTodaysToDos() {
        return this.props.todos.map((todo) => {
            if (!todo.isAll)
                return <ToDo key={todo._id} todo={todo}/>;
            }
        );
    }

    renderAllToDos() {
        return this.props.todos.map((todo) => {
            if (todo.isAll)
                return <AllToDo key={todo._id} todo={todo}/>;
            }
        );
    }

    render() {
        return (
            <div>
                <ul className="list">
                    { this.renderTodaysToDos() }
                </ul>
                <Button value="It's A New Day!" newDay={ this.newDay.bind(this) }/>
                <br/>
                <ul className="list">
                    <div className="item item-divider text-center">ALL</div>
                    <ToDoForm addToDo={ this.addToDo.bind(this) }/>
                    { this.renderAllToDos() }
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
        todos: ToDos.find({owner: Meteor.userId()}, { sort: { checked: false, createdAt: 1 } }).fetch()
    };
}, ToDoList);
