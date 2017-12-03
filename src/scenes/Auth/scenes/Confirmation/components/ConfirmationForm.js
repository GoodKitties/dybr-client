import React from 'react';
import PropTypes from 'prop-types';

const ConfirmationForm = ({ submitConfirmation }) => {
  return (
    <div>
      Confirmation form
    </div>
  );
};

ConfirmationForm.propTypes = {
  submitConfirmation: PropTypes.func.isRequired,
};

export default ConfirmationForm;
