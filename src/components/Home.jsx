import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        console.log("Home mounted");
        return () => {
            console.log("Home unmounted");
        };
    }, [])

    return (
        <div>Home</div>
    )
}

export default Home
