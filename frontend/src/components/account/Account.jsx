import React from 'react';
import PropTypes from 'prop-types';

export const Welcome = ({ userProfile }) => {
  console.log('Données du profil utilisateur', userProfile);

  const firstName = userProfile?.firstName || '';
  const lastName = userProfile?.lastName || '';

  return (
    <header className="header">
      <h1>
        Welcome back <br /> {(firstName || lastName) ? `${firstName} ${lastName}` : ''}!
      </h1>
      <button className="edit-button" onClick={() => alert('Edit Name button clicked')}>
        Edit Name
      </button>
    </header>
  );
};

Welcome.propTypes = {
  userProfile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

const AccountList = ({ accounts, userProfile }) => {
  return (
    <>
      <Welcome userProfile={userProfile} />
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <section className="account" key={index}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </>
  );
};

AccountList.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  userProfile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

export default AccountList;
