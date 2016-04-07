import React, { Component } from 'react';

export default class Button extends Component {
    render () {
        return (
            <div className="text-center">
                <button className="button button-energized icon-right ion-happy"
                        onClick={this.props.newDay()}>
                    {this.props.value }
                </button>
            </div>
        );
    }
}
