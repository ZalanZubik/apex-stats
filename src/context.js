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
    stats: null
  }

  getStats = async (platform, username) => {
    try {
      let res = await axios.get(`/profile/${platform}/${username}`, {
        headers: {
          'TRN-Api-Key': process.env.REACT_APP_TRN_API_KEY
        }
      });
      this.setState({ stats: res.data.data, loading: false });
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
        resetStats: this.resetStats
      }}>
        {this.props.children}
      </StatContext.Provider>
    )
  }
}

export { StatContext, StatProvider, StatConsumer };
