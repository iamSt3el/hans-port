import React, { useState, useEffect } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const certificatesData = [
    {
      title: "Advanced Web Development",
      organization: "Frontend Masters",
      description: "Comprehensive training in modern frontend development with React, Redux, and responsive design principles.",
      issueDate: "July 2024",
      image: "/api/placeholder/400/180",
      badgeText: "Professional",
      category: "frontend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      title: "Python for Data Science",
      organization: "DataCamp",
      description: "Data analysis and visualization using Python libraries like Pandas, NumPy, and Matplotlib.",
      issueDate: "March 2024",
      image: "/api/placeholder/400/180",
      badgeText: "Specialist",
      category: "data",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: "UI/UX Design Fundamentals",
      organization: "Udemy",
      description: "Design principles, wireframing, prototyping and user research for creating exceptional user experiences.",
      issueDate: "October 2023",
      image: "/api/placeholder/400/180",
      badgeText: "Advanced",
      category: "design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
      )
    }
  ];

  // Function to stagger animations
  const getAnimationDelay = (index) => {
    return {
      animationDelay: `${0.2 + (index * 0.15)}s`
    };
  };

  return (
    <section id="certificates">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-container">
          {certificatesData.map((certificate, index) => (
            <div 
              className={`certificate-card ${certificate.category}`} 
              key={index}
              style={getAnimationDelay(index)}
            >
              <div className="corner-dot top-left"></div>
              <div className="corner-dot top-right"></div>
              <div className="corner-dot bottom-left"></div>
              <div className="corner-dot bottom-right"></div>
              
              {certificate.badgeText && (
                <div className="certificate-badge">{certificate.badgeText}</div>
              )}
              
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.title} />
              </div>
              
              <div className="certificate-content">
                <div className="certificate-header">
                  <div className={`certificate-icon ${certificate.category}`}>
                    {certificate.icon}
                  </div>
                  <div className="certificate-info">
                    <h3 className="certificate-title">{certificate.title}</h3>
                    <p className="certificate-org">{certificate.organization}</p>
                  </div>
                </div>
                
                <p className="certificate-desc">{certificate.description}</p>
                
                <div className="certificate-footer">
                  <span className="certificate-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {certificate.issueDate}
                  </span>
                  <a href="#" className="certificate-view">
                    View Certificate
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating doodles */}
      <div className="doodle circle-doodle" style={{ top: '15%', right: '10%' }}></div>
      <div className="doodle star-doodle" style={{ bottom: '20%', left: '10%' }}></div>
    </section>
  );
};

export default Certificates;