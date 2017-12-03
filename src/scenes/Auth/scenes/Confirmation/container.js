import { connect } from 'react-redux';

import { confirmEmail } from 'services/auth/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    submitConfirmation(token) {
      return dispatch(confirmEmail(token));
    },
  };
};

export default function ConfirmationSceneContainer(ConfirmationScene) {
  return connect(null, mapDispatchToProps)(ConfirmationScene);
}
