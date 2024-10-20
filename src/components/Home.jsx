import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        console.log("home mounted");
    },[])
  return (
    <div>Home</div>
  )
}

export default Home