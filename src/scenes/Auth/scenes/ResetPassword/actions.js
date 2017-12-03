import { AUTH_LOG_IN } from 'services/action-types';
import { AUTH_ENDPOINT } from 'services/auth/constants';

export function resetPassword({ token, password, passwordConfirmation }) {
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
