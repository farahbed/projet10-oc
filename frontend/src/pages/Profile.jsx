// src/pages/Profile.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserProfile } from '../redux/userSlice';
import { fetchUserProfile } from '../API/User';
import AccountList from '../components/account/Account';
import WelcomeInfo from '../components/welcomeInfo/WelcomeInfo'; // Importer le composant

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token); // Récupérer le token de Redux
  const userProfile = useSelector((state) => state.user.profile); // Récupérer le profil utilisateur

  // Définir le tableau accounts ici
  const accounts = [
    { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
    { title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
    { title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        try {
          const profile = await fetchUserProfile(token); // Passer le token à la fonction
          dispatch(setUserProfile(profile));
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      }
    };

    fetchProfile();
  }, [token, dispatch]);

  return (
    <main className="main bg-dark">
      <WelcomeInfo userProfile={userProfile} /> {/* Utiliser le composant ici */}
      <AccountList accounts={accounts} /> {/* Passer le tableau accounts au composant */}
    </main>
  );
};

export default Profile;
