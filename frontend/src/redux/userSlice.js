// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    profile: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUserProfile(state, action) { // Assurez-vous que cette fonction est définie
      state.profile = action.payload;
    },
    signOutUser(state) {
      state.token = null;
      state.profile = null;
    },
  },
});

export const { setToken, setUserProfile, signOutUser } = userSlice.actions; // Vérifiez que setUserProfile est exporté
export default userSlice.reducer;