/ src/redux/reducers.js
import { combineReducers } from 'redux';
import userReducer from './userSlice'; // Assure-toi d'importer ton slice

const rootReducer = combineReducers({
  user: userReducer,
  // d'autres reducers peuvent être ajoutés ici
});

export default rootReducer;