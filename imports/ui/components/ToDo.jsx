import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import { ToDos } from '../../api/todos.js';

export default class ToDo extends Component {

    toggleChecked() {
        // ToDos.update(this.props.todo._id, {
        //     $set: { checked: !this.props.todo.checked }
        // });
        Meteor.call('todos.toggleChecked', this.props.todo);
    }

    render () {
        const listItemStyle = {
            paddingTop: 6,
            paddingBottom: 6,
            paddingRight: 6,
            paddingLeft: 6
        };
        const labelStyle = {
            verticalAlign: "middle"
        };
        const textStyleCompleted = {
            textDecoration: "line-through"
        };
        const textStyleIncomplete = {
        };

        const isChecked = this.props.todo.checked ? "checked" : "";
        const textStyle = this.props.todo.checked ? textStyleCompleted : textStyleIncomplete;

        return (
            <li className="item" style={listItemStyle}>
                <label className="checkbox" style={labelStyle}>
                    <input type="checkbox"  readOnly checked={isChecked} onClick={this.toggleChecked.bind(this)}/>
                </label>
                <span className="text" style={textStyle}>{this.props.todo.text}</span>
            </li>
        );
    }
}

ToDo.PropTypes = {
    todo: PropTypes.object.isRequired
};
