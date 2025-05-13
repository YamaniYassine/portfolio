import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

const Header = () => {
  return (
    <Navbar bg="light" className="shadow-sm" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#hero">Yamani Yassine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Scrollspy
            items={['about', 'skills', 'projects', 'contact']}
            currentClassName="active"
            className="navbar-nav ms-auto text-end"
            offset={-80}
          >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Scrollspy>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
