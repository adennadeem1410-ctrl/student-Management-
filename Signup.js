// File: src/pages/Signup.js (Enhanced styling: added shadows to card, better input borders, button shadows)
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.sname.value.trim();
    const phone = form.sphone.value.trim();
    const pass = form.spass.value;
    const pass2 = form.spass2.value;

    if (!/^[A-Za-z\s]+$/.test(name)) {
      alert('Full name should contain letters only.');
      return;
    }
    if (!/^03[0-9]{2}-[0-9]{7}$/.test(phone)) {
      alert('Phone must be in format 03XX-XXXXXXX');
      return;
    }
    if (pass.length < 6) {
      alert('Password should be at least 6 characters.');
      return;
    }
    if (pass !== pass2) {
      alert('Passwords do not match.');
      return;
    }

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
    } else {
      alert('Account created (demo). Please implement backend to store users.');
      form.reset();
      form.classList.remove('was-validated');
    }
  };

  return (
    <Container className="bg-light" style={{ minHeight: '80vh' }}>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100%' }}>
        <Col md={7}>
          <Card className="signup-card p-4 shadow-lg border-0" style={{ borderRadius: '15px' }}>
            <h3 className="text-center mb-4" style={{ color: '#0055A4', fontWeight: 'bold' }}>Student Sign Up</h3>
            <Form id="signupForm" noValidate onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" id="sname" required className="border rounded" />
                    <Form.Control.Feedback type="invalid">Enter full name (letters only).</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" id="sphone" placeholder="03XX-XXXXXXX" required className="border rounded" />
                    <Form.Control.Feedback type="invalid">Enter phone in format 03XX-XXXXXXX</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" id="semail" required className="border rounded" />
                <Form.Control.Feedback type="invalid">Enter a valid email.</Form.Control.Feedback>
              </Form.Group>

              <Row>
                <Col md={6} className="position-relative">
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={showPass ? 'text' : 'password'} id="spass" required className="border rounded" />
                    <span style={{ position: 'absolute', right: '12px', top: '38px', cursor: 'pointer' }} onClick={() => setShowPass(!showPass)}>
                      <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} className="text-muted" />
                    </span>
                    <Form.Control.Feedback type="invalid">Password (min 6 chars).</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" id="spass2" required className="border rounded" />
                    <Form.Control.Feedback type="invalid">Passwords must match.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Choose Course</Form.Label>
                <Form.Control as="select" id="scourse" required className="border rounded">
                  <option value="">Select a course</option>
                  {/* Options remain the same */}
                </Form.Control>
                <Form.Control.Feedback type="invalid">Select a course.</Form.Control.Feedback>
              </Form.Group>

              {/* Added: Address Field */}
              <Form.Group className="mb-3">
                <Form.Label>Address (Optional)</Form.Label>
                <Form.Control type="text" id="saddress" className="border rounded" />
              </Form.Group>

              <Button variant="primary" block type="submit" className="shadow">Create Account</Button>
              <p className="text-center mt-3 mb-0">Already registered? <Link to="/login" className="text-primary">Login</Link></p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;