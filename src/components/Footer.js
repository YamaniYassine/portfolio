import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const Footer = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
    setShowConsent(false);
  };

  return (
    <footer className="bg-dark text-white text-center py-2" style={{ borderTop: '1px solid #6a6a6a' }}>
      <Container>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 small">
          <p className="mb-0">© {new Date().getFullYear()} <strong>Yamani Yassine</strong> All rights reserved.</p>
          
          {showConsent && (
            <div className="d-flex flex-wrap align-items-center gap-2 ms-3">
              <p className="mb-0 text-white-muted">This website uses cookies to improve the user experience.</p>
              <Button variant="outline-light" size="sm" onClick={() => handleConsent(true)}>Accept</Button>
              <Button variant="outline-light" size="sm" onClick={() => handleConsent(false)}>Decline</Button>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
