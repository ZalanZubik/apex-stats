import React from 'react';
import axios from 'axios';

const StatContext = React.createContext();
const StatConsumer = StatContext.Consumer;

axios.defaults.baseURL = process.env.REACT_APP_TRN_API_URL;

class StatProvider extends React.Component {
  state = {
    platform: 'origin',
    username: '',
    error: null,
    stats: null
  }

  getStats = async (platform, username) => {
    try {
      let res = await axios.get(`/profile/${platform}/${username}`, {
        headers: {
          'TRN-Api-Key': process.env.REACT_APP_TRN_API_KEY
        }
      });
      this.setState({ stats: res.data.data });
      console.log(this.state.stats);
    }
    catch (err) {
      console.log(err);
    };
  }


  setPlatform = platform => {
    this.setState({ platform });
  }

  setUsername = e => {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <StatContext.Provider value={{
        ...this.state,
        setPlatform: this.setPlatform,
        setUsername: this.setUsername,
        getStats: this.getStats
      }}>
        {this.props.children}
      </StatContext.Provider>
    )
  }
}

export { StatContext, StatProvider, StatConsumer };
