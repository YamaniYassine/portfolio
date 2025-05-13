import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold">Hi, I’m Yamani Yassine</h1>
            <p className="lead mb-4">Software Engineer passionate about building modern and scalable web applications.</p>
            <Button variant="primary" size="lg" href="#projects">
              🚀 View My Projects
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
