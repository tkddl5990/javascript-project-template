import React from 'react';
import ReactDOM from 'react-dom';
import App from '@layouts/App';
import GlobalStyles from '@styles/global.styles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
