import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { curry } from 'lodash';

import { tokenFromProps } from '../../helpers';

import ResetPasswordContainer from './container';
import Errors from '../../components/Errors';
import Form from './components/Form';


export class ResetPasswordScene extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    submitResetPassword: PropTypes.func.isRequired,
  };

  constructor({ location }) {
    super();
    this.state.token = tokenFromProps({ location });
  }

  state = {
    errors: {},
    token: null,
  };

  getSetState() {
    return this.setState.bind(this);
  }

  getSubmitResetPassword() {
    const { history, submitResetPassword } = this.props;

    return curry(submitResetPassword)(this.getSetState(), history);
  }

  renderErrors() {
    const { errors } = this.state;
    return <Errors errors={errors} />;
  }

  renderForm() {
    const { token } = this.state;

    return (
      <Form
        submit={this.getSubmitResetPassword()}
        token={token}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderErrors()}
        {this.renderForm()}
      </div>
    );
  }
}

export default ResetPasswordContainer(ResetPasswordScene);
