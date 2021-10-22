import React from 'react'
import { Card } from 'semantic-ui-react'

const CardExampleHeaderCard = (props) => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>{props.heading}</Card.Header>
        {/* <Card.Meta>Co-Worker</Card.Meta> */}
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
    </Card>
    
  </Card.Group>
)

export default CardExampleHeaderCard