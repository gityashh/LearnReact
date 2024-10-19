import React from 'react'
import Container from './components/Container'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import List from "./components/List"

const App = () => {
  return (
    <Container>
      <Nav />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/list/:itemId' element={<Item />} />
        </Routes>
      </div>
    </Container>
  )
}

export default App