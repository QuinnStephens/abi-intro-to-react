import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      photo: {}
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos/1")
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          photo: json
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <p>{ this.state.photo.title }</p>
          <p>{ this.state.photo.url }</p>
        </div>
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
        <h1 className="App-title">API Call Time!</h1>
      </header>
      )
  }
}