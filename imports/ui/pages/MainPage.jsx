import React, { Component } from 'react';

import MainLayout from '../layouts/MainLayout.jsx';

import ToDoList from '../components/ToDoList.jsx';

export default class MainPage extends Component {
    render () {
        return (
            <MainLayout headerTitle="Today's To-Dos">
                <ToDoList />
            </MainLayout>
        );
    }
}
