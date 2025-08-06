import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import { ThemeContext } from '../contexts/ThemeContext';
import CustomToggleSwitch from './Darkmodeswitch/CustomToggleSwitch'

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar  variant={darkMode ? "dark" : "light"} className={`${darkMode ? 'bg-dark-2' : 'bg-white'} shadow-sm`} expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#hero">Yamani Yassine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Scrollspy
            items={['about', 'skills', 'projects', 'contact']}
            currentClassName="active"
            className="navbar-nav text-end"
            offset={-56}
          >
            <Nav.Link href="#about">About</Nav.Link>  
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Scrollspy>
        </Navbar.Collapse>
        <CustomToggleSwitch darkMode={darkMode} toggleTheme={toggleTheme} />
      </Container>
    </Navbar>
  );
};

export default Header;
