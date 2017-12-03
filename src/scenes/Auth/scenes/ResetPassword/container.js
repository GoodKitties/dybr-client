import { connect } from 'react-redux';

import { resetPassword } from './actions';

const mapDispatchToProps = (dispatch) => {
  return {
    submitResetPassword(setState, history, data) {
      return dispatch(resetPassword(setState, history, data));
    },
  };
};

export default connect(null, mapDispatchToProps);
