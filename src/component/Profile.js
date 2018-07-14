import React, { Component } from 'react';
import UserInfo from './UserInfo';
import {getUserInfo} from './Auth';



class Profilepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: [],
      email: [],
      },
      image: [],
      quote: {
        content: 'Beautiful things don\'t ask for attention',
        source: 'The Secret Life of Walter Mitty'
      }
      
    };
  }
  render() {
    return (
      <div className="ProfileContainer">
      <img src={this.state.image} />
        <h2> Hello, {this.state.user.username} </h2>
        <p>Email: {this.state.user.email} </p>
      </div>
    );
  }
}
export default Profilepage;