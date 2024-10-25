// src/API/userAPI.js
const fetchUserProfile = async (token) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Ajouter le token à l'en-tête
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
  
    return await response.json();
  };
  
  export { fetchUserProfile };
  