import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import { isLoggedIn } from 'services/auth/helpers';
import scenes from './scenes';

const {
  Blog, Main, Profile, SignUp,
} = scenes;

export const Application = ({ loggedIn, signUpComplete }) => {
  if (loggedIn && !signUpComplete) {
    return (
      <Router>
        <Route path="/" component={SignUp} />
      </Router>
    );
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/blogs/:uri" component={Blog} />
        <Route path="/profiles/:uri" component={Profile} />
      </Switch>
    </Router>
  );
};

Application.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  signUpComplete: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state),
    signUpComplete: false, // TODO
  };
};

export default connect(mapStateToProps)(Application);
