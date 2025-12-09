// src/components/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{ background: 'white', padding: '1rem ' }}>
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center font-weight-bold" to="/" style={{ fontSize: '1.8rem', color:'#0055A4'}}>
          <span>Next Generation</span>
        </Link>

        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#mainNav">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ml-auto">
            {[
              { to: "/", label: "Home" },
              { to: "/courses", label: "Courses" },
              { to: "/blog", label: "Blog" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" }
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  exact
                  to={item.to}
                  className="nav-link px-4 py-2 rounded transition"
                  activeClassName="bg-white text-dark font-weight-bold shadow-sm"
                  style={{
                    fontWeight: '500',
                    transition: 'all 0.3s',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#0084ffff'}
                  onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="nav-item ml-lg-3">
              <NavLink
                to="/login"
                className="btn btn-primary text-white font-weight-bold px-4 py-2 shadow-lg"
                style={{
                  borderRadius: '30px',
                  transition: 'all 0.3s',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Login
              </NavLink>
            </li>
                        <li className="nav-item ml-lg-3">
              <NavLink
                to="/signin"
                className="btn btn-warning text-dark font-weight-bold px-4 py-2 shadow-lg"
                style={{
                  borderRadius: '30px',
                  transition: 'all 0.3s',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}