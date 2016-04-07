import React, { Component } from 'react';

import ToDoList from '../components/ToDoList.jsx';

export default class Content extends Component {
    render () {
        return (
            <div className="view">
                <div className="scroll-content ionic-scroll">
                    <div className="content overflow-scroll has-header">
                        <ToDoList />
                    </div>
                </div>
            </div>
        );
    }
}
