import React, { Component } from 'react';

export default class Button extends Component {
    render () {
        return (
            <div className="text-center">
                <button className="button button button-energized">
                    {this.props.value }
                    <i className="icon ion-happy"/>
                </button>
            </div>
        );
    }
}
