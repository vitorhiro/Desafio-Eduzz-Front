import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/cadastro" component={Register} />
    <Route exact path="/inicial" component={Home} />
  </Switch>
);

export default Routes;
