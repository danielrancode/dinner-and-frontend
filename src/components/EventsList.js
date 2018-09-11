import React from 'react'
import Event from './Event'


const EventsList = (props) => {
  // console.log("eventsList props:", props)
  return (
    props.events.map(e => {
      return (
        <Event props={e}/>
      )
    })
  )
}

export default EventsList
