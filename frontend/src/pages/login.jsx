import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserProfile } from '../redux/userSlice';
import userLogin from '../redux/auth'; // Importation correcte
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState(''); // Changement de username à email
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin({ email, password }); // Appel à userLogin
      dispatch(setUserProfile(response.body.user)); // Mettez à jour l'état utilisateur avec les données du profil
      navigate('/profile'); // Redirection vers le profil
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.message || 'Une erreur est survenue lors de la connexion.'); // Affichez l'erreur
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
              type="email" // Changement de type à email
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Mettez à jour l'état avec l'email
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
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Affichez l'erreur */}
      </div>
    </div>
  );
};

export default Login;
