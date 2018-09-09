import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    // fetch('http://localhost:4000/api/v1/restaurants').then(r => r.json()).then
  render() {
    let yosi
    fetch('http://localhost:4000/api/v1/restaurants').then(r => r.json()).then(data => yosi = data).then(() => console.log(yosi))

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {yosi}
        </p>
      </div>
    );
  }
}

export default App;
