import React, { Component } from 'react'

export default class ProgramsContainer extends Component {

  state = {programs: []}

  componentDidMount() {
    this.getSavedPrograms()
  }

  getSavedPrograms() {
    fetch('http://localhost:4000/api/v1/programs').then(r => r.json()).then(data => this.setState({programs: data}))
  }

  render() {
    return (
      <div>
      {this.state.programs.map(p => <div><h3>restaurant_id: {p.restaurant_id} | event_id: {p.event_id}</h3></div>)}
      </div>
    )
  }
}
