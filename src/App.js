import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';

import { isLoggedIn } from './services/auth/helpers';
import scenes from './scenes';

const {
  Auth,
  Blog,
  Main,
  Profile,
} = scenes;

export const Application = ({ loggedIn }) => {
  const RootComponent = Main; // loggedIn ? Main : Landing;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RootComponent} />
        <Route path="/blogs/:uri" component={Blog} />
        <Route path="/profiles/:uri" component={Profile} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Router>
  );
};

Application.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state),
  };
};

export default connect(mapStateToProps)(Application);
