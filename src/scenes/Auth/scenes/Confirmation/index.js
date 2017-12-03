import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { curry } from 'lodash';

import { tokenFromProps } from 'scenes/Auth/helpers';

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
    const { errors, token } = this.state;

    return (
      <Form
        errors={errors}
        submit={this.getSubmitConfirmation()}
        token={token}
      />
    );
  }

  render() {
    if (this.shouldRenderForm()) {
      return this.renderForm();
    }

    return (
      <div>
        Confirmation in progress...
      </div>
    );
  }
}

export default ConfirmationContainer(ConfirmationScene);
