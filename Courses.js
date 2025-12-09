// File: src/pages/Courses.js (Enhanced styling: added hover effects to cards, shadows, better button styles)
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [filter, setFilter] = useState('all');

  const courses = [
    { cat: 'web', title: 'Web Development', desc: 'HTML, CSS, JS, Bootstrap & React — 3 months. Learn to build dynamic websites from scratch, including frontend and backend integration.', img: 'images/course-web.jpg' },
    { cat: 'design', title: 'Graphic Design', desc: 'Photoshop, Illustrator, Figma — 2.5 months. Master visual communication, typography, and digital tools for professional designs.', img: 'images/course-design.jpg' },
    { cat: 'app', title: 'App Development', desc: 'Flutter, Firebase — 4 months. Create native-like mobile apps for iOS and Android with state management and cloud services.', img: 'images/course-app.jpg' },
    // Added more courses
    { cat: 'web', title: 'Advanced React', desc: 'Hooks, Redux, Next.js — 2 months. Dive deep into modern React patterns and server-side rendering.', img: 'images/course-react.jpg' },
    { cat: 'design', title: 'UI/UX Design', desc: 'Figma, Adobe XD — 3 months. Focus on user research, wireframing, and prototyping for intuitive interfaces.', img: 'images/course-ux.jpg' },
    { cat: 'app', title: 'iOS Development', desc: 'Swift, Xcode — 4 months. Build apps for Apple devices with ARKit and Core ML integration.', img: 'images/course-ios.jpg' },
    { cat: 'marketing', title: 'Digital Marketing', desc: 'SEO, Social Media, Ads — 2 months. Strategies to grow online presence and drive traffic.', img: 'images/course-marketing.jpg' },
  ];


  const filteredCourses = filter === 'all' ? courses : courses.filter(c => c.cat === filter);

  return (
    <>
      <section className="hero" style={{ background: 'linear-gradient(rgba(0,85,164,.85), rgba(0,85,164,.85)), url("images/photo-1571260899304-425eee4c7efc.jpeg") center/cover no-repeat', color: '#fff', padding: '60px ', textAlign: 'center' }}>
        <Container>
          <h1 className="display-4 font-weight-bold">Our Courses</h1>
          <p className="lead">Choose a skill-oriented program and start building projects. All courses include certifications, lifetime access to materials, and job placement assistance.</p>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h4 className="mb-0 font-weight-bold" style={{ color: '#0055A4' }}>All Courses</h4>
              <small className="text-muted">Filter by category. We offer beginner to advanced levels.</small>
            </div>
            <div className="filter-btns">
              <Button variant="outline-primary" size="sm" className="mr-2 shadow-sm" onClick={() => setFilter('all')}>All</Button>
               <Button variant="outline-primary" size="sm" className="mr-2 shadow-sm" onClick={() => setFilter('web')}>Web</Button>
               <Button variant="outline-primary" size="sm" className="mr-2 shadow-sm" onClick={() => setFilter('design')}>Design</Button>
               <Button variant="outline-primary" size="sm" className="mr-2 shadow-sm" onClick={() => setFilter('app')}>App</Button>
               <Button variant="outline-primary" size="sm" className="shadow-sm" onClick={() => setFilter('marketing')}>Marketing</Button>
            </div>
          </div>

          <Row id="coursesList">
            {filteredCourses.map((course, idx) => (
              <Col md={4} className="mb-4 course-item" key={idx} data-aos="fade-up" data-aos-delay={idx * 80}>
                <Card className="course-card h-100 shadow-lg border-0" style={{ transition: 'transform 0.3s, box-shadow 0.3s', borderRadius: '10px' }}>
                  <Card.Body className="p-4">
                    <Card.Title className="font-weight-bold" style={{ color: '#0055A4' }}>{course.title}</Card.Title>
                    <Card.Text className="text-muted">{course.desc}</Card.Text>
                    <Link to="/sign-up" className="btn btn-warning btn-sm shadow">Enroll Now</Link>
                    <Button variant="primary" size="sm" className="ml-2 shadow">Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* New: Syllabus Preview */}
          <h4 className="mt-5 font-weight-bold" style={{ color: '#0055A4' }}>Sample Syllabus for Web Development</h4>
          <ul className="list-group shadow-sm" style={{ borderRadius: '8px' }}>
            <li className="list-group-item">Week 1-2: HTML & CSS Fundamentals</li>
            <li className="list-group-item">Week 3-4: JavaScript Basics and DOM Manipulation</li>
            <li className="list-group-item">Week 5-6: Bootstrap and Responsive Design</li>
            <li className="list-group-item">Week 7-9: React Components, State, and Props</li>
            <li className="list-group-item">Week 10-12: APIs, Routing, and Deployment</li>
            {/* Similar for other items: add border-0 to remove borders */}
          </ul>
          <p className="text-muted mt-3">Full syllabi available upon enrollment.</p>
        </Container>
      </section>
    </>
  );
};

export default Courses;