import React, { useState} from 'react';
import { axiosInstance } from "../utils/axios"

const User = () => {
    const getUser = async () => {
        const res = await axiosInstance.get("/users")
        console.log(res.data);
    }
  return (
    <div className='w-full h-[80vh] flex flex-col items-center justify-center gap-4'>
      <h1>User</h1>
      <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={getUser}>Get User</button>
    </div>
  );
};

export default User;
