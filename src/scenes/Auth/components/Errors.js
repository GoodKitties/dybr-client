import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ERROR_FIELD_NAMES } from '../constants';

const { keys } = Object;

function toMessagesArray(errors) {
  const result = [];

  keys(errors).forEach((key) => {
    const keyName = ERROR_FIELD_NAMES[key];

    const messages = errors[key];
    messages.forEach((message) => {
      result.push(`${keyName} ${message}`);
    });
  });

  return result;
}

function renderError(message) {
  return <span>{message}</span>;
}


function Errors({ errors }) {
  const renderedErrors = toMessagesArray(errors)
    .map(renderError);

  return (
    <Fragment>
      {renderedErrors}
    </Fragment>
  );
}

Errors.propTypes = {
  errors: PropTypes.object,
};

Errors.defaultProps = {
  errors: {},
};

export default Errors;
