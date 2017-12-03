// Service pages for logging in, verifying email and resetting password
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { ConfirmScene, ResetPasswordScene } from './scenes';

const AuthScene = ({ match }) => {
  const { path } = match;

  return (
    <Switch>
      <Route path={`${path}/confirm`} component={ConfirmScene} />
      <Route path={`${path}/reset-password`} component={ResetPasswordScene} />
    </Switch>
  );
};

AuthScene.propTypes = {
  match: PropTypes.object.isRequired,
};

export default AuthScene;
