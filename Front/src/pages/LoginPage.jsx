import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api/auth';
import '../css/AuthPage.css';
import slogan from '../assets/slogan.png';
import appleIcon from '../assets/appleIcon.png';
import googleIcon from '../assets/googleIcon.jpg';
import kakaoIcon from '../assets/kakaoIcon.jpg';
import naverIcon from '../assets/naverIcon.png';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

return (
  <div className="auth-container">
    <div className="auth-form">
      <img src={slogan} alt="Slogan" style={{ width: '100%', marginBottom: '20px' }} />
      <p style={{ fontWeight: 'bold', fontSize: '1.2em', marginBottom: '0' }}>Sign in to Continue</p>
      <p style={{ color: 'grey' }}>Please sign in to start Fair Road's service.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
          <div className="divider-with-text">
            <span>Or continue with</span>
          </div>
          <div className="social-buttons">
            <button className="social-btn" onClick={() => alert('Google login not implemented yet')}><img src={googleIcon} alt="googleIcon" /></button>
            <button className="social-btn" onClick={() => alert('Apple login not implemented yet')}><img src={appleIcon} alt="appleIcon" /></button>
            <button className="social-btn" onClick={() => alert('Naver login not implemented yet')}><img src={naverIcon} alt="naverIcon" /></button>
            <button className="social-btn" onClick={() => alert('Kakao login not implemented yet')}><img src={kakaoIcon} alt="kakaoIcon" /></button>
          </div>
    </div>
    <p className="mt-3 text-center">
      Don't have an account? <Link to="/signup">Sign up</Link>
    </p>
  </div>
);

}

export default LoginPage;
