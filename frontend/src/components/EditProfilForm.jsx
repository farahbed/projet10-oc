import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/editProfile.css';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../redux/userSlice'; // Adjust the import path if necessary

const EditProfileForm = ({ userProfile, onCancel }) => {
  const dispatch = useDispatch(); // Initialize dispatch

  // State for form inputs
  const [username, setUsername] = useState(userProfile.username || '');
  const [firstName, setFirstName] = useState(userProfile.firstName || '');
  const [lastName, setLastName] = useState(userProfile.lastName || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Dispatch the setUserProfile action with updated data
    dispatch(setUserProfile({ username, firstName, lastName }));

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
