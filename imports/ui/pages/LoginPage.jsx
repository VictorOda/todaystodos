import React, { Component } from 'react';

import MainLayout from '../layouts/MainLayout.jsx';

import LoginForm from '../components/LoginForm.jsx';

export default class MainPage extends Component {
    render () {
        return (
            <MainLayout headerTitle="Login">
                <LoginForm />
            </MainLayout>
        );
    }
}
