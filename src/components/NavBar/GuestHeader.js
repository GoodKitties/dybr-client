// on the main page for guest users there is a header with a bigger logo and mission statement
import React from 'react';
import styled from 'styled-components';
import Container from './components/NavBarContainer';

// import PropTypes from 'prop-types';

const Logo = styled.div`
  float: left;
  img {
    width: 500px;
  }
`;

const Statement = styled.div`
  float: right;
`;

const GuestHeader = () => {
  return (
    <Container big>
      <Logo>
        <img alt="Дыбр" src="/img/dybr_logo.png" />
      </Logo>
      <Statement>
        Дыбр - это твоё личное пространство, где можно писать<br />
        про жизнь, творчество и что угодно, общаться о важном, <br />
        узнавать интересных людей и находить близких друзей.
      </Statement>
    </Container>
  );
};

export default GuestHeader;
