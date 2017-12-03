import { AUTH_LOG_IN } from 'services/action-types';
import { AUTH_ENDPOINT } from 'services/auth/constants';

import {
  FAILED_STATUS, PENDING_STATUS, SUCCESS_STATUS,
} from '../../../constants';

export default function resetPassword(
  setState, history,
  { token, password, passwordConfirmation },
) {
  return async (dispatch) => {
    setState({ status: PENDING_STATUS });

    const response = await fetch(`${AUTH_ENDPOINT}/reset_password`, {
      method: 'POST',
      body: JSON.stringify({
        password,
        password_confirmation: passwordConfirmation,
        reset_password_token: token,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { errors, jwt } = await response.json();

    if (errors) {
      setState({
        errors,
        status: FAILED_STATUS,
      });

      return;
    }

    await dispatch({
      payload: { jwt },
      status: 'success',
      type: AUTH_LOG_IN,
    });

    setState({
      status: SUCCESS_STATUS,
    });

    history.push('/');
  };
};
