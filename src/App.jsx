import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username,
      password
    });
  }

  const handleChange = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <form className='flex flex-col gap-4' action="" onSubmit={handleSubmit}>
      <input className='border-2 border-gray-300 rounded-md p-2' type="text" name="username" placeholder="Username" value={username} onChange={handleChange} />
      <input className='border-2 border-gray-300 rounded-md p-2' type="password" name="password" placeholder="Password" value={password} onChange={handleChange}  />
      <button className='bg-blue-500 text-white p-2 rounded-md' type="submit">Submit</button>
    </form>
    </div>
  )
}

export default App