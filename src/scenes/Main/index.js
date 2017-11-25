// Main page shown to logged in users

import React from 'react';

export default class MainScene extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Главная</h1>
        <p>Главная страница, открывающаяся залогиненному юзеру.</p>
      </div>
    );
  }
}
