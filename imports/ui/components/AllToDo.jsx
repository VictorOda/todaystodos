import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import { ToDos } from '../../api/todos.js';

export default class AllToDo extends Component {

    render () {
        const listItemStyle = {
            paddingTop: 6,
            paddingBottom: 6,
            paddingRight: 6,
            paddingLeft: 6,
        };
        const textStyle = {
            marginLeft: "15px",
            verticalAlign: "-9px",
        };
        const buttonStylePlus = {
            float: "right",
            verticalAlign: "middle",
            margin: "2px 0",
            color: "rgb(30, 177, 30)",
            width: "30px"
        };
        const buttonStyleMinus = {
            float: "right",
            verticalAlign: "middle",
            margin: "2px 0",
            color: "rgb(255, 0, 0)"
        };

        return (
            <li className="item" style={listItemStyle}>
                <span className="text" style={textStyle}>{this.props.todo.text}</span>
                <a
                    className="button button-small button-icon icon ion-plus-circled"
                    style={ buttonStylePlus }
                    onClick={ this.props.transferToDo.bind(this, this.props.todo) } />
                <a
                    className="button button-small button-icon icon ion-minus-circled"
                    style={ buttonStyleMinus }
                    onClick={ this.props.removeToDo.bind(this, this.props.todo) } />
            </li>
        );
    }
}

AllToDo.PropTypes = {
    todo: PropTypes.object.isRequired
};
