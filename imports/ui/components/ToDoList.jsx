import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Button from './Button.jsx';
import ToDoForm from './ToDoForm.jsx';
import ToDo from './ToDo.jsx';
import AllToDo from './AllToDo.jsx';
import TodayList from './TodayList.jsx';

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

    transferToDo(todo) {
        Meteor.call('todos.transfer', todo);
    }

    removeToDo(todo) {
        Meteor.call('todos.remove', todo);
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
                return <AllToDo
                            key={ todo._id }
                            todo={ todo }
                            removeToDo={ this.removeToDo.bind(this) }
                            transferToDo={ this.transferToDo.bind(this) } />;
            }
        );
    }

    render() {
        return (
            <div>
                <TodayList />
                <Button value="It's A New Day!" newDay={ this.newDay.bind(this) }/>
                <div className="card">
                    <div className="card-header">All</div>
                    <div className="card-content">
                        <div className="list-block">
                            <ul>
                                <ToDoForm addToDo={ this.addToDo.bind(this) }/>
                                { this.renderAllToDos() }
                            </ul>
                        </div>
                    </div>
                </div>
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
