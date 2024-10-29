import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
  profile: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    setUserProfile(state, action) {
      state.profile = action.payload;
    },
    signOutUser(state) {
      state.token = null;
      state.profile = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setToken, setUserProfile, signOutUser } = userSlice.actions;
export default userSlice.reducer;
