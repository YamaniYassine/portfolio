import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="bg-light py-5 section" style={{ minHeight: '100vh' }} id="skills">
      <Container>
        <h2 className="text-center mb-4">🧰 Skills</h2>
        <Row className="g-4 justify-content-center">
          <Col md={4}>
            <Card bg="secondary" text="white" className="text-center h-100">
              <Card.Body>
                <Card.Title>Languages</Card.Title>
                <div className="fs-2">
                  <FaHtml5 className="me-2" title="HTML5" />
                  <FaCss3Alt className="me-2" title="CSS3" />
                  <FaJs className="me-2" title="JavaScript" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="secondary" text="white" className="text-center h-100">
              <Card.Body>
                <Card.Title>Frameworks & Libraries</Card.Title>
                <div className="fs-2">
                  <FaReact className="me-2" title="React" />
                  <FaNodeJs className="me-2" title="Node.js" />
                  <SiExpress className="me-2" title="Express" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="secondary" text="white" className="text-center h-100">
              <Card.Body>
                <Card.Title>Tools & Platforms</Card.Title>
                <div className="fs-2">
                  <FaGitAlt className="me-2" title="Git" />
                  <FaDocker className="me-2" title="Docker" />
                  <SiMongodb className="me-2" title="MongoDB" />
                  <SiFirebase className="me-2" title="Firebase" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
