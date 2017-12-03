import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { curry } from 'lodash';

import { tokenFromProps } from 'scenes/Auth/helpers';

import Errors from './components/Errors';
import Form from './components/Form';

import ConfirmationContainer from './containers/ConfirmationContainer';
import { FAILED_STATUS, NEW_STATUS } from './constants';

export class ConfirmationScene extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    submitConfirmation: PropTypes.func.isRequired,
  };

  constructor({ location }) {
    super();
    this.state.token = tokenFromProps({ location });
  }

  state = {
    errors: {},
    status: NEW_STATUS,
    token: null,
  };

  componentDidMount() {
    const { token } = this.state;
    if (token) {
      this.getSubmitConfirmation()(token);
    }
  }

  getSetState() {
    return this.setState.bind(this);
  }

  getSubmitConfirmation() {
    const { history, submitConfirmation } = this.props;

    return curry(submitConfirmation)(this.getSetState(), history);
  }

  shouldRenderForm() {
    const { status, token } = this.state;
    return (status === NEW_STATUS && !token) || (status === FAILED_STATUS);
  }

  renderForm() {
    if (!this.shouldRenderForm()) return null;
    const { token } = this.state;

    return (
      <Form
        submit={this.getSubmitConfirmation()}
        token={token}
      />
    );
  }

  renderErrors() {
    const { errors } = this.state;
    return <Errors errors={errors} />;
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

export default ConfirmationContainer(ConfirmationScene);
