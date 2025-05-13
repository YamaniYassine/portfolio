import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-dark text-white py-5" id="contact">
      <Container>
        <h2 className="text-center mb-4">📫 Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <p className="fs-5">I'm open to job opportunities, collaborations, or just a friendly tech chat.</p>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="text-white">Your Name</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="bg-secondary text-white border-0 rounded"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="text-white">Your Email</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-secondary text-white border-0 rounded"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label className="text-white">Your Message</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message here..."
                    required
                    className="bg-secondary text-white border-0 rounded"
                    />
                </Form.Group>

                <div className="text-center">
                    <Button variant="primary" type="submit" className="px-4">
                    Send Message
                    </Button>
                </div>
            </Form>
            {/* <p className="fs-5">
              <FaEnvelope className="me-2" />
              <a href="mailto:yamani.yassine.dev@gmail.com" className="text-white">
                yamani.yassine.dev@gmail.com
              </a>
            </p> */}
            <div className="mt-3">
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
                href="https://www.linkedin.com/in/yamaniyassine"
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
