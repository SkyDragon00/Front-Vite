import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../assets/css/global.css'; // Ensure this file is included for global styles
import api from '../services/api'; // Use the Axios instance created for API calls

const Signup = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Using Axios for the POST request
        const response = await api.post('/users', {
          ...formData,
          role: 'USER_ROLE', // Force role to USER_ROLE
        });

        if (response.status === 201) { // 201 indicates successful resource creation
          alert('User account created successfully!');
        } else {
          alert(`Error: ${response.data.msg || 'Failed to create account'}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Server error. Please try again later.');
      }
    };

    return (
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="button signup-button">Sign Up</button>
        </form>
      </div>
    );
  };

export default Signup;
