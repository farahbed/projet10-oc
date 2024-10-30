const API_URL = 'http://localhost:3001/api/v1';

// Fonction pour se connecter
export const loginUserApi = async ({ email, password }) => {
  const response = await fetch(`${API_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();

  if (!response.ok || !data.body?.token) {
    throw new Error(data.message || 'Erreur lors de la tentative de connexion.');
  }

  return { user: data.body.user, token: data.body.token };
};
// Fonction pour recuperer le profil utilisateur

export const fetchUserProfileApi = async (token) => {
  const response = await fetch(`${API_URL}/user/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log("fetchUserProfileApi reponse data", data);

  if (!response.ok) {
    throw new Error(`Failed to fetch user profile: ${response.statusText}`);
  }

  return data;  // Retourne directement data pour un accès plus simple
};
// Fonction pour mettre à jour le profil
export const updateUserProfileApi = async (token, profileData) => {
  const response = await fetch(`${API_URL}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Erreur lors de la mise à jour du profil.');
  }

  return data.body; // Retourner le profil mis à jour
};

