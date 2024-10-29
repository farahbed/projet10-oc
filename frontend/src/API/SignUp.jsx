// src/services/user.js

// Fonction pour s'inscrire
export const userSignup = async ({ email, password, firstName, lastName }) => {
    try {
      const response = await fetch(`${API_URL}/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName, lastName }), // Inclure les données nécessaires
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return data; // Retourne les données si l'inscription est réussie
      } else {
        throw new Error(data.message || 'Erreur lors de l\'inscription.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      throw new Error(error.message || 'Une erreur est survenue lors de l\'inscription.');
    }
  };
  