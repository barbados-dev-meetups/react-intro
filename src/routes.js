import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import User from './pages/User';
import App from './pages/App';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/user" component={User} />
    </Switch>
  </Router>
);
