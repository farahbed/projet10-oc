// src/components/WelcomeInfo.jsx

import React from 'react';
import './WelcomeInfo.css';

const WelcomeInfo = ({ firstName, lastName }) => (
  <div className="welcome-info">
    <h1 className="welcome-message">Bienvenue, {firstName} {lastName} !</h1>
    <p className="welcome-description">Voici un résumé de vos informations bancaires.</p>
  </div>
);

export default WelcomeInfo;


