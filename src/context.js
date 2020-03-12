import React from 'react';
import axios from 'axios';

const StatContext = React.createContext();
const StatConsumer = StatContext.Consumer;

class StatProvider extends React.Component {
  state = {
    platform: 'origin',
    username: '',
    loading: true,
    error: false,
    stats: null,
    leaderboardStats: null,
    searchType: 'RankScore',
    searchPlatform: 'all',
    searchLegend: 'all'
  }

  getStats = async (platform, username) => {
    try {
      let res = await axios.get(`/api/v2/apex/standard/profile/${platform}/${username}`, {
        headers: {
          'TRN-Api-Key': process.env.REACT_APP_TRN_API_KEY
        }
      });
      this.setState({ loading: false, stats: res.data.data });
    }
    catch (err) {
      console.log(err);
      this.setState({ loading: false, error: true });
    };
  }

  getLeaderboardStats = async (searchType, searchPlatform, searchLegend) => {
    try {
      let res = await axios.get(`/api/v1/apex/standard/leaderboards/${searchType}?platform=${searchPlatform}&legend=${searchLegend}`, {
        headers: {
          'TRN-Api-Key': process.env.REACT_APP_TRN_API_KEY
        }
      });
      this.setState({ loading: false, leaderboardStats: res.data.data });
    }
    catch (err) {
      console.log(err);
      this.setState({ loading: false, error: true });
    };
  }

  setPlatform = platform => {
    this.setState({ platform });
  }

  setUsername = e => {
    this.setState({ username: e.target.value });
  }

  resetStats = () => {
    this.setState({ stats: null, loading: true, error: false });
  }

  render() {
    return (
      <StatContext.Provider value={{
        ...this.state,
        setPlatform: this.setPlatform,
        setUsername: this.setUsername,
        getStats: this.getStats,
        resetStats: this.resetStats,
        getLeaderboardStats: this.getLeaderboardStats
      }}>
        {this.props.children}
      </StatContext.Provider>
    )
  }
}

export { StatContext, StatProvider, StatConsumer };
