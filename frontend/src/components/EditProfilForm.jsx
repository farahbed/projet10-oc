import React, { useState } from 'react';
import PropTypes from 'prop-types';
import'../styles/editProfile.css';

const EditProfileForm = ({ userProfile, onCancel }) => {
  // État pour stocker les valeurs des champs
  const [username, setUsername] = useState(userProfile.username || '');
  const [firstName, setFirstName] = useState(userProfile.firstName || '');
  const [lastName, setLastName] = useState(userProfile.lastName || '');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez votre logique pour mettre à jour le profil ici
    console.log({ username, firstName, lastName });
  };

    return (
        <div className="edit-profile-form">
          <h2>Edit User Info</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="username">User Name:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                readOnly
                style={{ backgroundColor: '#d3d3d3' }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                readOnly
                style={{ backgroundColor: '#d3d3d3' }}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit">Save</button>
              <button type="button" onClick={onCancel}>Cancel</button>
            </div>
          </form>
        </div>
      );
    };
      

EditProfileForm.propTypes = {
  userProfile: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditProfileForm;
