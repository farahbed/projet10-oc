import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../redux/userSlice';
import { getUserProfile } from '../API/User';
import AccountList from '../components/account/Account';
import '../styles/profile.css';

const Profile = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const accounts = [
    { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
    { title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
    { title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
  ];

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      console.log('token', token);

      if (token) {
        try {
          const userData = await getUserProfile(token);
          console.log('Données utilisateur à stocker dans Redux:', userData);
          dispatch(setUserProfile(userData.body));
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchUserProfile();
  }, [dispatch]);

  return (
    <main className="main bg-dark">
        <AccountList accounts={accounts} />
    </main>
  );
};

export default Profile;
