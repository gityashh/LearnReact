import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    console.log('About component mounted');
  }, []);

  return <h2>About Page</h2>;
};

export default About;