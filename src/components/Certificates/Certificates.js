import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificatesData = [
    {
      title: "Advanced Web Development",
      organization: "Frontend Masters",
      description: "Comprehensive training in modern frontend development with React, Redux, and responsive design principles.",
      issueDate: "July 2024",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      iconColor: "var(--primary)"
    },
    {
      title: "Python for Data Science",
      organization: "DataCamp",
      description: "Data analysis and visualization using Python libraries like Pandas, NumPy, and Matplotlib.",
      issueDate: "March 2024",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      iconColor: "var(--accent2)"
    },
    {
      title: "UI/UX Design Fundamentals",
      organization: "Udemy",
      description: "Design principles, wireframing, prototyping and user research for creating exceptional user experiences.",
      issueDate: "October 2023",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
      ),
      iconColor: "var(--accent3)"
    }
  ];

  return (
    <section id="certificates">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-container">
          {certificatesData.map((certificate, index) => (
            <div className="certificate-card" key={index}>
              <div className="corner-dot top-left"></div>
              <div className="corner-dot top-right"></div>
              <div className="corner-dot bottom-left"></div>
              <div className="corner-dot bottom-right"></div>
              
              <div className="certificate-header">
                <div className="certificate-icon" style={{ borderColor: certificate.iconColor }}>
                  {certificate.icon}
                </div>
                <div>
                  <h3 className="certificate-title">{certificate.title}</h3>
                  <p className="certificate-org">{certificate.organization}</p>
                </div>
              </div>
              
              <p className="certificate-desc">{certificate.description}</p>
              
              <div className="certificate-footer">
                <span className="certificate-date">{certificate.issueDate}</span>
                <a href="#" className="certificate-view">
                  View
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '5px' }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
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