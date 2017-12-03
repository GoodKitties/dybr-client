import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { tokenFromProps } from 'scenes/Auth/helpers';

import ConfirmationForm from './components/ConfirmationForm';
import ConfirmationContainer from '../../containers/ConfirmationContainer';

export class ConfirmationScene extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    submitConfirmation: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { submitConfirmation } = this.props;
    const token = this.getToken();
    if (token) {
      submitConfirmation(token);
    }
  }

  getToken() {
    const { location } = this.props;
    return tokenFromProps({ location });
  }

  render() {
    const { submitConfirmation } = this.props;

    if (this.getToken()) {
      return <div>Confirmation in progress...</div>;
    }

    return (
      <ConfirmationForm
        submitConfirmation={submitConfirmation}
      />
    );
  }
}

export default ConfirmationContainer(ConfirmationScene);
