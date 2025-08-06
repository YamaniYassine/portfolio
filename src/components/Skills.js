import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
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
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? 'bg-dark-1 text-white' : 'bg-light text-dark'} position-relative py-5 section`} style={{ minHeight: '100vh' }} id="skills">
      <Container className="vh-100">
        
        {/* Title Row */}
        <Row
          className="d-flex align-items-center justify-content-center"
          style={{ height: '20%' }}
        >
          <Col xs="auto">
            <h2 className="text-center display-4 fw-bold m-0">Skills</h2>
          </Col>
        </Row>
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
      <svg
        className="position-absolute bottom-0 start-0 w-100"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        style={{ height: '100px', transform: 'scaleY(-1)' }}
      >
        <path
          fill={darkMode ? 'hsl(220, 17%, 18%)' : 'hsl(0, 0%, 100%)'}
          d="M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,144C672,128,768,96,864,80C960,64,1056,64,1152,85.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Skills;
