// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/counterSlice/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;