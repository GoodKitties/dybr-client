import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { isLoggedIn } from './services/auth/helpers';
import scenes from './scenes';

const {
  Blog, Main, Profile, Landing,
} = scenes;

export const Application = ({ loggedIn }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={loggedIn ? Main : Landing} />
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
