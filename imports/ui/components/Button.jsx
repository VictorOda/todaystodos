import React, { Component } from 'react';

export default class Button extends Component {
    render () {
        // const buttonStyle = {
        //     backgroundColor: "#f7c74a",
        //     color: "white"
        // };

        return (
            <div className="text-center">
                <button className="button button-energized icon-right ion-happy">
                    {this.props.value }
                </button>
            </div>
        );
    }
}
