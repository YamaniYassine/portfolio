import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';

const projects = [
  {
    title: "StudentPath",
    description:
      "A web platform guiding international students through their educational journey in France 🇫🇷.",
    tech: ["React", "Node.js", "MongoDB", "Bootstrap", "Docker"],
    image: "https://websitesetup.org/wp-content/uploads/2020/12/the-ocean-resort-december-2020.jpg",
    github: "https://github.com/YamaniYassine",
    demo: "#"
  },
  {
    title: "PDF Editor Web App",
    description:
      "An online PDF editing tool allowing users to annotate, merge, and compress PDFs with ease using TypeScript.",
    tech: ["TypeScript", "HTML5", "Bootstrap", "PDF.js"],
    image: "https://websitesetup.org/wp-content/uploads/2020/12/the-ocean-resort-december-2020.jpg",
    github: "https://github.com/YamaniYassine",
    demo: "#"
  },
];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? 'bg-dark-2 ' : 'bg-white text-dark'} py-5 section`} style={{ minHeight: '100vh' }} id="projects">
      <Container>
        <h2 className="text-center mb-4 display-5 fw-bold">Projects</h2>
        <Row className="justify-content-center">
          {projects.map((project, idx) => (
            <Col md={5} lg={5} className="mb-4 d-flex" key={idx}>
              <Card className={`${darkMode ? 'dark-mode ' : 'light-mode text-dark'} h-100 shadow-sm project-card`}>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src={project.image} style={{ cursor: 'pointer', borderRadiustop: 5 }} />
                </a>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3 text-center">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} bg={darkMode ? "light" : "dark"} className={`${darkMode ? 'text-dark' : ''} me-1 mb-1`}>{tech}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto text-center">
                    <Button  variant={darkMode ? "outline-light" : "outline-dark"} size="sm" href={project.github} target="_blank" className="me-2">
                      <FaGithub className="me-1" /> GitHub
                    </Button>
                    <Button variant="outline-success" size="sm" href={project.demo} target="_blank">
                      <FaExternalLinkAlt className="me-1" /> Demo
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
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Projects;
