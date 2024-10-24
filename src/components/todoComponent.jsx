import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../store/Actions/action';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
      setNewTodo('');
    }
  };

  return (
    <div>
      <h2 className='text-md font-mono mb-2'>Tasks-</h2>
      <form onSubmit={handleAddTodo} className='w-80 flex justify-between'>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="Click to add a new todo"
                  className='text-sm mr-4 p-1 outline-none'
        />
        <button  className='text-xs px-2 py-1 bg-green-500 text-white rounded' type="submit">Add Todo</button>
      </form>
      <ul className='mt-4 flex flex-col gap-2 w-80'>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="form-checkbox"
            />
            <span
              className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-xs text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
