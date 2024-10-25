// src/redux/userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action pour se connecter
export const loginUser = createAsyncThunk('user/loginUser', async (credentials) => {
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Failed to log in');
  }

  const data = await response.json();
  return data;
});

// Action pour récupérer le profil utilisateur après connexion
export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async (token) => {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch profile');
  }

  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      // Gestion de loginUser
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token); // Stocker le token
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Gestion de fetchUserProfile
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload; // Stocker les informations de l'utilisateur
        state.loading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Exporter les actions
export const { clearUser } = userSlice.actions;

// Exporter les sélecteurs
export const getUser = (state) => state.user.user;

export default userSlice.reducer;
