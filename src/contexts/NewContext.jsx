import React, { createContext,useState } from 'react'

export const dataContext = createContext(null)

const NewContext = (props) => {
    const [data, setdata] = useState("data important")
    const [sect, setsect] = useState("next data")
  return (
      <dataContext.Provider value={[data,setdata,sect,setsect]}>
          {props.children}
      </dataContext.Provider>
  )
}

export default NewContext