import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LeaderboardsPage from './components/LeaderboardsPage';
import PlayerPage from './components/PlayerPage';
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/leaderboards/:searchPlatform/:searchType/:searchLegend' component={LeaderboardsPage} />
        <Route exact path='/profile/:platform/:username' component={PlayerPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
