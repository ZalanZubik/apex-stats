import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LeaderboardsPage from './components/LeaderboardsPage';
import PlayerPage from './components/PlayerPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/leaderboards' component={LeaderboardsPage} />
      <Route exact path='/profile/:platform/:username' component={PlayerPage} />
    </Router>
  );
}

export default App;
