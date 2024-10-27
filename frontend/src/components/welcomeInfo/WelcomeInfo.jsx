// src/components/welcomeInfo/WelcomeInfo.js
import React from 'react';
import { useSelector } from "react-redux";
import "./WelcomeInfo.css";

export const Welcome = () => {
  const userProfile = useSelector((state) => state.user.profile);
  console.log("userProfile dans Welcome", userProfile);

  const firstName = userProfile ? userProfile.firstName : '';
  const lastName = userProfile ? userProfile.lastName : '';

  return (
    <div className="welcome">
      <p>
        Welcome back{(firstName || lastName) ? `, ${firstName} ${lastName}` : ''}!
      </p>
      {/* Bouton Edit Name ajouté */}
      <button onClick={() => alert("Edit Name button clicked")}>
        Edit Name
      </button>
    </div>
  );
};

