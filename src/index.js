import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StatProvider } from './context';

ReactDOM.render(
  <StatProvider>
    <App />
  </StatProvider>
  , document.getElementById('root'));
