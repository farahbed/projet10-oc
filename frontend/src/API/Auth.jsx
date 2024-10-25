// src/API/Auth.jsx

const API_URL = 'http://localhost:3001/api/v1';

// Fonction de connexion
const userLogin = async ({ email, password }) => {
  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la connexion.');
    }

    const data = await response.json();
    return { token: data.token, user: data.user }; // Retournez le token et l'utilisateur
  } catch (error) {
    console.error('Error during login:', error);
    throw new Error(error.message || 'Une erreur est survenue lors de la connexion.');
  }
};

// Fonction pour récupérer le profil utilisateur
export const getUserProfile = async () => {
  try {
    const response = await fetch(`${API_URL}/user/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Utilisez le token
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du profil utilisateur.');
    }

    const data = await response.json();
    return data.user; // Retournez uniquement l'utilisateur
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw new Error(error.message || 'Une erreur est survenue lors de la récupération du profil utilisateur.');
  }
};

export default userLogin; // Assurez-vous d'exporter la fonction userLogin
