// src/pages/Login.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken, setUserProfile } from '../redux/userSlice';
import userLogin from '../API/Auth'; // Assurez-vous que cette fonction est correcte
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin({ email, password });
      dispatch(setToken(response.token)); // Mettez à jour le token
      dispatch(setUserProfile(response.user)); // Mettez à jour le profil utilisateur
      navigate('/profile');
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.message || 'Erreur de connexion.');
    }
  };

  return (
    <div className="main">
      <div className="sign-in-content">
        <h2 className="sign-in-icon">Sign In</h2>
        <form className='signInContent' onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              id="remember-me"
            />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <button className='sign-in-button' type="submit">Sign In</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
