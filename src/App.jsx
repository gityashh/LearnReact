import React from 'react'

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);  
    console.log(formData);
    // send data to server ->
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <form className='flex flex-col gap-4' action="" onSubmit={handleSubmit}>
      <input className='border-2 border-gray-300 rounded-md p-2' type="text" name="username" placeholder="Username" />
      <input className='border-2 border-gray-300 rounded-md p-2' type="password" name="password" placeholder="Password"  />
      <button className='bg-blue-500 text-white p-2 rounded-md' type="submit">Submit</button>
    </form>
    </div>
  )
}

export default App