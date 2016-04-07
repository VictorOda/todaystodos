import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="bar bar-footer">
                <h1 className="title">{this.props.title}</h1>
            </div>
        );
    }
}
