import { connect } from 'react-redux';

import { confirmEmail } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    submitConfirmation(token) {
      return dispatch(confirmEmail(token));
    },
  };
};

export default connect(null, mapDispatchToProps);
