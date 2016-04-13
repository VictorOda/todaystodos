import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const ToDos = new Mongo.Collection('todos');

Meteor.methods({
    'todos.insert'(text) {
        check(text, String);

        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        ToDos.insert({
            text,
            checked: false,
            owner: Meteor.userId(),
            createdAt: new Date()
        });
    },

    'todos.remove'(todoId) {
        check(todoId, String);

        ToDos.remove(todoId);
    },

    'todos.newDay'() {
        ToDos.find({ owner: Meteor.userId(), checked: true}).fetch().map((todo) => {
            ToDos.remove(todo._id);
        });

    },

    'todos.setChecked'(todoId, setChecked) {
        check(todoId, String);
        check(setChecked, Boolean);

        ToDos.update(todoId, { $set: { checked: setChecked } });
    }
});
