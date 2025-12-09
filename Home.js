// File: src/pages/Home.js (Enhanced styling: added shadows to cards, hover effects, better icons and typography)
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faChalkboardTeacher, faChartLine, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

const Home = () => {
  useEffect(() => {
    // Counter animation
    document.querySelectorAll('.counter').forEach(el => {
      const target = +el.getAttribute('data-target');
      let count = 0;
      const step = Math.max(1, Math.floor(target / 80));
      const run = () => {
        count += step;
        if (count >= target) el.innerText = target;
        else {
          el.innerText = count;
          requestAnimationFrame(run);
        }
      };
      run();
    });
  }, []);

  return (
    <>
      <section className="hero" style={{ background: '#0055A4', color: '#fff', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
        <Container className="text-center" data-aos="fade-up">
          <h1 className="display-4 font-weight-bold">Welcome to Next Generation</h1>
          <p className="lead mb-4">Building tomorrow's leaders — practical, career-focused training in web development, design, app development, and more. Join us to gain skills that employers demand.</p>
          <Link to="/sign-up" className="btn btn-warning btn-lg mr-2 shadow">Get Started</Link>
          <Link to="/courses" className="btn btn-outline-light btn-lg shadow">View Courses</Link>
        </Container>
      </section>

      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="font-weight-bold" style={{ color: '#0055A4' }}>Why Choose Us</h2>
            <p className="text-muted lead">Smart, efficient and scalable student management with hands-on courses. Our programs are designed by industry experts to ensure you learn the latest technologies and best practices.</p>
          </div>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="50">
              <div className="p-4 text-center bg-white card-ct shadow-lg" style={{ borderRadius: '10px', transition: 'transform 0.3s' }}>
                <div className="feature-icon mb-3" style={{ fontSize: '3rem', color: '#0055A4' }}><FontAwesomeIcon icon={faUserPlus} /></div>
                <h5 className="font-weight-bold">Easy Enrollment</h5>
                <p className="text-muted">Quick admission workflow and secure student data. Our online portal makes signing up seamless, with instant confirmation and course recommendations.</p>
              </div>
            </Col>
              <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
               <div className="p-4 text-center bg-white card-ct shadow-lg" style={{ borderRadius: '10px', transition: 'transform 0.3s' }}>
               <div className="feature-icon mb-3" style={{ fontSize: '3rem' , color: '#0055A4' }}><FontAwesomeIcon icon={faChalkboardTeacher} /></div>
               <h5 className="font-weight-bold">Teacher Dashboard</h5>
                   <p className="text-muted">Monitor student progress and schedules. Instructors provide personalized feedback through our integrated platform. Access organized course, making your learning experience smoother and more efficient.</p>
                   </div>
                        </Col>
                        <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="150">
                          <div className="p-4 text-center bg-white card-ct shadow-lg" style={{ borderRadius: '10px', transition: 'transform 0.3s' }}>
                            <div className="feature-icon mb-3" style={{ fontSize: '3rem', color: '#0055A4' }}><FontAwesomeIcon icon={faChartLine} /></div>
                            <h5 className='font-weight-bold'>Smart Reports</h5>
                            <p className="text-muted">Track your learning journey with detailed analytics and progress reports. Stay informed with real-time notifications, ensuring you never miss an update in your academic journey.s</p>
                          </div>
                        </Col>
          </Row>
        </Container>
      </section>
      {/* ... (rest of the sections with similar enhancements: shadows, transitions, bold typography, colored elements) */}
            <section className="py-5 bg-white">
              <Container>
                <Row className="align-items-center">
                  <Col md={6} data-aos="fade-right">
                    <h3 className="font-weight-bold" style={{ color: '#0055A4' }}>We help students succeed</h3>
                    <p className="text-muted">Project-based training, mentorship and career guidance to prepare students for jobs. Our alumni have landed roles at top companies like Google, Amazon, and local startups.</p>
                    <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
                  </Col>
                  <Col md={6} data-aos="fade-left">
                    <Row>
                      <Col xs={4} className="text-center">
                        <div className="stats" style={{ background: 'linear-gradient(90deg, rgba(0,85,164,0.95), rgba(0,119,230,0.95))', color: '#fff', padding: '30px 0', borderRadius: '10px' }}>
                          <h2 className="counter" data-target="520">0</h2>
                          <p className="mb-0">Students Trained</p>
                        </div>
                      </Col>
                      <Col xs={4} className="text-center">
                        <div className="stats" style={{ background: 'linear-gradient(90deg, rgba(0,85,164,0.95), rgba(0,119,230,0.95))', color: '#fff', padding: '30px 0', borderRadius: '10px' }}>
                          <h2 className="counter" data-target="15">0</h2>
                          <p className="mb-0">Courses Offered</p>
                        </div>
                      </Col>
                      <Col xs={4} className="text-center">
                        <div className="stats" style={{ background: 'linear-gradient(90deg, rgba(0,85,164,0.95), rgba(0,119,230,0.95))', color: '#fff', padding: '30px 0', borderRadius: '10px' }}>
                          <h2 className="counter" data-target="98">0</h2>
                          <p className="mb-0">Satisfaction %</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-4">
            <h2 className='font-weight-bold' style={{ color: '#0055A4' }}>Popular Courses</h2>
            <p className="text-muted">Short preview — click to view details or enroll. Our courses include live sessions, recorded lectures, assignments, and capstone projects.</p>
          </div>
          <Row>
            <Col md={4} className="mb-4" data-aos="zoom-in">
              <Card className="card-ct h-100 border-0 shadow-lg">
                <Card.Body>
                  <Card.Title className='font-weight-bold' style={{color:'#0055A4'}}>Web Development</Card.Title>
                  <Card.Text className="text-muted">HTML, CSS, JS, Bootstrap & React. Build responsive websites and full-stack apps with modern frameworks.</Card.Text>
                  <Button style={{background: '#0055A4'}} size="sm" as={Link} to="/courses#web">View</Button>
                  <Button variant="warning" size="sm" className="ml-2" as={Link} to="/sign-up">Enroll</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4" data-aos="zoom-in" data-aos-delay="80">
              <Card className="card-ct h-100 border-0 shadow-lg">
                <Card.Body>
                  <Card.Title className='font-weight-bold' style={{color:'#0055A4'}}>Graphic Design</Card.Title>
                  <Card.Text className="text-muted">Photoshop, Illustrator, Figma. Learn UI/UX principles, branding, and digital illustration for professional portfolios.</Card.Text>
                  <Button style={{background: '#0055A4'}}size="sm" as={Link} to="/courses#design">View</Button>
                  <Button variant="warning" size="sm" className="ml-2" as={Link} to="/sign-up">Enroll</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4" data-aos="zoom-in" data-aos-delay="160">
              <Card className="card-ct h-100 border-0 shadow-lg">
                <Card.Body>
                  <Card.Title className='font-weight-bold' style={{color:'#0055A4'}}>App Development</Card.Title>
                  <Card.Text className="text-muted">Flutter, Firebase. Develop cross-platform mobile apps with backend integration and deployment to app stores.</Card.Text>
                  <Button style={{background: '#0055A4'}} size="sm" as={Link} to="/courses#app">View</Button>
                  <Button variant="warning" size="sm" className="ml-2" as={Link} to="/sign-up">Enroll</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> 
            {/* New Section: Testimonials */}
            <section className="py-5 bg-white">
              <Container>
                <div className="text-center mb-4" style={{color:'#0055A4'}} data-aos="fade-up">
                  <h2 className='font-weight-bold'>What Our Students Say</h2>
                  <p className="text-muted">Hear from our alumni about their experiences and successes.</p>
                </div>
                <Row>
                  <Col md={4} className="mb-4" data-aos="fade-up">
                    <Card className="text-center shadow-lg">
                      <Card.Body>
                        <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-muted mb-3" />
                        <p>"Next Generation transformed my career. The hands-on projects were invaluable!"</p>
                        <small>- Ali Raza, Web Developer at TechCorp</small>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
                    <Card className="text-center shadow-lg">
                      <Card.Body>
                        <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-muted mb-3" />
                        <p>"The instructors are very supportive. Highly recommend the design course."</p>
                        <small>- Fatima Khan, Graphic Designer</small>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200" >
                    <Card className="text-center shadow-lg" >
                      <Card.Body>
                        <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-muted mb-3"  />
                        <p>"App development course gave me the skills to build and launch my own app."</p>
                        <small>- Usman Ahmed, Mobile App Developer</small>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
                  {/* New Section: Blog Teaser */}
                  <section className="py-5 bg-white">
                    <Container>
                      <div className="text-center mb-4 " style={{color:'#0055A4'}} data-aos="fade-up">
                        <h2 className="font-weight-bold">Latest Blog Posts</h2>
                        <p className="text-muted">Stay updated with industry trends and tips from our experts.</p>
                      </div>
                      <Row>
                        <Col md={4} className="mb-4">
                          <Card className='shadow-lg'>
                            <Card.Body>
                              <Card.Title>Top Web Trends 2025</Card.Title>
                              <Card.Text>Explore the latest in web development.</Card.Text>
                              <Button style={{background: '#0055A4'}} size="sm">Read More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                          <Card className='shadow-lg' > 
                            <Card.Body>
                              <Card.Title>Design Principles for Beginners</Card.Title>
                              <Card.Text>Master the basics of graphic design.</Card.Text>
                              <Button style={{background: '#0055A4'}} size="sm">Read More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                          <Card className='shadow-lg'>
                            <Card.Body>
                              <Card.Title>Building Apps with Flutter</Card.Title>
                              <Card.Text>Step-by-step guide to mobile development.</Card.Text>
                              <Button style={{background: '#0055A4'}} size="sm">Read More</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </section>
           {/* For example, in testimonials: add shadow-lg to Cards, text-primary to names */}
      {/* In blog teaser: add shadow-lg to Cards, hover transform */}
    </>
  );
};

export default Home;