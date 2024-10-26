import React, { useState, useMemo } from 'react'


const App = () => {
  const [count, setcount] = useState(0)

  // const bigfunc = () => {
  //   for (let index = 0; index < 1000000000000000; index++) {
  //   }
  //   return count;
  // }

  

  const memoizedBigFunc = useMemo(bigfunc, [count]);

  return (
    <div>
      {memoizedBigFunc}
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>click</button>
    </div>

  )
}

export default App