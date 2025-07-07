import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className="bg-dark-1 text-white py-3 section" id="contact">
      <Container>
        <h2 className="text-center mb-4 display-6 fw-bold">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <div className="mb-2">
            <Button
                variant="outline-light"
                href="https://github.com/YamaniYassine"
                target="_blank"
                className="me-3"
              >
                <FaGithub /> GitHub
              </Button>
              <Button
                variant="outline-light"
                href="mailto:yamani.yassine.dev@gmail.com"
                target="_blank"
                className="me-3"
              >
                <FaEnvelope /> Gmail
              </Button>
              <Button
                variant="outline-light"
                href="https://www.linkedin.com/in/yamani-yassine/"
                target="_blank"
              >
                <FaLinkedin /> LinkedIn
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
