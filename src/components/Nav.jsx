import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
      <div className='flex justify-center items-center gap-4'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/list">Items</NavLink>
       </div>
  )
}

export default Nav