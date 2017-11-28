import { AUTH_LOG_IN, AUTH_LOG_OUT } from '../action-types';

const TOKEN_ENDPOINT = process.env.REACT_APP_TOKEN_ENDPOINT;

export const logIn = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      payload: { email, password },
      status: 'started',
      type: AUTH_LOG_IN,
    });

    return fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 404) return { error: 'Not Found' };
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

export default {
  logIn,
  logOut,
  storeToken,
};
