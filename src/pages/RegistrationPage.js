import React, { useState } from 'react';
import './styles/RegistrationPage.css';

const RegistrationPage = () => {
  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted');
    setEmailVerified(true); // Simulate email verification
  };

  const handleVerification = (e) => {
    e.preventDefault();
    console.log('Verification code submitted:', verificationCode);
    // Simulate verification success (replace with redirect logic in production)
  };

  return (
    <div className="registration-container">
      <div className="form-card">
        <h1>{emailVerified ? 'Verify Your Email' : 'User Registration'}</h1>
        {!emailVerified ? (
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="primary-btn">
              Register
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerification}>
            <input
              type="text"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <button type="submit" className="primary-btn">
              Verify
            </button>
          </form>
        )}
        <button className="google-btn">
          <span className="google-icon">G</span> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
