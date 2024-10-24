import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './components/todoComponent';
import Auth from './components/authComponent';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App w-full h-screen flex flex-col p-10 tracking-tight" >
      <h1 className='text-3xl font-thin font-sans mb-10'>Todo TODAY!</h1>
      <Auth />
      {isAuthenticated && (
        <>
          <TodoList />
        </>
      )}
    </div>
  );
}

export default App;
