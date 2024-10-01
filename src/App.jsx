import React from 'react';
import { useForm } from 'react-hook-form';


const App = () => {
  const { register,
    handleSubmit
   } = useForm();
  return (
    <div className="h-screen w-full flex items-center justify-center bg-zinc-100 flex-col">
      <form action="" className="flex flex-col gap-2 items-start">
        <input
          type="text"
          placeholder="username"
          className="input-field font-thin px-3 py-1 border border-black-300 outline-none tracking-widest text-zinc-500 rounded-md"
        />
        <input
          type="text"
          placeholder="password"
          className="input-field font-thin px-3 py-1 border border-black-300  outline-none tracking-widest text-zinc-500 rounded-md"
        />
        <button className="px-3 py-1 rounded-md bg-teal-500 text-white">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default App;
