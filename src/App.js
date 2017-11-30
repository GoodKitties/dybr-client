import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';

import { isLoggedIn } from './services/auth/helpers';
import scenes from './scenes';

const {
  Blog,
  Main,
  Profile,
  // Landing,
} = scenes;

export const Application = ({ loggedIn }) => {
  const rootComponent = Main; // loggedIn ? Main : Landing;

  return (
    <Router>
      <Switch>
        <Route path="/" component={rootComponent} />
        <Route path="/blogs/:uri" component={Blog} />
        <Route path="/profiles/:uri" component={Profile} />
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
