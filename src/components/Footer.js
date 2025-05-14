import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-2" style={{ borderTop: '1px solid #6a6a6a' }} >
      <Container>
        <div className="d-flex flex-wrap justify-content-center gap-2 small">
          <p className="mb-0">© {new Date().getFullYear()} <strong>Yamani Yassine</strong> All rights reserved.</p>
          <p className="mb-0 text-white-muted">This website uses cookies to improve the user experience.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;