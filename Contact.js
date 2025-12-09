// File: src/pages/Contact.js (Enhanced styling: added shadows to cards, better form inputs, icons with colors)
import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.stopPropagation();
      e.target.classList.add('was-validated');
    } else {
      alert('Message sent (demo).');
      e.target.reset();
      e.target.classList.remove('was-validated');
    }
  };

  return (
    <>
      <section className="hero" style={{ background: 'linear-gradient(rgba(0,85,164,.85), rgba(0,85,164,.85)), url("images/photo-1571260899304-425eee4c7efc.jpeg") center/cover no-repeat', color: '#fff', padding: '60px 0', textAlign: 'center' }}>
        <Container>
          <h1 className="display-4 font-weight-bold">Contact Us</h1>
          <p className="lead">Have questions? We're here to help. Reach out for course inquiries, partnerships, or general feedback.</p>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={7} className="mb-4" data-aos="fade-up">
              <div className="contact-card shadow-lg" style={{ borderRadius: '10px', boxShadow: '0 6px 20px rgba(0,0,0,.06)', background: '#fff', padding: '30px' }}>
                <h5 className="mb-4" style={{ color: '#0055A4' }}>Send a Message</h5>
                <Form id="contactForm" noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" id="cname" required className="border rounded" />
                        <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" id="cemail" required className="border rounded" />
                        <Form.Control.Feedback type="invalid">Enter a valid email.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" id="csub" required className="border rounded" />
                    <Form.Control.Feedback type="invalid">Please provide a subject.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} id="cmsg" required className="border rounded" />
                    <Form.Control.Feedback type="invalid">Write your message.</Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="shadow">Send Message</Button>
                </Form>
              </div>
            </Col>

            <Col md={5} data-aos="fade-left">
              <Card className="contact-card mb-4 shadow-lg" style={{ borderRadius: '10px' }}>
                <Card.Body className="p-4">
                  <h6 className="mb-3" style={{ color: '#0055A4' }}>Contact Info</h6>
                  <p className="mb-1"><strong>Email:</strong> info@nextgeneration.edu.pk</p>
                  <p className="mb-1"><strong>Phone:</strong> +92 300 1234567</p>
                  <p className="mb-1"><strong>Address:</strong> 123 Main Road, Lahore, Pakistan</p>
                  {/* Added: Opening Hours */}
                  <h6 className="mt-4 mb-3" style={{ color: '#0055A4' }}>Opening Hours</h6>
                  <p className="text-muted">Mon-Fri: 9 AM - 6 PM<br />Sat: 10 AM - 4 PM<br />Sun: Closed</p>
                  {/* Added: Social Links */}
                  <h6 className="mt-4 mb-3" style={{ color: '#0055A4' }}>Follow Us</h6>
                  <a href="#" className="mr-3 text-primary"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                  <a href="#" className="mr-3 text-info"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                  <a href="#" className="text-danger"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                </Card.Body>
              </Card>

              <div className="contact-card shadow-lg" style={{ borderRadius: '10px', padding: '20px' }}>
                <h6 className="mb-3" style={{ color: '#0055A4' }}>Our Location</h6>
                <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '6px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                  <iframe src="https://maps.google.com/maps?q=lahore&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen title="map"></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;