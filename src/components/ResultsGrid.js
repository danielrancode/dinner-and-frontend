import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Restaurant from './Restaurant'
import Evnt from './Event'


const ResultsGrid = (props) => (
  <Grid columns={2} divided>
      <Grid.Column>
      {props.restaurants.map(r => {
        return (
          <Grid.Row>
            <Restaurant
              categories={r.categories.map(c => c.title).join(', ')}
              phone={r.display_phone}
              address={r.location.display_address.join('\n')}
              name={r.name}
              price={r.price}
              rating={r.rating}
              review_count={r.review_count}
              url={r.url}
              coordinates={r.coordinates}
            />
          </Grid.Row>
        )
      })}
      </Grid.Column>
      <Grid.Column>

      {props.events.map(e => {
        return (
          <Grid.Row>
          <Evnt
            datetime={e.datetime_local}
            title={e.short_title}
            type={e.type}
            address={e.venue.address}
            extended_address={e.venue.extended_address}
            coordinates={e.venue.location}
            venue={e.venue.name}
            url={e.url}
          />
          </Grid.Row>

        )
      })}
      </Grid.Column>

  </Grid>
)

export default ResultsGrid
