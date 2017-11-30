// Main page shown to logged in users

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isLoggedIn } from 'services/auth/helpers';
import { NavBar, GuestNavBar } from 'components/NavBar';
import SignInForm from './components/SignInForm';

class Main extends React.Component {
  propTypes = {
    loggedIn: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    console.log('c');
  }

  render() {
    const { loggedIn } = this.props;
    const Nav = loggedIn ? NavBar : GuestNavBar;

    let TempTextBlock;
    if (loggedIn) {
      TempTextBlock = (
        <div className="container">
          <h1>Главная</h1>
          <p>Главная страница, открывающаяся залогиненному юзеру.</p>
        </div>
      );
    } else {
      TempTextBlock = (
        <div className="container">
          <h1>Привет! Добро пожаловать в Дыбр.</h1>
          <p>
            Это тестовая версия новых дневников.
            <br />
            Пока что доступен только самый базовый функционал.
          </p>

          <SignInForm />
        </div>
      );
    }

    return (
      <div>
        <Nav />
        {TempTextBlock}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state),
  };
};

export default connect(mapStateToProps)(Main);
