import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token); // Récupérez le token depuis le store
  const userName = useSelector((state) => state.user.userName); // Récupérez le nom d'utilisateur depuis le store

  const handleSignOut = () => {
    localStorage.removeItem('token'); // Supprime le token pour déconnecter
    dispatch({ type: 'user/signOut' }); // Remplacez par l'action appropriée pour réinitialiser l'état de l'utilisateur
  };

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
          <>
            <span className="main-nav-item">
              <i className="fa fa-user-circle"></i> {/* Icône utilisateur */}
              {userName || 'User'} {/* Affiche le nom d'utilisateur ou "User" par défaut */}
            </span>
            <button className="main-nav-item sign-out-button" onClick={handleSignOut}>
              <i className="fa-solid fa-right-from-bracket"></i>
              Sign Out
            </button>
          </>
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
