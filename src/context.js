import React from 'react';
import axios from 'axios';

const StatContext = React.createContext();
const StatConsumer = StatContext.Consumer;

axios.defaults.baseURL = process.env.REACT_APP_TRN_API_URL;

class StatProvider extends React.Component {
  state = {
    stats: {}
  }

  componentDidMount() {
    axios.get('/profile/origin/hexoo', {
      headers: {
        'TRN-Api-Key': process.env.REACT_APP_TRN_API_KEY
      }
    }).then(res => {
      this.setState({ stats: res.data });
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <StatContext.Provider value={{ ...this.state }}>
        {this.props.children}
        {console.log(this.state.stats)}
      </StatContext.Provider>
    )
  }
}

export { StatContext, StatProvider, StatConsumer };
