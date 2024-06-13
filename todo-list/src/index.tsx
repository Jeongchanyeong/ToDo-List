import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');

${reset}

body {

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color : #EDEDED;

  font-family: "Poor Story", system-ui;

  
}


`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
