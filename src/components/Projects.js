import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import pdfhome from '../assets/PdfHome.png';
import devopshome from '../assets/DevOps-Home.png';

const projects = [
  {
    title: "Jeu Concours",
    description:
      "A contest web platform for the tea company 'TheTipTio', featuring three user roles with separate dashboards. Includes a DevOps pipeline that automates the workflow using Docker and Jenkins.",
    tech: ["React", "Bootstrap", "Node.js", "MongoDB", "Docker", "Jenkins"],
    image: devopshome,
    github: "https://github.com/YamaniYassine/DevOps",
    demo: "#"
  },
  {
    title: "PDF Editor",
    description:
      "An online PDF editing tool allowing users to annotate, merge, delete pages, and compress PDFs with ease using TypeScript.",
    tech: ["Next.js", "TailwindCSS", "Python", "PyMuPDF", "FastAPI"],
    image: pdfhome,
    github: "https://github.com/YamaniYassine/PDF-editor-web-app",
    demo: "#"
  },
];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${darkMode ? 'bg-dark-2' : 'bg-white'} py-5 section`}
      style={{ minHeight: '100vh' }}
      id="projects"
    >
      <Container  className="vh-100">
        <Row
          className="vh-10 d-flex align-items-center justify-content-center"
          style={{ height: '10%' }}
        >
          <Col xs="auto">
            <h2 className="text-center display-4 fw-bold m-0">Projects</h2>
          </Col>
        </Row>
        <Row xs={1} sm={1} md={2} lg={2} className="g-5 justify-content-center" style={{marginTop: '1%'}}>
          {projects.map((project, idx) => (
            <Col className="d-flex" key={idx}>
              <Card
                className={`project-card ${
                  darkMode ? 'bg-dark-1 text-light' : 'light-mode-card'
                } shadow`}
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    className="project-img"
                    alt={project.title}
                  />
                </a>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-center mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-center">{project.description}</Card.Text>
                  <div className="text-center mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        bg={darkMode ? 'light' : 'dark'}
                        className={`tech-badge ${darkMode ? 'text-dark' : ''}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto text-center">
                    <Button
                      variant={darkMode ? 'outline-light' : 'outline-dark'}
                      size="sm"
                      href={project.github}
                      target="_blank"
                      className="me-2"
                    >
                      <FaGithub className="me-1" /> GitHub
                    </Button>
                    <Button
                      variant="outline-success"
                      size="sm"
                      href={project.demo}
                      target="_blank"
                    >
                      <FaExternalLinkAlt className="me-1" /> Documentation
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .project-card {
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0px 4px 4px #00000030, 0px 12px 12px #00000015;}
        }

        .project-img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .tech-badge {
          margin: 0 5px 5px 0;
        }
      `}</style>
    </div>
  );
};

export default Projects;
