import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Certificates from './components/Certificates/Certificates';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;