import React from 'react'
import { Card } from 'semantic-ui-react'

const Evnt = (props) => {
  console.log(props)

  return (
    <Card>
    <Card.Content>
     <Card.Header>{props.title}</Card.Header>
     <Card.Meta>
       <span className='date'>{props.type}</span>
     </Card.Meta>
     <Card.Description>
     {props.datetime}<br/>
     {props.venue}<br/>
     {props.address}<br/>
     {props.extended_address}<br/>
     </Card.Description>
    </Card.Content>
    <Card.Content extra>
     <a>
     </a>
    </Card.Content>
    </Card>
  )

}

export default Evnt
