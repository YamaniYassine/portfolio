import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <div className="bg-white py-5 section" style={{ minHeight: '100vh' }} id="about">
      <Container>
        <h2 className="text-center mb-4 display-6 fw-bold">About Me</h2>
        <Row className="justify-content-center" style={{marginTop: '7%'}}>
          <Col md={8} style={{width: '100%'}}>
            <Card className="border-0">
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
    </div>
  );
};

export default About;
