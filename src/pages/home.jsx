import { useState } from "react";
import { Link } from 'react-router-dom';
import '../assets/css/global.css';
import LogoDragon from '../assets/LogoDragon.png';

export const Home = () => {
  return (
    <div className="home-container">
      <img src={LogoDragon} alt="Draconic Games Logo" className="logo" />
      <h1 className="welcome-text">Welcome to Draconic Games</h1>
      <div className="button-group">
        <Link to="/login">
          <button className="button login-button">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="button signup-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};
