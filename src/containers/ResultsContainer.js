import React, { Component } from 'react'
import locationData from '../locationData.js'
import RestaurantsList from '../components/RestaurantsList'
import EventsList from '../components/EventsList'


class ResultsContainer extends Component {

  state = { locDat: locationData,
            zipcode: "10025",
            restaurants: [],
            events: []
          }

  componentDidMount() {
    let zipcode = this.state.zipcode
    let lat = this.state.locDat.find(e => e.zip === zipcode).lat
    let lon = this.state.locDat.find(e => e.zip === zipcode).lon
    fetch(`http://localhost:4000/api/v1/restaurants?location=${zipcode}`).then(r => r.json()).then(data => this.setState({restaurants: data.businesses}))
    fetch(`http://localhost:4000/api/v1/events?lat=${lat}&lon=${lon}`).then(r => r.json()).then(data => this.setState({events: data.events}))
}


  render() {
    return (
      <div>
        <RestaurantsList restaurants={this.state.restaurants}/>
        <EventsList events={this.state.events}/>
      </div>
    )
  }

}

export default ResultsContainer
