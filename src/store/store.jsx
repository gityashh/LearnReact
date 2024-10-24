// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Slices/counterSlice';
import authSlice from './Slices/authSlice';
import todoSlice from './Slices/todoSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    todos: todoSlice
  },
});

export default store;