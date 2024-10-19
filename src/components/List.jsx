import React from 'react'
import { NavLink } from 'react-router-dom'

const List = () => {
  return (
      <div>
          <NavLink to="/list/item1">item1</NavLink>
          <NavLink to="/list/item2">item2</NavLink>
          <NavLink to="/list/item3">item3</NavLink>
       </div>
  )
}

export default List