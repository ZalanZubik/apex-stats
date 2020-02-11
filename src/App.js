import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TopStatsPage from './components/TopStatsPage';

function App() {
  return (
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/top-stats' component={TopStatsPage} />
    </Router>
  );
}

export default App;
