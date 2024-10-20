import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import User from './components/User'
import Layout from './components/Layout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='users' element={<User />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  )
}

export default App
