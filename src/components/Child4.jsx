import React from 'react';
import PropTypes from 'prop-types';

function Child4({ name, age, isLoggedIn, hobbies }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>{isLoggedIn ? "Logged In" : "Logged Out"}</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

Child4.propTypes = {
  name: PropTypes.string.isRequired, 
  age: PropTypes.number.isRequired,  // 'age' should be a number and required
  isLoggedIn: PropTypes.bool,        // 'isLoggedIn' should be a boolean (optional)
  hobbies: PropTypes.arrayOf(PropTypes.string) // 'hobbies' should be an array of strings
};

Child4.defaultProps = {
    isLoggedIn: false, // Default value for 'isLoggedIn' if not provided
    hobbies: ["No hobbies"]
  };
  
  export default Child4;