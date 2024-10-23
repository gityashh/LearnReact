import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  return <h2>Home Page</h2>;
};

export default Home;