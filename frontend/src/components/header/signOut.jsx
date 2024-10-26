import React from 'react';
import { useDispatch } from 'react-redux';
import clearUser from '../../redux/userSlice';

const SignOutButton = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(clearUser()); // Efface les données utilisateur et le token
  };

  return (
    <button className="sign-out-button" onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOutButton;

