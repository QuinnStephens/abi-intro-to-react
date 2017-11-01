import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Counter count={this.state.count} />
        <button onClick={this.incrementCount.bind(this)}>Add to count</button>
      </div>
    );
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default App;

class Counter extends Component {
  render() {
    return (
      <h1 className="Counter-text">{this.props.count}</h1>
      )
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">My counter app</h1>
      </header>
      )
  }
}