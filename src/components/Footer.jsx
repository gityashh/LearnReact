import React, { useContext } from 'react'
import { dataContext } from '../contexts/NewContext'

const Footer = () => {
    const data = useContext(dataContext)[0];
  return (
      <div>{ data }</div>
  )
}

export default Footer