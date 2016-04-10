import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import MainPage from '../../ui/pages/MainPage.jsx';
import LoginPage from '../../ui/pages/LoginPage.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainPage}/>
    <Route path="/login" component={LoginPage} />
  </Router>
);
