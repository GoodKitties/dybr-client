import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from './components/NavBarContainer';

// the navbar that shows to a guest user on all pages except the main one

const NavBar = (props) => {
  return (
    <Container>
      <li>
        <Link to="/main" href="/main">
          <i className="material-icons">search</i>
        </Link>
      </li>
      <li>Привет!</li>
      <li>
        <button onClick={props.onClickExit}>
          <i className="material-icons">exit_to_app</i>
        </button>
      </li>
    </Container>
  );
};

NavBar.propTypes = {
  onClickExit: PropTypes.func.isRequired,
};

export default NavBar;
