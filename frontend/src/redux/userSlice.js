import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    userProfile: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = null;
    },
    setUserProfile(state, action) {
      state.userProfile = action.payload;
    },
  },
});

export const { setToken, clearToken, setUserProfile } = userSlice.actions;
export default userSlice.reducer;
