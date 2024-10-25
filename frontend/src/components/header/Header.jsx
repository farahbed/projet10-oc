import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton'; // Assurez-vous que le nom du fichier est correct
import './Header.css'; // Assurez-vous d'importer le fichier CSS

const Header = () => {
  const token = localStorage.getItem('token'); // Vérifie si le token existe

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/assets/argentBankLogo.png" // Chemin absolu à partir de public
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <SignOutButton /> // Affiche le bouton de déconnexion si le token existe
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;

