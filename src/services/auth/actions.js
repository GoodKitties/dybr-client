import { api } from './api';

export const loginUser = ({ email, password }) => dispatch => {
  dispatch({
    type: 'AUTH_REQUEST',
  });

  api
    .login()
    .then(result => {
      console.log('result', result);
      /*dispatch({
        payload: result,
        type: 'AUTH_LOGIN',
      });*/
    })
    .catch(error => {
      console.log('error', error);
      /*dispatch({
        payload: { id },
        type: 'AUTH_FAILED',
      });
      */
    });
};

export default {
  loginUser,
};
