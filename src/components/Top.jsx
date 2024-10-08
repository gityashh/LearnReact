import React, { useContext } from 'react'
import { dataContext } from '../contexts/NewContext'

const Top = () => {
    const [data, setdata,sect,setsect] = useContext(dataContext);
  return (
      <div>{data} | { sect }</div>
  )
}

export default Top