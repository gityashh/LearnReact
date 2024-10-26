import React, { useState, useMemo } from 'react'
import Nav from './Nav';


const App = () => {
  const [count, setcount] = useState(0)
  const [first, setfirst] = useState("Navdata")

  // const bigfunc = () => {
  //   for (let index = 0; index < 1000000000000000; index++) {
  //   }
  //   return count;
  // }

  // const memoizedBigFunc = useMemo(bigfunc, [count]);

  return (
    <div>
      <Nav dets={first} />
      <button onClick={()=>setfirst(`new data ${Math.random()}`)}>click</button>
    </div>

  )
}

export default App