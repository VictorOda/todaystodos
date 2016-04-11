import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import MainPage from '../../ui/pages/MainPage.jsx';
import LoginPage from '../../ui/pages/LoginPage.jsx';

import MainLayout from '../../ui/layouts/MainLayout.jsx';
import LoginForm from '../../ui/components/LoginForm.jsx';
import ToDoList from '../../ui/components/ToDoList.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
        <IndexRoute component={ToDoList} />
        <Route path="login" component={LoginForm} />
    </Route>
  </Router>
);
