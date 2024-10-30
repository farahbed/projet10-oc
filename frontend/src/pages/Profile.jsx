import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile as fetchUserProfileThunk } from '../redux/userThunks';
import AccountList from '../components/account/Account';
import EditProfileForm from '../components/EditProfilForm';
import '../styles/profile.css';

const Profile = () => {
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false); // État pour gérer la visibilité du formulaire
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.profile);

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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      {/* Affichage du formulaire d'édition ou du message de bienvenue */}
      {isEditing ? (
        <EditProfileForm userProfile={userProfile} onCancel={handleCancelEdit} />
      ) : (
        <header className="header">
          <h1>
            Welcome back <br /> {userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : ''}
          </h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        </header>
      )}
      {/* Liste des comptes toujours affichée */}
      <AccountList accounts={accounts} userProfile={userProfile} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  );
};

export default Profile;
