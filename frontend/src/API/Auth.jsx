const API_URL = 'http://localhost:3001/api/v1';

// Fonction pour se connecter
const userLogin = async ({ email, password }) => {
  try {
    console.log('Attempting login with:', { email, password });
    const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('Login response:', data);

    if (response.ok && data.body?.token) { 
      const token = data.body.token;
      localStorage.setItem('token', token); // Stocke le token pour usage ultérieur
      return { user: data.body.user, token }; // Retourne l'utilisateur et le token
    } else {
      throw new Error(data.message || 'Erreur lors de la tentative de connexion.');
    }
  } catch (error) {
    console.error('Error during login:', error);
    throw new Error(error.message || 'Une erreur est survenue lors de la connexion.');
  }
};

export default userLogin;
