import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <div className="logo-circle">S</div>
            <h1>Student</h1>
          </div>
          <div className="nav-links">
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certificates">Certificates</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;