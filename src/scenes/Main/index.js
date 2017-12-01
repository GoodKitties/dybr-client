// Main page shown to logged in users

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isLoggedIn } from 'services/auth/helpers';
import * as actions from 'services/auth/actions';
import { NavBar, GuestNavBar } from 'components/NavBar';
import styled from 'styled-components';
import SignInForm from './components/SignInForm';
import DybrNews from './components/DybrNews';

const Wrapper = styled.div`
  padding-top: 50px;
`;

const Main = ({ loggedIn, logOut }) => {
  const Nav = loggedIn ? NavBar : GuestNavBar;
  const navBarActions = { onClickExit: logOut };

  let TempTextBlock;
  if (loggedIn) {
    TempTextBlock = (
      <div className="container">
        <div className="row">
          <DybrNews />
        </div>
      </div>
    );
  } else {
    TempTextBlock = (
      <div className="container">
        <div className="row">
          <SignInForm />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav {...navBarActions} />
      <Wrapper>{TempTextBlock}</Wrapper>
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
