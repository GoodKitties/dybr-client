const DEFAULT_STATE = { loading: false, loggedIn: false, token: '' };

export default (state = DEFAULT_STATE, action) => {
  const { payload, type, status } = action;
  switch (type) {
    case 'AUTH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        error: payload.message,
        loading: false,
      };
    case 'AUTH_LOG_OUT':
      return DEFAULT_STATE;
    default:
      return state;
  }
};
