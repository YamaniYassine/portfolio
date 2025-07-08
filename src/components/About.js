import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ThemeContext } from '../contexts/ThemeContext';


const About = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? 'bg-dark-2 ' : 'bg-white text-dark'} position-relative py-5 d-flex section`} style={{ minHeight: '100vh' }} id="about">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold">About Me</h2>
        <Row className="justify-content-center" style={{marginTop: '7%'}}>
          <Col md={8} style={{width: '100%'}}>
            <Card className={`${darkMode ? 'bg-dark-1 text-white' : 'light-mode'} border-0 `}>
              <Card.Body>
                <Card.Text>
                  Hello! I’m <strong>Yamani Yassine</strong>, a software engineer passionate about building high-quality, user-focused web applications.
                </Card.Text>
                <Card.Text>
                  I specialize in full-stack development using modern technologies like <strong>React, Node.js, MongoDB, and Docker</strong>. My goal is to build scalable, performant solutions that solve real-world problems.
                </Card.Text>
                <Card.Text>
                  I’m currently working on a platform to support international students navigating their journey in France 🇫🇷 — from visa to diploma 🎓.
                </Card.Text>
                <Card.Text>
                  I also value clean communication, teamwork, and lifelong learning.
                </Card.Text>
                <hr className='my-5'/>
                <Card.Text>
                  <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Docker, Git, Bootstrap
                </Card.Text>
                <Card.Text>
                  <strong>Currently exploring:</strong> TypeScript, system design, and cloud deployment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <svg
        className="position-absolute bottom-0 start-0 w-100"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        style={{ height: '100px', transform: 'scaleY(-1)' }}
      >
        <path
          fill={darkMode ? 'hsl(220, 13%, 10%)' : 'hsl(210, 17%, 98%)'}
          d="M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,144C672,128,768,96,864,80C960,64,1056,64,1152,85.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default About;
