import { connect } from 'react-redux';

import { confirmEmail } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    submitConfirmation(setState, history, token) {
      return dispatch(confirmEmail(setState, history, token));
    },
  };
};

export default connect(null, mapDispatchToProps);
