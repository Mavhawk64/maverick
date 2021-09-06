import React from 'react';
import axios from 'axios';

export default class FollowersList extends React.Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/mavhawk64`).then(res => {
      this.setState({followers: res.data});
    });
  }

  render() {
    return (<>{this.state.followers.followers}</>);
  }
}
 
