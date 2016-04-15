import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const ToDos = new Mongo.Collection('todos');

Meteor.methods({
    'todos.insert'(text, isAll) {
        check(text, String);
        check(isAll, Boolean);

        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        ToDos.insert({
            text,
            checked: false,
            owner: Meteor.userId(),
            isAll: isAll,
            createdAt: new Date()
        });
    },

    'todos.remove'(todo) {
        check(todo, Object);
        console.log('remove todo');
        ToDos.remove(todo._id);
    },

    'todos.newDay'() {
        // Remove completed todos
        ToDos.find({ owner: Meteor.userId(), checked: true, isAll: false}).fetch().map((todo) => {
            ToDos.remove(todo._id);
        });
        // Return non completed todos to All's list
        ToDos.find({ owner: Meteor.userId(), checked: false, isAll: false}).fetch().map((todo) => {
            ToDos.update(todo._id, { $set: { isAll: true } });
        });
    },

    'todos.toggleChecked'(todo) {
        check(todo, Object);
        ToDos.update(todo._id, { $set: { checked: !todo.checked } });
    },

    // Transfer todos from the All's list to the Today's list
    'todos.transfer'(todo) {
        check(todo, Object);
        console.log('transfer todo');
        ToDos.update(todo._id, { $set: { isAll: false } });
    }
});
