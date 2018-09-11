import React from 'react'
import { Card } from 'semantic-ui-react'

const Event = (props) => {
  // console.log("event props: ", props)

  return (
    <Card>
    <Card.Content>
     <Card.Header>{props.name}</Card.Header>
     <Card.Meta>
       <span className='date'>Rock</span>
     </Card.Meta>
     <Card.Description>Barclay's</Card.Description>
    </Card.Content>
    <Card.Content extra>
     <a>
       173 Hebron st.
     </a>
    </Card.Content>
    </Card>
  )

}

export default Event
