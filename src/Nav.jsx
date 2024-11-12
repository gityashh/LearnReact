import React, { memo } from 'react'

const Nav = (props) => {
    console.log("nav rendered");
  return (
      <div>{ props.dets }</div>
  )
}

export default (Nav)