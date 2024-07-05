import React, { useState } from 'react';
import './popupStyle.css';

const ChangePasswordPopup = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== reEnterPassword) {
      alert('New password and re-entered password do not match');
      return;
    }

    try {
      const response = await fetch('https://your-api-endpoint.com/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      });

      if (response.ok) {
        alert('Password changed successfully');
        onClose();
      } else {
        alert('Failed to change password');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      alert('An error occurred while changing the password');
    }
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="oldPassword">Old Password</label>
            <input
              type="password"
              id="oldPassword"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reEnterPassword">Re-Enter Password</label>
            <input
              type="password"
              id="reEnterPassword"
              placeholder="Re-Enter Password"
              value={reEnterPassword}
              onChange={(e) => setReEnterPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPopup;
