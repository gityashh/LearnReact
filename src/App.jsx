import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import User from './components/User'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/users' element={<User/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App