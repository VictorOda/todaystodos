import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="bar bar-header bar-energized">
                <h1 className="title">{this.props.title}</h1>
            </div>
        );
    }
}
