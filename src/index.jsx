import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './style/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
