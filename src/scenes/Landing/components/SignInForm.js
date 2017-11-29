import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import * as actions from 'services/auth/actions';
import Button from 'components/Button';
import InputField from './InputField';

class SignInForm extends React.Component {
  static defaultProps = {
    errorMessage: null,
  };
  static propTypes = {
    logIn: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
  };

  handleFormSubmit = ({ email, password }) => {
    this.props.logIn({ email, password });
  };

  renderError = () => {
    if (this.props.errorMessage) {
      return <div>{this.props.errorMessage}</div>;
    }
    return null;
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Field type="email" name="email" label="Почта" component={InputField} />
          <Field type="password" name="password" label="Пароль" component={InputField} />
          <Button type="submit">Войти</Button>
          {this.renderError()}
        </form>
      </section>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Обязательно';
  }
  if (!values.password) {
    errors.password = 'Обязательно';
  }

  return errors;
}

const mapStateToProps = ({ user }) => ({
  errorMessage: user ? user.error : '', // shouldn't it be handled throu redux form? Could not find, this works for now.
});

export default reduxForm({
  form: 'login',
  validate,
})(withRouter(connect(mapStateToProps, actions)(SignInForm)));
