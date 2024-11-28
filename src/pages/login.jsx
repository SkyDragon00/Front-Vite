import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../assets/css/global.css';
import api from '../services/api';

export const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', credentials);

      if (response.status === 200) {
        const { user, token } = response.data;
        localStorage.setItem('token', token);

        if (user.role === 2) {
          navigate('/admin');
        } else if (user.role === 1) {
          navigate('/user');
        } else {
          alert('Unknown role!');
        }
      } else {
        alert(`Error: ${response.data.msg || 'Invalid email or password'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="button login-button">Log In</button>
      </form>
    </div>
  );
};
