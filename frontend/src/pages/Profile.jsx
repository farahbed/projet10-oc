// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { Welcome } from '../components/welcomeInfo/WelcomeInfo';
import { getUserProfile } from '../API/User';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../redux/userSlice';
import '../components/account/Account.css';
import AccountList from '../components/account/Account';

const Profile = () => {
  const [error, setError] = useState(''); // État pour gérer les erreurs
  const dispatch = useDispatch();

  const accounts = [
    { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
    { title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
    { title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
  ];

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token'); // Récupérer le token depuis le localStorage
      console.log('token', token)

      if (token) {
        try {
          const userData = await getUserProfile(token); // Appel à l'API pour récupérer le profil utilisateur
          console.log('Données utilisateur à stocker dans Redux:', userData);
          dispatch(setUserProfile(userData.body));

        } catch (error) {
          setError(error.message); // Gérer l'erreur en cas d'échec
        }
      }
    };

    fetchUserProfile();
  }, [dispatch]); // Le tableau vide signifie que l'effet ne s'exécute qu'une seule fois après le premier rendu

  return (
    <div>
      <main className="main bg-dark">
        <Welcome />
        <AccountList accounts={accounts} />
      </main>
    </div>
  );
};

export default Profile