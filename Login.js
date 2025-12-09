// src/pages/Login.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [role, setRole] = useState('Student');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.stopPropagation();
      e.target.classList.add('was-validated');
    } else {
      alert('Login successful!');
    }
  };

  return (
    <Container className="d-flex align-items-center bg-light" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-center w-100">
        <Col md={6} lg={5}>
          <Card className="p-5 shadow-lg border-0" style={{ borderRadius: '20px', background: '#fff' }}>
            <div className="text-center mb-4">
              <h3 style={{ color: '#0055A4', fontWeight: 'bold' }}>{role} Login</h3>
            </div>

            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="py-2"
                />
                <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 position-relative">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password"
                  required
                  className="py-2"   // ← Yahan quotation band ki hai!
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '38px',
                    cursor: 'pointer',
                    color: '#0055A4'
                  }}
                >
                  <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
                </span>
                <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-between mb-4">
                <a href="#" className="text-primary small">Forgot Password?</a>
                <span
                  className="text-primary small"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setRole(role === 'Student' ? 'Admin' : 'Student')}
                >
                  Switch to {role === 'Student' ? 'Admin' : 'Student'} Login
                </span>
              </div>

              <Button type="submit" className="w-100 mb-3" style={{ background: '#0055A4', border: 'none', padding: '12px' }}>
                Login
              </Button>

              <Button variant="danger" className="w-100 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Login with Google
              </Button>

              <p className="text-center mt-4 mb-0">
                Don't have an account?{' '}
                <Link to="/sign-up" style={{ color: '#0055A4', fontWeight: 'bold' }}>
                  Sign Up
                </Link>
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;