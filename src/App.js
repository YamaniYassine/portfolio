import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Navbar';
import Footer from './components/Footer';
import Skills from './components/Skills';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <ThemeProvider>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </ThemeProvider>
    </>
  );
}

export default App;
