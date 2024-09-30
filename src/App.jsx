// Two way Binding

// import React, { useState } from 'react'

// const App = () => {

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({
//       username,
//       password
//     });
//   }

//   return (
//     <div className='flex flex-col items-center justify-center h-screen'>
//       <form className='flex flex-col gap-4' action="" onSubmit={handleSubmit}>
//       <input className='border-2 border-gray-300 rounded-md p-2' type="text" name="username" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
//       <input className='border-2 border-gray-300 rounded-md p-2' type="password" name="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
//       <button className='bg-blue-500 text-white p-2 rounded-md' type="submit">Submit</button>
//     </form>
//     </div>
//   )
// }

// export default App;

// Validtaion

// import React, {useState} from 'react'

// const App = () => {
//   const [username,setUsername] = useState('');
//   const [error,setError] = useState(false);

//   return (
//     <div className="w-full h-screen justify-center items-center">
//       <form action="">
//         <input type="text"  placeholder="username" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} onInput={(e)=>{username.length<5 ? setError(true) : setError(false)}}/>
//         {error && <p>username must be of more than 5</p>}
//         <input type="submit" placeholder="submit"/>
//       </form>
//     </div>
//   )
// }

// export default App

// Form input types

// import React, { useState } from 'react'

// const App = () => {
//   const [gender,setgender] = useState('');

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(gender);
//   }
//   return (
//     <div>
//       <h1>Choose gender</h1>
//       <form action="" onSubmit={submitHandler}>
//         <input 
//         type="radio"
//         name= "gender"
//         checked= {gender === "others" ? true : false}
//         defaultValue = "others"
//         onChange={(e)=> setgender(e.target.value)}
//          />
//          <input 
//         type="radio"
//         name= "gender"
//         checked= {gender === "male" ? true : false}
//         defaultValue = "male"
//         onChange={(e)=> setgender(e.target.value)}
//          />
//          <input 
//         type="radio"
//         name= "gender"
//         checked= {gender === "female" ? true : false}
//         defaultValue = "female"
//         onChange={(e)=> setgender(e.target.value)}
//          />
//          <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

