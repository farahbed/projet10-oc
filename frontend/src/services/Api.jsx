const API_URL = 'http://localhost:3001/api/v1';

export const User = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();
    return data; // Retourne le token JWT ou d'autres données
  } catch (error) {
    console.error('API Error:', error);
    throw error; // Relève l'erreur pour pouvoir la gérer dans le composant
  }
};
// Fonction pour récupérer le profil utilisateur
export const getUserProfile = async (token) => {
    try {
      const response = await fetch(`${API_URL}/user/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Authentification avec le token JWT
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }
  
      const data = await response.json();
      return data; // Retourne les informations du profil utilisateur
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };