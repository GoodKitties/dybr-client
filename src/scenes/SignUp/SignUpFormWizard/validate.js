export const validate = (values) => {
  const errors = {};

  if (!values.invite) {
    errors.invite = 'Обязательно';
  }

  /*
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.sex) {
    errors.sex = 'Required';
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required';
  }
  return errors;
  */
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const asyncValidate = (values) => {
  console.log('create dispatch');
  return sleep(1000).then(() => {
    // simulate server latency
    console.log('values', values);
    if (!['invite123'].includes(values.invite)) {
      const error = { invite: 'Недействительный код приглашения' };
      throw error;
    }
  });
};

export default {
  validate,
  asyncValidate,
};
