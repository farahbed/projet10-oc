// src/components/AccountList.jsx
import React from 'react';
import './Account.css'; // Importez le CSS si nécessaire

const AccountList = ({ accounts }) => {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <section className="account" key={index}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">{account.description}</p>
          </div>
            <button className="transaction-button">View transactions</button>
        </section>
      ))}
    </>
  );
};

export default AccountList;
