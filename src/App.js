import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dinner & ..?</h1>
        </header>
        <Navbar/>
      </div>
    );
  }
}

export default App;
