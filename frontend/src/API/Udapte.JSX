// Fonction pour mettre à jour le profil utilisateur
export const updateUserProfile = async (token, profileData) => {
    try {
      const response = await fetch(`${API_URL}/user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Utilisation de backticks pour l'interpolation
        },
        body: JSON.stringify(profileData), // Envoie les données mises à jour
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return data; // Retourne les données mises à jour
      } else {
        throw new Error(data.message || 'Erreur lors de la mise à jour du profil.');
      }
    } catch (error) {
      console.error('Error during profile update:', error);
      throw new Error(error.message || 'Une erreur est survenue lors de la mise à jour du profil.');
    }
  };
  