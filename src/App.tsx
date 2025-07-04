import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
