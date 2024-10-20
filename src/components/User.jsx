import React, { useState } from 'react';
import { axiosInstance } from '../utils/axios';

const User = () => {
  const [User, setUser] = useState([]);
  const getUser = async () => {
    try {
      const res = await axiosInstance.get('/users');
        setUser(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h1>User</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={getUser}
      >
        Get User
      </button>
      <div className='w-full flex flex-wrap gap-4'>
        {User.map((newuser) => {
          return <div className="w-[300px] h-[200px] rounded flex flex-col items-center justify-center" key={newuser.id}>
            <div className='w-full h-[80%] flex items-center justify-center overflow-hidden'><img src={newuser.image} alt={newuser.title} className='w-full h-full object-cover' /></div>
              <h1>{newuser.name.firstname} {newuser.name.lastname} </h1>
          </div>;
        })}
      </div>
    </div>
  );
};

export default User;
