import React, { Component } from 'react'
import locationData from '../locationData.js'
import ResultsGrid from '../components/ResultsGrid.js'
import Search from '../components/Search'
import { Button } from 'semantic-ui-react'


class ResultsContainer extends Component {

  state = { locDat: locationData,
            zipcode: "",
            restaurants: [],
            events: [],
            selectedRestaurant: {},
            selectedEvent: {}
          }

  ////////// helper methods

  isNum(str) {
    return (/^\d+$/.test(str))
  }

  lattitudeOfZipCode(zipcode) {
    return this.state.locDat.find(e => e.zip === zipcode).lat
  }

  longitudeOfZipCode(zipcode) {
    return this.state.locDat.find(e => e.zip === zipcode).lon
  }


  ////////// state methods

  getData(zip, lat, lon) {
    fetch(`http://localhost:4000/api/v1/restaurants/search?location=${zip}`).then(r => r.json()).then(data => this.setState({restaurants: data.businesses}))
    fetch(`http://localhost:4000/api/v1/events/search?lat=${lat}&lon=${lon}`).then(r => r.json()).then(data => this.setState({events: data.events}))
  }

  setSearchTerm(term) {
    if (term.length === 5 && this.isNum(term) && this.state.zipcode !== term && !!this.state.locDat.find(e => e.zip === term)) {
      this.setState({zipcode: term})
      this.getData(term, this.lattitudeOfZipCode(term), this.longitudeOfZipCode(term))
    }
  }

  saveRestaurant(restObj) {
    this.setState({selectedRestaurant: restObj})
  }

  saveEvent(eventObj) {
    this.setState({selectedEvent: eventObj})
  }

  saveProgram() {
    console.log("restaurant", this.state.selectedRestaurant)
    console.log("event", this.state.selectedEvent)
  }

  render() {
    return (
      <div>
        <Search handleChange={this.setSearchTerm.bind(this)}/>
        <Button onClick={this.saveProgram.bind(this)}>Save program</Button>
        <ResultsGrid saveRestaurant={this.saveRestaurant.bind(this)} saveEvent={this.saveEvent.bind(this)} events={this.state.events} restaurants={this.state.restaurants}/>
      </div>
    )
  }

}

export default ResultsContainer


// componentDidMount() {
//   let zip = this.state.zipcode
//   let lat = this.lattitudeOfZipCode(zip)
//   let lon = this.longitudeOfZipCode(zip)
//   this.getData(zip, lat, lon)
// }
