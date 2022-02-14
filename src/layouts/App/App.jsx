import React from 'react';
import { BrowserRouter as Switch } from 'react-router-dom';
import Router from '@layouts/Router';

function App() {
  return (
    <Switch>
      <header>여기가 헤더?</header>
      <Router />
      <footer>여기가 푸터?</footer>
    </Switch>
  );
}

export default App;
