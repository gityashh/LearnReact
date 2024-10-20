import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
      <nav className='w-full flex items-center justify-center gap-4 py-4'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/users"}>User</NavLink>
          <NavLink to={"/cart"}>Cart</NavLink>
      </nav>
  )
}

export default Nav