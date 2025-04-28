import React, { useEffect, useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect when the About section enters viewport
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;
        
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-content">
            <div className="corner-dot top-left"></div>
            <div className="corner-dot top-right"></div>
            <div className="corner-dot bottom-left"></div>
            <div className="corner-dot bottom-right"></div>
            
            <p>Hello! I'm a Computer Science student passionate about solving real-world problems through technology. I specialize in web development, machine learning, and creative coding.</p>
            
            <p>Currently pursuing my Bachelor's degree, I'm constantly exploring the intersection of technology and human experience. When not coding, you can find me sketching, reading, and gaming.</p>
            
            <p>I believe in creating technology that makes a positive impact on society and am looking for opportunities to collaborate on meaningful projects.</p>
            
            <div className="social-links">
              <a href="#" className="social-icon github">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#" className="social-icon linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-icon email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            
            <a href="#" className="cv-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '5px', verticalAlign: 'middle' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </a>
          </div>
          
          <div className="about-image">
            <div className="profile-wrapper">
              <div className="profile-frame">
                <div className="corner-decoration top-left-corner"></div>
                <div className="corner-decoration top-right-corner"></div>
                <div className="corner-decoration bottom-left-corner"></div>
                <div className="corner-decoration bottom-right-corner"></div>
                <div className="photo-tape"></div>
                <div className="photo-tape2"></div>
                <img src="/api/placeholder/400/400" alt="Profile" className="profile-image" />
              </div>
              
              <div className="doodle-circles">
                <div className="doodle-circle circle1"></div>
                <div className="doodle-circle circle2"></div>
                <div className="doodle-circle circle3"></div>
              </div>
              
              <div className="decoration-elements">
                <div className="floating-shape shape1"></div>
                <div className="floating-shape shape2"></div>
                <div className="floating-shape shape3"></div>
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
                <div className="dot dot4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating doodles */}
      <div className="doodle circle-doodle" style={{ top: '10%', left: '5%' }}></div>
      <div className="doodle squiggle-doodle" style={{ bottom: '20%', right: '10%' }}></div>
      <div className="doodle star-doodle" style={{ top: '30%', right: '20%' }}></div>
    </section>
  );
};

export default AboutMe;