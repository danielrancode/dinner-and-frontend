// import React from 'react'
// import { Grid } from 'semantic-ui-react'
// import Restaurant from './Restaurant'
// import Evnt from './Event'
//
//
// const ProgramsGrid = (props) => (
//   <Grid columns={2} divided>
//       {props.programs.map(p => {
//         let r = p.restaurant
//         let e = p.evnt
//         return (
//           <Grid.Row key={r.id}>
//             <Grid.Column>
//               <Restaurant
//                 id={r.id}
//                 categories={r.categories.map(c => c.title).join(', ')}
//                 phone={r.display_phone}
//                 address={r.location.display_address.join('\n')}
//                 name={r.name}
//                 price={r.price}
//                 rating={r.rating}
//                 review_count={r.review_count}
//                 url={r.url}
//                 coordinates={r.coordinates}
//               />
//             </Grid.Column>
//             <Grid.Column>
//               <Evnt
//                 id={e.id}
//                 datetime={e.datetime_local}
//                 title={e.short_title}
//                 type={e.type}
//                 address={e.venue.address}
//                 extended_address={e.venue.extended_address}
//                 coordinates={e.venue.location}
//                 venue={e.venue.name}
//                 url={e.url}
//               />
//             </Grid.Column>
//           </Grid.Row>
//         )
//       })}
//       </Grid>
// )
//
// export default ResultsGrid
