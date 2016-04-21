import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Button from './Button.jsx';
import TodayList from './Today/TodayList.jsx';
import AllList from './All/AllList.jsx';

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

    render() {
        return (
            <div>
                <TodayList />
                <Button value="It's A New Day!" newDay={ this.newDay.bind(this) } />
                <AllList />
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
