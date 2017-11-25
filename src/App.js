import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { api } from './services/auth/api';

import scenes from './scenes';
const { Blog, Main, Profile, Landing } = scenes;

function Application({ loggedIn }) {
  // todo: have a "loading" state when loggedIn is undefined
  console.log('loggedIn', loggedIn);
  return (
    <Router>
      <Switch>
        <Route path="/" component={loggedIn ? Main : Landing} />
        <Route path="/blogs/:uri" component={Blog} />
        <Route path="/profiles/:uri" component={Profile} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = ({ auth }) => {
  const { loggedIn } = auth;
  return { loggedIn };
};

export default connect(mapStateToProps)(Application);
