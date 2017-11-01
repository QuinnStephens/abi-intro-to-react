import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      inputText: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <form>
          <input type="text" onChange={this.onInputChanged.bind(this)} />
          <button onClick={this.onSubmit.bind(this)}>Submit</button>
        </form>
        <h2>{this.state.inputText}</h2>
      </div>
    );
  }

  onInputChanged(event) {
    const inputText = event.target.value
    this.setState({
      inputText
    })
  }

  onSubmit() {
    alert(this.state.inputText)
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">My basic form</h1>
      </header>
      )
  }
}