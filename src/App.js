import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import scenes from './scenes';
import PrivateRoute from './PrivateRoute';

const {
  Auth,
  Blog,
  Main,
  Profile,
  SignUp,
} = scenes;

export const Application = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/wizardry" component={SignUp} />
        <Route path="/blogs/:uri" component={Blog} />
        <Route path="/profiles/:uri" component={Profile} />
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default Application;
