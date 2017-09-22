import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BugTracker from './bugTracker/BugTracker'

class App extends Component {
  render() {
    return (
      <div>
        <BugTracker />
      </div>
    );
  }
}

export default App;
