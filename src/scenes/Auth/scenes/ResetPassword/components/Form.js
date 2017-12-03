import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResetPasswordForm extends Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    token: PropTypes.string,
  };

  static defaultProps = {
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
    password: '',
    passwordConfirmation: '',
  };

  componentWillReceiveProps({ token }) {
    if (token) {
      this.setState({ token });
    }
  }

  onSubmit(ev) {
    ev.preventDefault();

    const { submit } = this.props;
    const { password, passwordConfirmation, token } = this.state;

    submit({ password, passwordConfirmation, token });
  }

  getChangeHandler(field) {
    return (ev) => {
      const { value } = ev.currentTarget;
      this.setState({ [field]: value });
    };
  }

  render() {
    const { password, passwordConfirmation, token } = this.state;

    return (
      <form onSubmit={ev => this.onSubmit(ev)}>
        <input
          onChange={this.getChangeHandler('token')}
          placeholder="Код подтверждения"
          type="text"
          value={token}
        />
        <input
          onChange={this.getChangeHandler('password')}
          placeholder="Пароль"
          type="password"
          value={password}
        />
        <input
          onChange={this.getChangeHandler('passwordConfirmation')}
          placeholder="Пароль еще раз"
          type="password"
          value={passwordConfirmation}
        />
        <input type="submit" value="Подтвердить" />
      </form>
    );
  }
}

export default ResetPasswordForm;
