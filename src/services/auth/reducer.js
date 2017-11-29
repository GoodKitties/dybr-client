import { verify } from 'jsonwebtoken';

import { AUTH_LOG_IN, AUTH_LOG_OUT } from '../action-types';

const DEFAULT_STATE = { loggedIn: false };

export default (state, action) => {
  state = state || { ...DEFAULT_STATE };

  const { payload, type, status } = action;

  switch (type) {
    case AUTH_LOG_OUT:
      state = { ...DEFAULT_STATE };
      break;
    case AUTH_LOG_IN:
      console.log(action);
      if (status === 'success') {
        const { jwt } = payload;
        const { sub: userId } = verify(jwt, process.env.REACT_APP_TOKEN_SECRET);

        state = { jwt, userId, loggedIn: true };
      }

      if (status === 'failed') {
        const { message } = payload;
        state = { error: message, loggedIn: false };
      }
      break;
    default:
  }

  return state;
};
