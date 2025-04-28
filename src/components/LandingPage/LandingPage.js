import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import ProfileImage from '../../assets/image.png'; 


const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  
  // Words to animate through
  const animatedWords = ["Creative", "Developer", "Innovator", "Designer", "Problem Solver"];
  
  useEffect(() => {
    // Add animation classes when component mounts
    setIsVisible(true);
    
    // Word cycling animation
    const wordInterval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2000);
    
    // Control header visibility based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.querySelector('header');
      
      if (header) {
        if (scrollPosition > window.innerHeight * 0.7) {
          header.classList.add('visible');
        } else {
          header.classList.remove('visible');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set correct state on load
    handleScroll();
    
    return () => {
      clearInterval(wordInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="landing-page">
      <div className="landing-background">
        {/* Animated doodle elements */}
        <div className="doodle-element circle-doodle d1"></div>
        <div className="doodle-element squiggle-doodle d2"></div>
        <div className="doodle-element star-doodle d3"></div>
        <div className="doodle-element circle-doodle d4"></div>
        <div className="doodle-element zigzag-doodle d5"></div>
        <div className="doodle-element heart-doodle d6"></div>
        <div className="doodle-element star-doodle d7"></div>
        <div className="doodle-element squiggle-doodle d8"></div>
      </div>
      
      <div className="container">
        <div className={`landing-content ${isVisible ? 'visible' : ''}`}>
          <div className="landing-text">
            <h1 className="landing-title">
              Hello, I'm<span className="highlight"> Hans Raj</span>
            </h1>
            
            <div className="animated-subtitle">
              <span className="subtitle-prefix">I'm a </span>
              <span className="changing-word">
                {animatedWords.map((word, index) => (
                  <span 
                    key={index} 
                    className={`word ${index === activeWordIndex ? 'active' : ''}`}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </div>
            
            <p className="landing-description">
              Crafting digital experiences with code and creativity.
              Building meaningful projects that solve real-world problems.
            </p>
            
            <div className="landing-buttons">
              <a href="#projects" className="primary-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                See My Work
              </a>
              <a href="#contact" className="secondary-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="landing-image">
            <div className="hero-frame">
              <div className="hero-content">
                <img src={ProfileImage } alt="Student" className="hero-img" />
                
                <div className="floating-badge badge1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  <span>Web Dev</span>
                </div>
                
                <div className="floating-badge badge2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                  <span>ML/AI</span>
                </div>
                
                <div className="floating-badge badge3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <span>UI/UX</span>
                </div>
              </div>
              
              <div className="hero-doodle d9"></div>
              <div className="hero-doodle d10"></div>
              <div className="hero-doodle d11"></div>
              <div className="hero-doodle d12"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll Down</div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;