// Sign up wizard
// also shows to the users that log in the first time since registration on nicknames.dybr.ru

import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import { api } from 'api/profiles';
import query from 'api/query';

import { GuestHeader } from 'components/NavBar';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'components/theme';
import SignUpWizard from './SignUpFormWizard';

const Wrapper = styled.div`
  padding-top: 50px;
`;

const SignUp = () => {
  // Nav has it's own ThemeProvider wrapper
  return (
    <div>
      <GuestHeader />
      <ThemeProvider theme={theme}>
        <Wrapper className="container-d">
          <SignUpWizard />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};

/*
const mapDispatchToProps = (dispatch) => {
  return {
    // example
    someAction({ record }) {
      const { id, secretCodeConfirmation } = record;
      return dispatch(api.update({ id }, serialize({ id, secretCodeConfirmation })));
    },
  };
};
*/

const q = query('profiles', api.list);

export default q(SignUp);
