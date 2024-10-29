import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Importez useSelector
import SignOut from './signOut';
import './Header.css';
import './signOut.css';

const Header = () => {
  const token = useSelector((state) => state.user.token); // Récupérez le token depuis le store

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="../../assets/argentBankLogo.png" // Chemin absolu à partir de public
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <SignOut /> // Affiche le bouton de déconnexion si le token existe
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
