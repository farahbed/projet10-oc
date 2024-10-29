import React from 'react';
import { useSelector } from "react-redux";

export const Welcome = () => {
  const userProfile = useSelector((state) => state.user.profile);
  console.log("userProfile dans Welcome", userProfile);

  const firstName = userProfile ? userProfile.firstName : '';
  const lastName = userProfile ? userProfile.lastName : '';

  return (
    <header className="header">
      <h1>
        Welcome back <br /> {(firstName || lastName) ? ` ${firstName} ${lastName}` : ''}!
      </h1>
      <button className="edit-button" onClick={() => alert("Edit Name button clicked")}>
        Edit Name
      </button>
    </header>
  );
};

const AccountList = ({ accounts }) => {
  return (
    <>
      <Welcome />
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

export default AccountList;
