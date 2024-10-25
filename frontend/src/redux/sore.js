// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Assure-toi que le chemin est correct

const store = configureStore({
  reducer: {
    user: userReducer, // Ajoute le slice user
  },
});

export default store;