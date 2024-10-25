import React from 'react'
import Products from './components/Products'
import Create from './components/Create'
import { Route, Router, Routes } from 'react-router-dom'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <Nav/>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/create' element={<Create />} />
      </Routes>
    </>
  )
}

export default App