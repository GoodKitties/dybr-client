import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'components/theme';

// This is a container for the top nav bar
// TODO: apply styled components instead of materialize css classes

const NavBar = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <nav>
        <div className="nav-wrapper grey darken-4">
          <Link to="/" href="/" className="brand-logo">
            <img alt="dybr" src="/img/logo-small.png" />
          </Link>
          <ul className="right hide-on-med-and-down">{children}</ul>
        </div>
      </nav>
    </ThemeProvider>
  );
};

NavBar.propTypes = {
  children: PropTypes.array,
};

NavBar.defaultProps = {
  children: null,
};

export default NavBar;
