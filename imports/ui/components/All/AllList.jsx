import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import ToDoForm from './ToDoForm.jsx';
import AllToDo from './AllToDo.jsx';

import { ToDos } from '../../../api/todos.js';

export default class AllList extends Component {

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
        );
    }
}

AllList.PropTypes = {
    todos: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        todos: ToDos.find({owner: Meteor.userId(), isAll: true}, { sort: { checked: false, createdAt: 1 } }).fetch()
    };
}, AllList);
