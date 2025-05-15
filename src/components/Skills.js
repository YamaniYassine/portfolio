import React from 'react';
import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaGitAlt, FaDocker, FaVuejs,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiMysql, SiTypescript, SiTailwindcss, SiBootstrap, SiSymfony,
  SiJenkins, SiJest, SiSonarqube, SiFigma
} from 'react-icons/si';

const renderIcon = (IconComponent, name) => (
  <OverlayTrigger placement="bottom" overlay={<Tooltip>{name}</Tooltip>}>
    <span className ="me-3 fs-2 icon-hover-scale"><IconComponent /></span>
  </OverlayTrigger>
);

const Skills = () => {
  return (
    <div className="bg-light py-5 section" style={{ minHeight: '100vh' }} id="skills">
      <Container>
        <h2 className="text-center mb-4 display-5 fw-bold">Skills</h2>
        <Row className="g-4 justify-content-center" style={{marginTop: '7%'}}>
          <Col md={6} lg={4}>
            <Card bg="secondary" text="white" className="text-center h-100">
              <Card.Body>
                <Card.Title>Languages</Card.Title>
                <div className="d-flex justify-content-center flex-wrap">
                  {renderIcon(FaJs, "JavaScript")}
                  {renderIcon(SiTypescript, "TypeScript")}
                  {renderIcon(FaPhp, "PHP")}
                  {renderIcon(FaHtml5, "HTML5")}
                  {renderIcon(FaCss3Alt, "CSS3")}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card bg="secondary" text="white" className="text-center h-100">
              <Card.Body>
                <Card.Title>Frontend</Card.Title>
                <div className="d-flex justify-content-center flex-wrap">
                  {renderIcon(FaReact, "React")}
                  {renderIcon(FaVuejs, "Vue")}
                  {renderIcon(SiTailwindcss, "Tailwind CSS")}
                  {renderIcon(SiBootstrap, "Bootstrap")}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card bg="secondary" text="white" className="text-center h-100">
              <Card.Body>
                <Card.Title>Backend</Card.Title>
                <div className="d-flex justify-content-center flex-wrap">
                  {renderIcon(FaNodeJs, "Node.js")}
                  {renderIcon(SiExpress, "Express.js")}
                  {renderIcon(SiSymfony, "Symfony")}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card bg="secondary" text="white" className="text-center h-100">
              <Card.Body>
                <Card.Title>Databases</Card.Title>
                <div className="d-flex justify-content-center flex-wrap">
                  {renderIcon(SiMongodb, "MongoDB")}
                  {renderIcon(SiMysql, "MySQL")}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card bg="secondary" text="white" className="text-center h-100">
              <Card.Body>
                <Card.Title>DevOps & Testing</Card.Title>
                <div className="d-flex justify-content-center flex-wrap">
                  {renderIcon(FaGitAlt, "Git")}
                  {renderIcon(FaDocker, "Docker")}
                  {renderIcon(SiJenkins, "Jenkins")}
                  {renderIcon(SiJest, "Jest")}
                  {renderIcon(SiSonarqube, "SonarQube")}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card bg="secondary" text="white" className="text-center h-100">
              <Card.Body>
                <Card.Title>Design</Card.Title>
                <div className="d-flex justify-content-center flex-wrap">
                  {renderIcon(SiFigma, "Figma")}
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
