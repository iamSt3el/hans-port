import React, { useEffect, useState } from 'react';
import './Education.css';

const Education = () => {
  const [visible, setVisible] = useState(false);

  // Updated education data without the achievements array
  const educationData = [
    {
      id: 1,
      date: "2022 - Present",
      title: "Bachelor of Computer Science",
      institution: "Lovely Professional University",
      description: "Focusing on Artificial Intelligence and Web Technologies with a minor in User Experience Design. Active member of the Coding Club and Web Development Society.",
      position: "left",
      year: "2022"
    },
    {
      id: 2,
      date: "2021 - 2022",
      title: "12 th Grade (Science)",
      institution: "Parshv International School",
      description: "focused on Physics, Chemistry, and Mathematics. Participated in various science fairs.",
      position: "right",
      year: "2021"
    },
    {
      id: 3,
      date: "2019 - 2020",
      title: "10 th Grade (Sec)",
      institution: "Vikram Secondary School",
      description: "Completed secondary education with a focus on Mathematics and Science",
      position: "left",
      year: "2020"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const educationSection = document.getElementById('education');
      if (educationSection) {
        const rect = educationSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;
        
        if (isInView && !visible) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-container">
          {/* Education background doodles */}
          <div className="education-doodle edu-doodle1"></div>
          <div className="education-doodle edu-doodle2"></div>
          <div className="education-doodle edu-doodle3"></div>
          <div className="education-doodle edu-doodle4"></div>
          
          <div className="timeline">
            {/* Year markers */}
            {educationData.map((item) => (
              <div 
                key={`year-${item.id}`} 
                className="year-marker" 
                style={{ top: `${(item.id - 1) * 230}px` }}
              >
                {item.year}
              </div>
            ))}
            
            {educationData.map((item) => (
              <div className={`timeline-item ${item.position}`} key={item.id}>
                <div className="timeline-content">
                  {/* Corner dots */}
                  <div className="corner-dot top-left"></div>
                  <div className="corner-dot top-right"></div>
                  <div className="corner-dot bottom-left"></div>
                  <div className="corner-dot bottom-right"></div>
                  
                  <div className="timeline-date">{item.date}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  
                  <div className="timeline-institution">
                    <svg className="institution-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    {item.institution}
                  </div>
                  
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating doodles */}
      <div className="doodle squiggle-doodle" style={{ top: '20%', right: '5%' }}></div>
      <div className="doodle star-doodle" style={{ bottom: '30%', left: '5%' }}></div>
    </section>
  );
};

export default Education;