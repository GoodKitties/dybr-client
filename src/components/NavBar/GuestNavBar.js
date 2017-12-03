import React from 'react';
import { Link } from 'react-router-dom';
import Container from './components/NavBarContainer';

// import PropTypes from 'prop-types';

// the navbar that shows to a guest user on all pages except the main one

const GuestNavBar = () => {
  return (
    <Container>
      <li>Привет, незнакомец</li>
    </Container>
  );
};

export default GuestNavBar;
