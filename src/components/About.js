import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ThemeContext } from '../contexts/ThemeContext';

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${darkMode ? 'bg-dark-2' : 'bg-white text-dark'} position-relative section`}
      style={{ minHeight: '100vh' }}
      id="about"
    >
      <Container fluid className="vh-100">
        <Row
          className="vh-20 d-flex align-items-center justify-content-center"
          style={{ height: '20%' }}
        >
          <Col xs="auto">
            <h2 className="text-center display-4 fw-bold m-0">About Me</h2>
          </Col>
        </Row>

        <Row
          className="vh-60 d-flex align-items-center justify-content-center"
          style={{ height: '60%' }}
        >
          <Col md={8}>
          <Card className={`${darkMode ? 'bg-dark-1 text-white' : 'light-mode'} border-0`}>
            <Card.Body>
              <Card.Text>
                Hello! I’m <strong>Yamani Yassine</strong>, a software engineer passionate about designing and delivering high-quality, user-focused web applications.
              </Card.Text>
              <Card.Text>
                I specialize in <strong>full-stack development</strong> across JavaScript and PhP ecosystems, with hands-on experience in React, Vue, Node.js, FastAPI, and PHP frameworks (Laravel, Symfony). 
                My goal is to build <strong>scalable, performant, and secure solutions</strong> that solve real-world problems and deliver measurable value.
              </Card.Text>
              <Card.Text>
                I’ve led projects from conception to production — such as <strong>TheTipTop</strong>, a full MERN platform with CI/CD pipelines and monitoring, and a <strong>PDF Editor Web App</strong>, enabling real-time editing, merging, and compression of PDFs using FastAPI and Next.js.
              </Card.Text>
              <Card.Text>
                Beyond coding, I value <strong>clean communication, teamwork, and Agile practices (Scrum)</strong>. 
                I integrate <strong>testing (Jest, TDD)</strong>, monitoring (<strong>Prometheus, Grafana</strong>) and code quality tools (<strong>SonarQube</strong>) into my workflows to ensure reliability.
              </Card.Text>
              <hr className="my-4" />
              <Card.Text>
                <strong>Tech Stack:</strong> JavaScript, TypeScript, Python, React, Vue, Node.js, FastAPI, PHP, Docker, Jenkins, Git.
              </Card.Text>
              <Card.Text>
                <strong>Currently exploring:</strong> Cloud deployment, system design, and application security.
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
