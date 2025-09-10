import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authcontext';
import './Header.css';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <Link to="/" className="logo">Task Manager</Link>
      <nav>
        {isAuthenticated ? (
          <button onClick={logout} className="logout-btn">Logout</button>
        ) : (
          <Link to="/auth" className="auth-link">Login / Sign Up</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;