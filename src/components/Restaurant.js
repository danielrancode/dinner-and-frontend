import React from 'react'
import { Card } from 'semantic-ui-react'

const Restaurant = (props) => {

  return (
    <Card>
    <Card.Content>
     <Card.Header>{props.name}</Card.Header>
     <Card.Meta>
       <span className='date'>{props.categories}</span>
     </Card.Meta>
     <Card.Description>
       {props.phone}<br/>
       {props.address}<br/>
       {props.price}<br/>
       Average rating: {props.rating}<br/>
       Review count: {props.review_count}
     </Card.Description>
    </Card.Content>
    <Card.Content extra>
     <a>
     </a>
    </Card.Content>
    </Card>
  )

}

export default Restaurant
