import React, { Component } from 'react';

import Button from '../components/Button.jsx';

export default class Content extends Component {
    render () {
        return (
            <div className="view">
                <div className="scroll-content ionic-scroll">
                    <div className="content overflow-scroll has-header">
                        <h1 className="text-center">Content</h1>
                        <Button value="It's A New Day!  "/>
                    </div>
                </div>
            </div>
        );
    }
}
