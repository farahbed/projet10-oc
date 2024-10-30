import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken, setUserProfile } from './userSlice';
import { loginUserApi, fetchUserProfileApi, updateUserProfileApi } from './userApi';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const { user, token } = await loginUserApi({ email, password });
      dispatch(setToken(token));
      dispatch(setUserProfile(user));
      return { user, token };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
    'user/fetchUserProfile',
    async (_, { getState, dispatch, rejectWithValue }) => {
      const { token } = getState().user;
      try {
        const data = await fetchUserProfileApi(token);
        
        if (data && data.body) {
          // Mise à jour du profil utilisateur dans le store Redux
          dispatch(setUserProfile(data.body));  // Assurez-vous d'envoyer le bon objet
          return data.body;  // Retourner les données utilisateur
        } else {
          throw new Error('Profil utilisateur non trouvé.');
        }
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const updateUserProfile = createAsyncThunk(
    'user/updateUserProfile',
    async (profileData, { getState, dispatch, rejectWithValue }) => {
      const { token } = getState().user;
      try {
        const updatedProfile = await updateUserProfileApi(token, profileData);
        dispatch(setUserProfile(updatedProfile));
        return updatedProfile;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );