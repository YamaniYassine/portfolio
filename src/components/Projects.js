import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const projects = [
  {
    title: "StudentPath",
    description:
      "A web platform guiding international students through their educational journey in France 🇫🇷, covering visas, housing, enrollment, and academic milestones.",
    tech: ["React", "Node.js", "MongoDB", "Bootstrap", "Docker"],
    image: "https://via.placeholder.com/600x300?text=StudentPath",
    github: "https://github.com/YamaniYassine",
    demo: "#"
  },
  {
    title: "PDF Editor Web App",
    description:
      "An online PDF editing tool allowing users to annotate, merge, and compress PDFs with ease using JavaScript and canvas manipulation.",
    tech: ["JavaScript", "HTML5", "Bootstrap", "PDF.js"],
    image: "https://via.placeholder.com/600x300?text=PDF+Editor",
    github: "https://github.com/YamaniYassine",
    demo: "#"
  },
  {
    title: "StudentPath",
    description:
      "A web platform guiding international students through their educational journey in France 🇫🇷, covering visas, housing, enrollment, and academic milestones.",
    tech: ["React", "Node.js", "MongoDB", "Bootstrap", "Docker"],
    image: "https://via.placeholder.com/600x300?text=StudentPath",
    github: "https://github.com/YamaniYassine",
    demo: "#"
  },
];

const Projects = () => {
  return (
    <div className="bg-white py-5 section" style={{ minHeight: '100vh' }} id="projects">
      <Container>
        <h2 className="text-center mb-4">🛠️ Projects</h2>
        <Row className="justify-content-center">
          {projects.map((project, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} bg="secondary" className="me-1">{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="outline-primary" size="sm" href={project.github} target="_blank" className="me-2">GitHub</Button>
                  <Button variant="outline-success" size="sm" href={project.demo} target="_blank">Demo</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
