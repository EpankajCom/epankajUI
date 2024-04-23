import React, { useState } from 'react';
import './login.css';
import companyLogo from '../paymentPopup/rajlee1_logo.jpeg';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="company-details">
      <img id='image' src={companyLogo} alt="Company Logo"  /> 
        <h1>Rajlee Innovation Private Limited</h1>
        <p>
          We are a leading technology company specializing in innovative solutions for businesses of all sizes. Our team of experts is dedicated to providing cutting-edge products and services that drive growth and success for our clients.
        </p>
      </div>
      <div className="form-container">
      
        <div className="form-card">
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <div className="form-toggle">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button type="button" onClick={toggleForm} className="toggle-btn">
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;