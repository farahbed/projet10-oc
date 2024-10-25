import React from 'react';
import './WelcomeInfo.css';

const WelcomeInfo = ({ userProfile }) => {
  return (
    <section className="welcome">
      {userProfile ? ( // Vérifiez que userProfile n'est pas null
        <>
          <h2>Welcome back</h2>
          <h1>{userProfile.name}!</h1>
          <button>Edit Name</button>
        </>
      ) : (
        <h2>Loading...</h2> 
      )}
    </section>
  );
};

export default WelcomeInfo;


