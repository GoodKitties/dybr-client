import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input``;

const InputField = ({
  type, input, label, meta: { asyncValidating, error, touched },
}) => {
  return (
    <div className="input-field">
      <div className={asyncValidating ? 'async-validating' : ''}>
        <Input {...input} type={type} className={touched && error ? 'invalid' : ''} />
      </div>
      <label data-error={error} htmlFor={input.name} className="active">
        {label}
      </label>
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
};

export default InputField;
