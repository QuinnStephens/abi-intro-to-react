import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      inputText: '',
      userSubmitted: false
    }
  }

  render() {
    const header = this.state.userSubmitted ? <Header /> : null

    return (
      <div className="App">
        { header }
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

  onSubmit(event) {
    event.preventDefault()
    this.setState({
      userSubmitted: true
    })
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Thanks for submitting!</h1>
      </header>
      )
  }
}