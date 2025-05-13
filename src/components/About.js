import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <div className="bg-white py-5" id="about">
      <Container>
        <h2 className="text-center mb-4">👨‍💻 About Me</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Text>
                  Hello! I’m <strong>Yamani Yassine</strong>, a software engineer with a strong interest in building high-quality, user-focused web applications.
                  I specialize in full-stack development using modern technologies like <strong>React, Node.js, MongoDB, and Docker</strong>.
                  <br /><br />
                  I'm passionate about solving real-world problems, especially in education and accessibility. I’m currently working on a platform for international students to navigate their journey in France 🇫🇷 — from visa to diploma 🎓.
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
