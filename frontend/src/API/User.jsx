// src/services/user.js
const API_URL = 'http://localhost:3001/api/v1';

// Fonction pour récupérer le profil utilisateur
export const getUserProfile = async (token) => {
  try {
    const response = await fetch(`${API_URL}/user/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Utilisation de backticks pour l'interpolation
      },
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Failed to fetch user profile: ${errorDetails.message || response.statusText}`); // Utilisation de backticks
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
