import React from 'react'
import { Card } from 'semantic-ui-react'

const Restaurant = (props) => {
    console.log("restaurant props: ", props)
    // console.log("restaurant props.categories: ", props.categories.map(c => c.title).join(', '))

  return (
    <Card>
    <Card.Content>
     <Card.Header>{props.name}</Card.Header>
     <Card.Meta>
       <span className='date'>Italian</span>
     </Card.Meta>
     <Card.Description>delicious</Card.Description>
    </Card.Content>
    <Card.Content extra>
     <a>
       {}
     </a>
    </Card.Content>
    </Card>
  )

}

export default Restaurant
