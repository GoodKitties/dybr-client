import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'components/theme';

// This is a container for the top nav bar
// TODO: apply styled components instead of materialize css classes

const TopBar = styled.div`
  background-color: ${props => props.theme.darkGray};
  color: ${props => props.theme.lightText};
  box-shadow: 0 3px 8px 4px ${props => props.theme.shadowGray};
`;

const Container = styled.div`
  height: ${props => props.height};
  max-width: 1260px;
  padding: 50px 30px;
  margin: 0 auto;
  font-size: 20px;
`;

const NavBar = ({ children, big }) => {
  const height = big ? '200px' : '64px';
  return (
    <ThemeProvider theme={theme}>
      <TopBar>
        <Container height={height}>{children}</Container>
      </TopBar>
    </ThemeProvider>
  );
};

NavBar.propTypes = {
  children: PropTypes.array,
  big: PropTypes.bool,
};

NavBar.defaultProps = {
  children: null,
  big: false,
};

export default NavBar;
