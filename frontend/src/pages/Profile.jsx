import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../redux/userSlice';
import Welcome from '../components/Welcome';

const Profile = () => {
  const dispatch = useDispatch();
  
  // Récupération des données utilisateur via Redux
  const { user, loading, error } = useSelector((state) => state.user);

  // Données statiques pour les comptes
  const accounts = [
    { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
    { title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
    { title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
  ];

  // Charger les informations de profil utilisateur si elles ne sont pas déjà disponibles
  useEffect(() => {
    if (!user) {
      dispatch(getUserProfile());
    }
  }, [dispatch, user]);

  // Gestion du chargement
  if (loading) {
    return <p>Loading user data...</p>;
  }

  // Gestion des erreurs
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <main className="main bg-dark">
        <Welcome firstName={user?.firstName || ''} lastName={user?.lastName || ''} />
        <h2 className="sr-only">Accounts</h2>
        {accounts && accounts.length > 0 ? (
          accounts.map((account, index) => (
            <section className="account" key={index}>
              <div className="account-content-wrapper">
                <h3 className="account-title">{account.title}</h3>
                <p className="account-amount">{account.amount}</p>
                <p className="account-amount-description">{account.description}</p>
              </div>
              <div>
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
          ))
        ) : (
          <p>No accounts found.</p>
        )}
      </main>
    </div>
  );
};

export default Profile;
