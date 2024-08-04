import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Loader from './Loader'; // Import the Loader component
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState(''); // State for feedback messages
  const [success, setSuccess] = useState(false); // State for showing success icon
  const [attempts, setAttempts] = useState(0); // State for tracking invalid attempts
  const [error, setError] = useState(false); // State to trigger glow animation
  const [loading, setLoading] = useState(false); // State for loading spinner
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (error) setError(false); // Reset error state when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', response.data.token); // Store the token in localStorage
      setMessage('Login successful'); // Set success message
      setSuccess(true); // Set success state
      setAttempts(0); // Reset attempts on successful login
      setError(false); // Reset error state on successful login

      // Clear form fields
      setFormData({
        email: '',
        password: ''
      });

      // Wait for 2 seconds before redirecting
      setTimeout(() => {
        setLoading(false); // Hide loader
        navigate('/'); // Redirect to home page
      }, 2000); // Adjust delay as needed

    } catch (error) {
      console.error('Error logging in user:', error);
      setAttempts(prevAttempts => prevAttempts + 1); // Increment invalid attempts

      // Check the number of attempts and set message accordingly
      if (attempts + 1 >= 3) {
        setMessage('Too many failed attempts. Please register.');
      } else {
        setMessage('Invalid email or password'); // Set error message
      }
      setSuccess(false); // Reset success state
      setError(true); // Set error state to trigger glow animation
      setLoading(false); // Hide loader
    }
  };

  return (
    <>
      {loading && <Loader />} {/* Show loader if loading state is true */}
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: 'black' }}>
        <div className={`login-container d-flex flex-column p-4 p-md-5 border rounded ${error ? 'border-glow' : ''}`} style={{ maxWidth: '400px', width: '100%', backgroundColor: 'white' }}>
          {/* Show message at the top of the form */}
          {message && (
            <div className={`alert ${message.includes('Error') || message.includes('Invalid') ? 'alert-danger' : 'alert-success'} mb-3 d-flex align-items-center`}>
              {success && <i className="fas fa-check-circle me-2" style={{ color: 'green' }}></i>}
              {message}
            </div>
          )}
          <div className="text-center mb-4 mt-3">
            <p style={{ color: 'black', fontSize: '18px' }}>Sign in with:</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="floating-label-content mb-3">
              <input
                className="floating-input form-control"
                type="email"
                id="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
              />
              <label className="floating-label" htmlFor="email">Email address</label>
            </div>
            <div className="floating-label-content mb-3">
              <input
                className="floating-input form-control"
                type="password"
                id="password"
                placeholder=" "
                value={formData.password}
                onChange={handleChange}
              />
              <label className="floating-label" htmlFor="password">Password</label>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
              <div className="form-check">
                <input className="form-check-input border-primary" type="checkbox" id="rememberMe" />
                <label className="form-check-label" style={{ color: 'black' }} htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#!" style={{ color: 'black' }}>Forgot password?</a>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-outline-danger mb-3 mt-3">Sign in</button>
            </div>
          </form>
          <p className="text-center mt-3" style={{ color: 'black' }}>
            Not a member? <a href="./register">Register</a>
          </p>
        </div>
        <style>{`
          body {
            background-color: black;
            color: white;
            margin: 0;
            padding: 0;
          }
          .login-container {
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: none; /* Ensure no permanent shadow */
            transition: border 0.3s ease-in-out;
          }
          .border-glow {
            animation: glow 1.5s infinite;
          }
          @keyframes glow {
            0% { border-color: rgba(255, 0, 0, 0.5); }
            50% { border-color: rgba(255, 0, 0, 0.8); }
            100% { border-color: rgba(255, 0, 0, 0.5); }
          }
          .floating-label-content {
            position: relative;
          }
          .floating-label {
            color: red;
            font-size: 13px;
            font-weight: none;
            position: absolute;
            pointer-events: none;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            padding: 0 4px;
            background: #fff;
            transition: 0.2s ease all;
          }
          .floating-input {
            font-size: 14px;
            display: block;
            width: 100%;
            height: 36px;
            padding: 0 20px;
            background: #fff;
            color: black;
            border: 1px solid #3D85D8;
            border-radius: 5px;
            box-sizing: border-box;
          }
          .floating-input:focus, .floating-input:not(:placeholder-shown) {
            border-color: #3D85D8;
          }
          .floating-input:focus + .floating-label, .floating-input:not(:placeholder-shown) + .floating-label {
            top: -6px;
            left: 10px;
            font-size: 12px;
            color: #3D85D8;
          }
          .btn-outline-danger {
            border-color: #FF3D00;
            color: #FF3D00;
            transition: 0.3s;
          }
          .btn-outline-danger:hover {
            background-color: #FF3D00;
            color: #fff;
          }
        `}</style>
      </div>
    </>
  );
}

export default Login;
