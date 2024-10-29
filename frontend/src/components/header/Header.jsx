import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from '../../redux/userSlice'; // Corrigez l'importation ici
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const userProfile = useSelector((state) => state.user.profile);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    dispatch(signOutUser());
    navigate('/login'); // Redirige vers la page de connexion
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/assets/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <>
            <span className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userProfile?.firstName} {/* Affiche uniquement le prénom */}
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

