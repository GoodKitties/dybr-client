import {
  AUTH_LOG_IN,
  AUTH_LOG_OUT,
} from '../action-types';

const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;

export const logIn = ({ email, password }) => {
  return (dispatch) => {
    return fetch(`${AUTH_ENDPOINT}/token`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 404) {
          return Promise.reject({ message: 'Неверный логин или пароль' });
        }
        return response.json();
      })
      .then(({ error, jwt }) => {
        if (error) {
          return Promise.reject({ message: error });
        }

        return dispatch({
          payload: { jwt },
          status: 'success',
          type: AUTH_LOG_IN,
        });
      })
      .catch((err) => {
        return dispatch({
          payload: { message: err.message },
          status: 'failed',
          type: AUTH_LOG_IN,
        });
      });
  };
};

export const storeToken = ({ jwt }) => ({
  payload: { jwt },
  status: 'success',
  type: AUTH_LOG_IN,
});

export const logOut = () => ({
  type: AUTH_LOG_OUT,
});

export const confirmEmail = (token) => {
  return (dispatch) => {
    return fetch(`${AUTH_ENDPOINT}/confirm`, {
      method: 'POST',
      body: JSON.stringify({ confirmation_token: token }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 404) {
          return Promise.reject({ message: 'Not Found' });
        }
        return response.json();
      })
      .then(({ error, jwt }) => {
        if (error) {
          return Promise.reject({ message: error });
        }

        return dispatch({
          payload: { jwt },
          status: 'success',
          type: AUTH_LOG_IN,
        });
      })
      .catch((err) => {
        return dispatch({
          payload: { message: err.message },
          status: 'failed',
          type: AUTH_LOG_IN,
        });
      });
  };
};

export const resetPassword = ({ token, password, passwordConfirmation }) => {
  return (dispatch) => {
    return fetch(`${AUTH_ENDPOINT}/reset_password`, {
      method: 'POST',
      body: JSON.stringify({
        password,
        password_confirmation: passwordConfirmation,
        reset_password_token: token,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 404) {
          return Promise.reject({ message: 'Not Found' });
        }
        return response.json();
      })
      .then(({ error, jwt }) => {
        if (error) {
          return Promise.reject({ message: error });
        }

        return dispatch({
          payload: { jwt },
          status: 'success',
          type: AUTH_LOG_IN,
        });
      })
      .catch((err) => {
        return dispatch({
          payload: { message: err.message },
          status: 'failed',
          type: AUTH_LOG_IN,
        });
      });
  };
};

export default {
  logIn,
  logOut,
  storeToken,
  confirmEmail,
  resetPassword,
};
