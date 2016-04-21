import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

export default class AllToDo extends Component {

    render () {
        const listItemStyle = {
            paddingTop: 6,
            paddingBottom: 6,
            paddingRight: 6,
            paddingLeft: 6,
        };
        const textStyle = {
            verticalAlign: "middle",
            whiteSpace: "initial",
            padding: "0px 10px",
            display: "list-item"
        };
        const textBoxStyle = {
            margin: "auto 0"
        };
        const buttonStylePlus = {
            float: "right",
            verticalAlign: "middle",
            margin: "2px 0",
            color: "rgb(30, 177, 30)",
            width: "30px"
        };
        const buttonStyleMinus = {
            float: "right",
            verticalAlign: "middle",
            margin: "2px 0",
            color: "rgb(255, 0, 0)"
        };

        return (
            <li className="item" style={listItemStyle}>
                <div className="row no-gutter">
                    <div className="col-75" style={ textBoxStyle }>
                        <span className="text" style={textStyle}>{this.props.todo.text}</span>
                    </div>
                    <div className="col-25" style={ textBoxStyle }>
                        <a
                            className="button button-small button-icon icon ion-plus-circled"
                            style={ buttonStylePlus }
                            onClick={ this.props.transferToDo.bind(this, this.props.todo) } />
                        <a
                            className="button button-small button-icon icon ion-minus-circled"
                            style={ buttonStyleMinus }
                            onClick={ this.props.removeToDo.bind(this, this.props.todo) } />
                    </div>
                </div>
            </li>
        );
    }
}
