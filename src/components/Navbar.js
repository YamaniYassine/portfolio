import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" className="shadow-sm" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#hero">Yamani Yassine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-end">
            <Nav.Link href="#about" className="">About</Nav.Link>
            <Nav.Link href="#projects" className="">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
