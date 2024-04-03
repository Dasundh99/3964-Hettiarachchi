import '../styles.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          PlayNXT
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gamelist" exact className="nav-link" activeClassName="active">
                Game List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/search" exact className="nav-link" activeClassName="active">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link" activeClassName="active">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" activeClassName="active">
                Admin Login
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
