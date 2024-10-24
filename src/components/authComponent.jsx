import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/Actions/action';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you'd validate credentials here
    dispatch(login({ username }));
    setUsername('');
    setPassword('');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isAuthenticated) {
    return (
      <div className="flex gap-8 items-center mb-4 w-80 justify-between">
        <h2 className="text-md font-thin">Welcome, {user.username}!</h2>
        <button
          className="bg-red-500 text-xs text-white px-4 py-1 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="w-80">
      <h2 className="text-md font-thin mb-2">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="border-2 border-gray-300 rounded-md p-1"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border-2 border-gray-300 rounded-md p-1"
        />
        <button className="bg-green-500 text-white rounded-md p-1" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;
