import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    console.log('Contact component mounted');
  }, []);

  return <h2>Contact Page</h2>;
};

export default Contact;