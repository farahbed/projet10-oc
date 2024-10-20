import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // d'autres options peuvent être ajoutées ici si nécessaire
});

export default store;

