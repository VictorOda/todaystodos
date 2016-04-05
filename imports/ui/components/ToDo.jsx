import React, { Component } from 'react';

export default class ToDo extends Component {
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
        return (
            <li className="item" style={listItemStyle}>
                <label className="checkbox" style={labelStyle}>
                    <input type="checkbox" />
                </label>
                <span className="text">{this.props.title}</span>
            </li>

        );
    }
}
