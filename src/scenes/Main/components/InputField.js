import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/FormElements';

const InputField = ({
  type, input, label, meta: { error, touched },
}) => {
  return (
    <div className="input-field">
      <Input
        id={input.name}
        type={type}
        onBlur={input.onBlur}
        onChange={input.onChange}
        className={touched && error ? 'invalid' : ''}
      />
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
