import React from 'react';
import './SignOut.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import { signOutUser } from '../../redux/userSlice'; // Assurez-vous d'importer l'action signOutUser

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialisez useNavigate

  const handleSignOut = () => {
    localStorage.removeItem('token'); // Supprime le token pour déconnecter
    dispatch(signOutUser()); // Appelle l'action pour réinitialiser l'état de l'utilisateur
    navigate('/login'); // Redirige vers la page de connexion après déconnexion
  };

  return (
    <button className="sign-out-button" onClick={handleSignOut}>
      <i className="fa-solid fa-right-from-bracket"></i>
      Sign Out
    </button>
  );
};

export default SignOut;


