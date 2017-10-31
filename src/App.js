import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let introText = "I came from a variable!"

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Intro to React at Signal!</h1>
        </header>
        <p className="App-intro">
          {introText}
        </p>
      </div>
    );
  }
}

export default App;
