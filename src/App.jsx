import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './components/todoComponent';
import Auth from './components/authComponent';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <h1>Redux Toolkit App</h1>
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
