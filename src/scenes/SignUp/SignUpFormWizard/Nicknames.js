import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { InputField, Button } from 'components/FormElements';
import { validate, asyncValidate } from './validate';

const NicknamesStep = ({ handleSubmit, pristine, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field type="text" name="nickname" label="Ник" component={InputField} />
      <Button type="submit" primary disabled={pristine || submitting}>
        Продолжить
      </Button>
    </form>
  );
};

NicknamesStep.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
  asyncValidate,
  asyncBlurFields: ['nickname'],
})(NicknamesStep);
