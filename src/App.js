import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      introText: "I came from the state!",
      buttonPressedCount: 0
    }
  }

  render() {
    let headerText = "App says: Header says Hello!"

    return (
      <div className="App">
        <Header text={headerText} alert={this.showAlert.bind(this)} />
        <p className="App-intro">
          {this.state.introText}
        </p>
      </div>
    );
  }

  showAlert() {
    this.setState({
      buttonPressedCount: this.state.buttonPressedCount + 1
    }, () => { alert('Button pressed ' + this.state.buttonPressedCount + ' times ') })
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.text}</h1>
        <button onClick={this.props.alert}>Click me!</button>
      </header>
      )
  }
}