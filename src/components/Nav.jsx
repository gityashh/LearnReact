import React from 'react'
import { NavLink} from 'react-router-dom'

const Nav = () => {
  return (
      <nav className='flex justify-center gap-8 p-4 bg-gray-800 text-white w-full'>
          <NavLink to='/'>Products</NavLink>
          <NavLink to='/create'>Create</NavLink>
      </nav>
  )
}

export default Nav