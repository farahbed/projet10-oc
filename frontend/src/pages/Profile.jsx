import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile as fetchUserProfileThunk } from '../redux/userThunks';
import AccountList from '../components/account/Account';
import '../styles/profile.css';

const Profile = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.profile);  // Récupération du profil utilisateur

  const accounts = [
    { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
    { title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
    { title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      console.log('token retrieved', token);

      if (token) {
        try {
          await dispatch(fetchUserProfileThunk()).unwrap();
        } catch (error) {
          setError(error.message);
        }
      } else {
        setError('Token not found in localStorage');
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <main className="main bg-dark">
      <AccountList accounts={accounts} userProfile={userProfile} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  );
};

export default Profile;
