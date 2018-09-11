import React from 'react'
import Restaurant from './Restaurant'

const RestaurantsList = (props) => {
  // console.log("Resturant props", props)
  return (
    props.restaurants.map(r => {
      return (
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
      )
    })
  )
}

export default RestaurantsList
