import React from 'react'
import PropType from "prop-types"

const Child3 = ({profile,greeting="morning"}) => {
  return (
      <div>
          <h1>hello {greeting}</h1>
          <h2>Name: { profile.name}</h2>
          <h4>Age: { profile.age }</h4>
    </div>
  )
    
}

Child3.PropType = {
    profile: PropTypes.object.isRequired,
}

export default Child3