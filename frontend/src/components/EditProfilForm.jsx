import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateUserProfileApi } from '../redux/userApi';
import { setUserProfile } from '../redux/userSlice';
import '../styles/editProfile.css';

const EditProfileForm = ({ userProfile, onCancel }) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState(userProfile.userName || '');
  const [firstName, setFirstName] = useState(userProfile.firstName || '');
  const [lastName, setLastName] = useState(userProfile.lastName || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      const updatedProfile = await updateUserProfileApi(token, { userName, firstName, lastName });
      dispatch(setUserProfile(updatedProfile));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-profile-form">
      <h2>Edit User Info</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
