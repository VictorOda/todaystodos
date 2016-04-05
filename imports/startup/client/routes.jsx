import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import MainLayout from '../../ui/layouts/MainLayout.jsx';
import Header from '../../ui/layouts/Header.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}/>
  </Router>
);
