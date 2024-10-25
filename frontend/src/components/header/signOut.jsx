// src/components/SignOutButton.js
import React from 'react';

const SignOutButton = () => {
  const handleSignOut = () => {
    localStorage.removeItem('token'); // Supprimer le token
    window.location.href = '/login'; // Rediriger vers la page de connexion
  };

  return (
    <button className="main-nav-item" onClick={handleSignOut}>
      <i className="fa fa-sign-out"></i> {/* Icône de déconnexion */}
      Sign Out
    </button>
  );
};

export default SignOutButton;
