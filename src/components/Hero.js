import React, { useContext } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaDownload} from 'react-icons/fa';
import { RiContactsLine } from "react-icons/ri";
import profilePic from '../assets/Portrait3.png';
import { ThemeContext } from '../contexts/ThemeContext';



const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${darkMode ? 'bg-dark-1 text-white' : 'bg-light text-dark'} text-center d-flex align-items-center justify-content-center section`}
      style={{ minHeight: '100vh' }}
      id="hero"
    >
      <Container>
        <Row className="justify-content-center align-items-center mt-4">
          <Col md={4} className="mb-4 mb-md-0">
            <Image
              src={profilePic}
              roundedCircle
              fluid
              alt="Yamani Yassine"
              style={{ width: '70%', height: '70%', objectFit: 'cover', backgroundColor: '#DEECF8' }}
            />
          </Col>
          
          <Col md={8}>
            <h1 className="display-4 fw-bold">Hi, I’m Yamani Yassine</h1>
            <p className="lead mb-4">
              <strong className="fw-bold">Software Engineer</strong> passionate about building modern and scalable web applications.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="outline-primary" size="lg" href="#contact">
              <RiContactsLine /> Contact Me
              </Button>
              <Button
                variant="outline-secondary"
                size="lg"
                href="/portfolio/YAMANI-YASSINE-CV-2025.pdf"
                download
              >
                Download CV <FaDownload className="ms-2" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
