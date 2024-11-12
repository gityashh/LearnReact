import React, { useState, useMemo, useCallback } from 'react'
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

  const changedata = useCallback(
    () => {
      setfirst("changed nav data")
    },
    [],
  )
  

  return (
    <div>
      <Nav dets={first} />
      <h1>{count}</h1>
      <button onClick={() => setcount(count+1)}>click</button>
    </div>

  )
}

export default App