import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let introText = "I came from a variable!"
    let headerText = "App says: Header says Hello!"

    return (
      <div className="App">
        <Header text={headerText} />
        <p className="App-intro">
          {introText}
        </p>
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.text}</h1>
      </header>
      )
  }
}