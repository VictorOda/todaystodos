import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';

export default class ToDoForm extends Component {

    register (e) {
        e.preventDefault();
        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();
        //
        // Accounts.createUser({
        //     mail: email,
        //     password: password
        // });
        console.log(email);
        console.log(password);
        Accounts.createUser({email: email, password: password}, function(err) {
          if (err)
            console.log(err);
          else
            console.log('success!');
        });
    }

    login (e) {
        e.preventDefault();
        console.log('Login');
        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();
        Meteor.loginWithPassword(email, password, (err) => {
            if (err)
              console.log(err);
            else
              console.log('success!');
        });
    }

    logout (e) {
        e.preventDefault();
        console.log('Logout');
        Meteor.logout();
    }

    render () {

        const buttonStyle = {
            width: "50%",
            maxWidth: "300px",
            margin: "5px",
            fontWeight: "bold",
        };

        return (
            <form className="login">
                <div className="list list-inset">
                    <label className="item item-input">
                        <input ref="email" type="text" placeholder="E-mail" />
                    </label>
                    <label className="item item-input">
                        <input ref="password" type="password" placeholder="Password" />
                    </label>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <button
                            className="button button button-energized"
                            style={buttonStyle}
                            onClick={this.login.bind(this)}>
                            Sign In
                        </button>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <button
                            className="button button button-energized"
                            style={buttonStyle}
                            onClick={this.register.bind(this)}>
                            Register
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
