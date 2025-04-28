import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Make header visible while menu is open, regardless of scroll position
    if (!menuOpen) {
      setHeaderVisible(true);
    }
    // Prevent body scrolling when menu is open
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
    // Check current scroll position to determine header visibility
    if (window.scrollY < window.innerHeight * 0.7) {
      setHeaderVisible(false);
    }
  };

  useEffect(() => {
    // Control header visibility based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > window.innerHeight * 0.7) {
        setHeaderVisible(true);
      } else if (!menuOpen) { // Keep header visible if menu is open
        setHeaderVisible(false);
      }
    };
    
    // Smooth scroll functionality for navigation links
    const handleNavClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Close menu before scrolling on mobile
          closeMenu();
          
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
    };

    // Add click handlers to all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });
    
    // Close menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        closeMenu();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleScroll();

    return () => {
      // Clean up event listeners
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <header className={`${menuOpen ? 'menu-open' : ''} ${headerVisible ? 'visible' : ''}`}>
      <div className="container">
        <nav>
          <div className="logo">
            <div className="logo-circle">H</div>
            <h1>Hans Raj</h1>
          </div>
          
          <button 
            className={`menu-button ${menuOpen ? 'menu-open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <div className="menu-icon"></div>
          </button>
          
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certificates">Certificates</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
            
            {/* Decorative elements visible only in mobile menu */}
            <div className="mobile-menu-decoration mobile-circle"></div>
            <div className="mobile-menu-decoration mobile-squiggle"></div>
            <div className="mobile-menu-decoration mobile-star"></div>
          </div>
          
          {/* Overlay for mobile menu */}
          <div className="menu-overlay" onClick={closeMenu}></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;