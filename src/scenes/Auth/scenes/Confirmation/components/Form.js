import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConfirmationForm extends Component {
  static propTypes = {
    errors: PropTypes.array,
    submit: PropTypes.func.isRequired,
    token: PropTypes.string,
  };

  static defaultProps = {
    errors: null,
    token: null,
  };

  constructor({ token }) {
    super();

    if (token) {
      this.state.token = token;
    }
  }

  state = {
    token: '',
  };

  componentWillReceiveProps({ token }) {
    if (token) {
      this.setState({ token });
    }
  }

  onChange(ev) {
    const token = ev.currentTarget.value;
    this.setState({ token });
  }

  onSubmit(ev) {
    const { submit } = this.props;
    const { token } = this.state;

    ev.preventDefault();

    submit(token);
  }

  renderErrors() {
    if (!this.props.errors) return null;

    return (
      <p>Неверный код</p>
    );
  }

  render() {
    const { token } = this.state;

    return (
      <form onSubmit={ev => this.onSubmit(ev)}>
        {this.renderErrors()}
        <input
          onChange={ev => this.onChange(ev)}
          placeholder="Код подтверждения"
          type="text"
          value={token}
        />
        <input type="submit" value="Подтвердить" />
      </form>
    );
  }
}

ConfirmationForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ConfirmationForm;
