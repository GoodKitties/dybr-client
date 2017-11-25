// Root Page shown to guests
// has sign in and sign up mechanism

import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Привет! Добро пожаловать в Дыбр.</h1>
        <p>
          Это тестовая версия новых дневников. <br /> Пока что доступен только самый базовый
          функционал.
        </p>
      </div>
    );
  }
}

export default Landing;
