import React, { Component, PropTypes } from 'react';

class ButtonCentered extends Component {
    render () {
        const buttonStyle = {
            maxWidth: "300px",
            margin: "5px",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "45px"
        };

        return (
            <div className="row">
                <div className="col-25" />
                <div className="col-50">
                    <a
                        className="button button-fill button-raised"
                        style={ buttonStyle }
                        onClick={this.props.action.bind(this)}>
                        { this.props.title }
                    </a>
                </div>
                <div className="col-25" />
            </div>
        );
    }
}

ButtonCentered.PropTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};

export default ButtonCentered;
