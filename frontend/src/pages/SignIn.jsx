import React, { useState } from 'react';
import './SignIn.css'; // Réutilise ton fichier CSS
import { useNavigate } from 'react-router-dom';
import { User } from '../services/Api';


const SignIn = () => {
  // Utilisation de useState pour gérer les champs du formulaire
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await User(formData); // Appelle la fonction User de l'API
      localStorage.setItem('token', data.token); // Enregistre le token JWT
      navigate('/User'); // Redirige vers la page de profil
    } catch (error) {
      console.error('User failed:', error);
      // Afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <div className="sign-in-page">
     
     <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
    </div>
     
  );
};

export default SignIn;
