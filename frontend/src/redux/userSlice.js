// src/redux/userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfile as fetchUserProfile } from '../API/Auth'; // Importation de la fonction API

// Thunk asynchrone pour récupérer les informations du profil utilisateur
export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const userProfile = await fetchUserProfile(); // Appel de la fonction pour récupérer le profil
      return userProfile; // Retourne directement le profil de l'utilisateur
    } catch (error) {
      return rejectWithValue(error.message || 'Erreur de récupération du profil');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    userProfile: null,
    loading: false,
    error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload; // Assigne le profil utilisateur récupéré
        state.loading = false;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.error = action.payload; // Gère l'erreur si l'appel échoue
        state.loading = false;
      });
  },
});

export const { setToken, clearToken, setUserProfile } = userSlice.actions;
export default userSlice.reducer;
