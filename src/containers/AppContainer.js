import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';

class AppContainer extends Component {
  render() {
    return (
      <div className="AppContainer">
        <div className="App-header">
          <h2>Welcome to Totally Not Wayfarer</h2>
        </div>
        <Navbar />
        <Profile />
      </div>
    );
  }
}

export default AppContainer;
