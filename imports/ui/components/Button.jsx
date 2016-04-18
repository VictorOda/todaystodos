import React, { Component } from 'react';

export default class Button extends Component {
    render () {
        const buttonStyle = {
            verticalAlign: "middle",
            fontWeight: "bold",
            lineHeight: "46px",
            width: "50%",
            margin: "0 auto",
            textAlign: "center"
        };

        return (
            <div className="content-block">
                <p>
                    <a
                        className="button button-fill button-raised"
                        style={ buttonStyle }
                        onClick={this.props.newDay.bind(this)}>
                        {this.props.value }
                    </a>
                </p>
            </div>
        );
    }
}
