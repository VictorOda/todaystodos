import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ButtonCentered from './ButtonCentered.jsx';

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
                    <ButtonCentered title="Log In" action={this.login.bind(this)} />
                    <ButtonCentered title="Register" action={this.register.bind(this)} />
                </form>
            </div>
        );
    }
}
