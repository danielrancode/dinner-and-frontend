import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import locationData from './locationData.js'


class App extends Component {
  render() {

    let restaurants
    let events
    let zipcode = prompt("Enter zipcode")
    let lat = locationData.find(e => e.zip === zipcode).lat
    let lon = locationData.find(e => e.zip === zipcode).lon


    console.log("lat = ", lat)
    console.log("lon = ", lon)

    fetch(`http://localhost:4000/api/v1/restaurants?location=${zipcode}`).then(r => r.json()).then(data => restaurants = data).then(() => console.log(zipcode, restaurants))
    fetch(`http://localhost:4000/api/v1/events?lat=${lat}&lon=${lon}`).then(r => r.json()).then(data => events = data).then(() => console.log(lat, events))

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
