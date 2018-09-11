import React from 'react'

const Search = (props) => {

  return (
    <div >
      <input
        type="text"
        placeholder={"Enter Zipcode"}
        onChange={e => props.handleChange(e.target.value)}
      />
    </div>
  )
}

export default Search
