import React, { Component } from 'react';

export default class ToDoForm extends Component {
    render() {
        const buttonStyle = {
            minWidth: 80,
            minHeight: 40,
            fontWeight: "bold",
            fontSize: "115%"
        };
        const itemStyle = {
            minHeight: 40
        };
        return (
            <li className="item item-input-inset">
                <label className="item-input-wrapper"  style={itemStyle}>
                    <input type="text" placeholder="New Todo Item..." />
                </label>
                <button className="button button-small button-energized" style={buttonStyle}>
                    Add
                </button>
            </li>
        );
    }
}
