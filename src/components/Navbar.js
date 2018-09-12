import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ResultsContainer from '../containers/ResultsContainer'
import ProgramsContainer from '../containers/ProgramsContainer'


export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state

    return (
      <Router>
        <Menu>
          <Link to='/'>
              Search
          </Link>

          <Link to='/programs'>
              My Programs
          </Link>

          <Route exact path="/" component={ResultsContainer}/>
          <Route exact path="/programs" component={ProgramsContainer}/>
        </Menu>
      </Router>
    )
  }
}

// <Menu.Item
//   name='search'
//   active={activeItem === 'search'}
//   onClick={this.handleItemClick}
// >

// </Menu.Item>

// <Menu.Item name='my-programs' active={activeItem === 'my-programs'} onClick={this.handleItemClick}>

// </Menu.Item>
