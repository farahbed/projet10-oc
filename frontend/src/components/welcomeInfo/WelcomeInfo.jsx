// src/components/welcomeInfo/WelcomeInfo.js
import React from 'react';
import { useSelector } from "react-redux";
import "./WelcomeInfo.css";

export const Welcome = () => {
  const userDetails = useSelector((state) => state.user.user);

  const firstName = userDetails ? userDetails.firstName : '';
  const lastName = userDetails ? userDetails.lastName : '';

  return (
    <div className="welcome">
      <p>
        Welcome back{(firstName || lastName) ? `, ${firstName} ${lastName}` : ''}!
      </p>
    </div>
  );
};

