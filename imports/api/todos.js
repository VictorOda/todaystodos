import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ToDos = new Mongo.Collection('todos');

Meteor.methods({
    clearList: function(){
        ToDos.remove({checked: true});
    }
});
