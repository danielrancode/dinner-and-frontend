import React, { Component } from 'react'
import locationData from '../locationData.js'
import ResultsGrid from '../components/ResultsGrid.js'
import Search from '../components/Search'


class ResultsContainer extends Component {

  state = { locDat: locationData,
            zipcode: "10025",
            restaurants: [],
            events: []
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
    fetch(`http://localhost:4000/api/v1/restaurants?location=${zip}`).then(r => r.json()).then(data => this.setState({restaurants: data.businesses}))
    fetch(`http://localhost:4000/api/v1/events?lat=${lat}&lon=${lon}`).then(r => r.json()).then(data => this.setState({events: data.events}))
  }

  componentDidMount() {
    let zip = this.state.zipcode
    let lat = this.lattitudeOfZipCode(zip)
    let lon = this.longitudeOfZipCode(zip)
    this.getData(zip, lat, lon)
  }

  setSearchTerm(term) {
    if (term.length === 5 && this.isNum(term) && this.state.zipcode !== term) {
      this.setState({zipcode: term})
      this.getData(term, this.lattitudeOfZipCode(term), this.longitudeOfZipCode(term))
    }
  }


  render() {
    return (
      <div>
        <Search handleChange={this.setSearchTerm.bind(this)}/>
        <ResultsGrid events={this.state.events} restaurants={this.state.restaurants}/>
      </div>
    )
  }

}

export default ResultsContainer
