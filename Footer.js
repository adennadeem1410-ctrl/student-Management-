// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer style={{ background: '#0055A4', color: '#ccc', padding: '70px 0 30px' }}>
      <div className="container">
        <div className="row">
          {/* Brand & Description */}
          <div className="col-lg-4 mb-5">
            <div className="d-flex align-items-center mb-3">
              <h3 className="text-warning mb-0">Next Generation</h3>
            </div>
            <p className="text-light">Empowering Pakistan's youth with job-ready skills in Web, App, Design & Digital Marketing. Join us and build your future.</p>
            <div className="mt-3">
              <a href="#" className="text-warning mr-3"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
              <a href="#" className="text-warning mr-3"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
              <a href="#" className="text-warning mr-3"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
              <a href="#" className="text-warning mr-3"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
              <a href="#" className="text-warning"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-5">
            <h5 className="text-warning font-weight-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {['Home', 'Courses', 'Blog', 'About', 'Contact'].map((item) => (
                <li key={item} className="mb-2">
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-light" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#FFC107'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-warning font-weight-bold mb-4">Popular Courses</h5>
            <ul className="list-unstyled">
              {['Web Development', 'Graphic Design', 'App Development', 'Digital Marketing', 'UI/UX Design'].map((course) => (
                <li key={course} className="mb-2 text-light small">{course}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 mb-5">
            <h5 className="text-warning font-weight-bold mb-4">Contact Info</h5>
            <p className="text-light mb-2">123 Main Road, Lahore, Pakistan</p>
            <p className="text-light mb-2">+92 300 1234567</p>
            <p className="text-light mb-4">info@nextgeneration.edu.pk</p>
          </div>
        </div>

        <hr style={{ borderColor: '#333' }} />

        <div className="text-center text-light small">
          © 2025 Next Generation Institute. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}