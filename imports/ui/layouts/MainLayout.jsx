import React, { Component } from 'react';

import Header from './Header.jsx';
import Content from './Content.jsx';

export default class MainLayout extends Component {
    render() {
        return (
            <div className="ionic-body">
                <Header title="Today's To-Dos"/>
                <Content />
            </div>
        );
    }
}
