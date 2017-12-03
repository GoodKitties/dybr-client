import React from 'react';
import PropTypes from 'prop-types';

const ResetForm = ({ token }) => {
  return <div>{token}</div>;
};

ResetForm.propTypes = {
  token: PropTypes.string,
};

ResetForm.defaultProps = {
  token: null,
};

export default ResetForm;
