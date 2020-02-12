import React from 'react';
import axios from 'axios';

const StatContext = React.createContext();
const StatConsumer = StatContext.Consumer;

axios.defaults.baseURL = process.env.REACT_APP_TRN_API_URL;

class StatProvider extends React.Component {
  state = {
    stats: {},
    platform: 'origin',
    username: ''
  }

  getStats = e => {
    e.preventDefault();
    axios.get(`/profile/${this.state.platform}/${this.state.username}`, {
      headers: {
        'TRN-Api-Key': process.env.REACT_APP_TRN_API_KEY
      }
    }).then(res => {
      this.setState({ stats: res.data });
    })
      .catch(err => console.log(err));
  }

  setPlatform = e => {
    this.setState({ platform: e.target.id });
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
