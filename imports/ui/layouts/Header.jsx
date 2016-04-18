import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="center">{this.props.title}</div>
                </div>
            </div>
        );
    }
}
