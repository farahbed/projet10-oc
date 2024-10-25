const API_URL = 'http://localhost:3001/api/v1';

// Fonction pour se connecter

const userLogin = async ({ email, password }) => {
  try {
    console.log('Attempting login with:', { email, password });
    const response = await fetch(${API_URL}/user/login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('Login response:', data);

    if (response.ok) { 
      const token = data.body.token; // Vérifiez la bonne structure ici
      localStorage.setItem('token', token);
      return data; // Retournez l'objet entier
    } else {
      console.log('Login failed:', data.message);
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error during login:', error);
    throw new Error('Une erreur est survenue lors de la connexion.'); // Lancer une erreur personnalisée
  }
};


export default userLogin;

