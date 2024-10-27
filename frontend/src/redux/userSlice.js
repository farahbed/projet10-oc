// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
  profile: null,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem('token', action.payload); // Stocke le token dans localStorage
    },
    setUserProfile(state, action) {
      state.profile = action.payload;
    },
    signOutUser(state) {
      state.token = null;
      state.profile = null;
      localStorage.removeItem('token'); // Supprime le token de localStorage lors de la déconnexion
    },
  },
});


export const { setToken, setUserProfile, signOutUser } = userSlice.actions; // Vérifiez que setUserProfile est exporté
export default userSlice.reducer;