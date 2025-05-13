import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div id="hero" className="">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
