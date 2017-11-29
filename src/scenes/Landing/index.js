// Root Page shown to guests
// has sign in and sign up mechanism

import React from 'react';
import SignInForm from './components/SignInForm';

export default () => {
  return (
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
};
