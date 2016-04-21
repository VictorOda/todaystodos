import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ToDo from './ToDo.jsx';

import { ToDos } from '../../api/todos.js';

export default class TodayList extends Component {

    renderTodaysToDos() {
        return this.props.todos.map((todo) => {
            return <ToDo key={todo._id} todo={todo}/>;
        });
    }

    getCompletedToDos() {
        let completed = 0;
        this.props.todos.map((todo) => {
            if(todo.checked)
                completed++;
        });
        return completed;
    }

    render() {
        const todayInfo = 'Today (' + this.getCompletedToDos() + ' of ' + this.props.todos.length + ' completed)';

        return (
            <div className="card">
                <div className="card-header">{todayInfo}</div>
                <div className="card-content">
                    <div className="list-block">
                        <ul>
                            { this.renderTodaysToDos() }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

TodayList.PropTypes = {
    todos: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        todos: ToDos.find({owner: Meteor.userId(), isAll: false}, { sort: { checked: false, createdAt: 1 } }).fetch()
    };
}, TodayList);
