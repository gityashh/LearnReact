import React from 'react';
import { useForm } from 'react-hook-form';


const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-zinc-100 flex-col">
      <form action="" className="flex flex-col gap-2 items-start" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="username"
          className="input-field font-thin px-3 py-1 border border-black-300 outline-none tracking-widest text-zinc-500 rounded-md"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && <span className="text-red-500">{errors.username.message}</span>}
        
        <input
          type="text"
          placeholder="password"
          className="input-field font-thin px-3 py-1 border border-black-300 outline-none tracking-widest text-zinc-500 rounded-md"
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        
        <button className="px-3 py-1 rounded-md bg-teal-500 text-white">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default App;
