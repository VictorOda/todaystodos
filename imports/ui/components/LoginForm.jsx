import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default class ToDoForm extends Component {

    register (e) {
        e.preventDefault();
        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();

        Accounts.createUser({email: email, password: password}, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('success!');
                const userId = Meteor.userId();
                browserHistory.push('/');
            }
        });
    }

    login (e) {
        e.preventDefault();
        console.log('Login');
        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();
        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('success!');
                const userId = Meteor.userId();
                browserHistory.push('/');
            }
        });
    }

    logout (e) {
        e.preventDefault();
        console.log('Logout');
        Meteor.logout();
    }

    render () {

        const buttonStyle = {
            maxWidth: "300px",
            margin: "5px",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "45px"
        };

        return (
            <div className="content-block">
                <form className="login">
                    <div className="list list-inset">
                        <label className="item item-input">
                            <input ref="email" type="text" placeholder="E-mail" />
                        </label>
                        <label className="item item-input">
                            <input ref="password" type="password" placeholder="Password" />
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-25" />
                        <div className="col-50">
                            <a
                                className="button button-fill button-raised"
                                style={ buttonStyle }
                                onClick={this.login.bind(this)}>
                                Sign In
                            </a>
                        </div>
                        <div className="col-25" />
                    </div>
                    <div className="row">
                        <div className="col-25" />
                        <div className="col-50">
                            <a
                                className="button button-fill button-raised"
                                style={ buttonStyle }
                                onClick={this.register.bind(this)}>
                                Register
                            </a>
                        </div>
                        <div className="col-25" />
                    </div>
                </form>
            </div>
        );
    }
}
