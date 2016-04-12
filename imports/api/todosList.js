// NOT BEING USED

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const TodosList = new Mongo.Collection('todosList');

Meteor.methods({
    'todos.createList'(name) {
        check(name, String);

        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        // TODO: When implementing more than one list funcionality,
        // set the todos to their respective list.
        ToDosList.insert({
            name,
            owner: Meteor.userId(),
            createdAt: new Date()
        });
    },

    'todos.remove'(todoListId) {
        check(todoListId, String);

        ToDosList.remove(todoListId);
    }
});
