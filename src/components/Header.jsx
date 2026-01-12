  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import './App.css';

  export default function Navbar() {
    const [showAuthModal, setShowAuthModal] = useState(false);

    return (
      <>
        <nav className="navbar">
          <h1 className="logo">
            Shiwansh <span style={{ color: 'black', fontWeight: '400' }}>Solutions</span></h1>
          <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/internship'>Internship</Link>
            <Link to='/career'>Career</Link>
            <Link to='/blog'>Blogs</Link>
            <Link to='/contact'>Contact</Link>


            <button className="signup-btn" onClick={() => setShowAuthModal(true)}>
              Login
            </button>
          </div>
        </nav>

        {/* Login Modal Only */}
        {showAuthModal && (
          <div className="modal-overlay" onClick={() => setShowAuthModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowAuthModal(false)}>
                ×
              </button>

              {/* ONLY LOGIN FORM */}
              <form className="auth-form">
                <h2> Login</h2>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" className="submit-btn">Login</button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
