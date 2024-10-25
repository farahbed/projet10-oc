// src/pages/Profile.jsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../redux/userSlice';
import Welcome from '../components/welcomeInfo/WelcomeInfo';


const Profile = () => {
  const dispatch = useDispatch();
  const { userProfile, loading, error } = useSelector((state) => state.user);

  const accounts = [
    { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
    { title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
    { title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
  ];

  useEffect(() => {
    if (!userProfile) {
      dispatch(getUserProfile());
    }
  }, [dispatch, userProfile]);

  if (loading) {
    return <p>Loading user data...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <main className="main bg-dark">
        <Welcome firstName={userProfile?.firstName || ''} lastName={userProfile?.lastName || ''} />
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account, index) => (
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
        ))}
      </main>
    </div>
  );
};

export default Profile;
