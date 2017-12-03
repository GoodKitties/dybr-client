import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { InputField, Button } from 'components/FormElements';
import { validate } from './validate';

const BlogStep = ({ handleSubmit, pristine, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field type="text" name="blog-title" label="Название дневника" component={InputField} />
      <Button type="submit" primary disabled={pristine || submitting}>
        Создать Дневник
      </Button>
    </form>
  );
};

BlogStep.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(BlogStep);
