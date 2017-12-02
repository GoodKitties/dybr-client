// Main page shown to logged in users

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isLoggedIn } from 'services/auth/helpers';
import * as actions from 'services/auth/actions';
import { NavBar, GuestHeader } from 'components/NavBar';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'components/theme';
import SignInForm from './components/SignInForm';
import DybrNews from './components/DybrNews';

const Wrapper = styled.div`
  padding-top: 50px;
`;

const Main = ({ loggedIn, logOut }) => {
  const Nav = loggedIn ? NavBar : GuestHeader;
  const navBarActions = { onClickExit: logOut };

  let TempTextBlock;
  if (loggedIn) {
    TempTextBlock = (
      <div className="container-d">
        <div className="row">
          <DybrNews />
        </div>
      </div>
    );
  } else {
    TempTextBlock = (
      <div className="container-d">
        <div className="row">
          <SignInForm />
        </div>
      </div>
    );
  }

  // Nav has it's own ThemeProvider wrapper
  return (
    <div>
      <Nav {...navBarActions} />
      <ThemeProvider theme={theme}>
        <Wrapper>{TempTextBlock}</Wrapper>
      </ThemeProvider>
    </div>
  );
};

Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state),
  };
};

export default connect(mapStateToProps, actions)(Main);
