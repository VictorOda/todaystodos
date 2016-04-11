import React, { Component, PropTypes } from 'react';

import Header from './Header.jsx';
import Content from './Content.jsx';

// const propTypes = {
//     headerTitle: PropTypes.string.isRequired,
// };

class MainLayout extends Component {
    render() {
        return (
            <div className="ionic-body">
                <Header title="Today's To-Dos"/>
                <Content>
                    {this.props.children}
                </Content>
            </div>
        );
    }
}

// MainLayout.propTypes = propTypes;

export default  MainLayout;
