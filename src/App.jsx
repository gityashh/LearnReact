// import React from 'react';
// import Child2 from './components/Child2';
// import Child3 from './components/Child3';
// import Child4 from './components/Child4';


// // Basic prop use

// const App = () => {
//   const greeting = "hello"
//   return (
//     <div>
//       <Child2 title={greeting} />
//       <Child3 profile={{name:"yash", age:"22"} } greeting='afternoon' />
//     </div>
//   );
// };

// // Prop validation

// // const App = () => {
// //   const name = "yash"
// //   const age = 22;
// //   const hobbies = ["cricket", "football"];
  
// //   return (
// //     <div>
// //       <Child4 hobbies={hobbies} name={name} age={age} isLoggedIn={ true } />
// //     </div>
// //   );
// // };


// export default App;

import React from 'react'
import Container from './components/Container'

const App = () => {
  return (
    <Container >
      <h1 name="greeting">Hello</h1>
      <h2 name="hello">World</h2>
    </Container>
  )
}

export default App