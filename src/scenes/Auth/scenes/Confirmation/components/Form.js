import React from 'react';
import PropTypes from 'prop-types';

const ConfirmationForm = ({ submit }) => {
  return (
    <div>
      Confirmation form
    </div>
  );
};

ConfirmationForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ConfirmationForm;
