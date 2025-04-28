import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ["JavaScript (ES6+)", "Python", "Java", "HTML5 & CSS3", "SQL"]
    },
    {
      title: "Frontend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      skills: ["React.js", "Vue.js", "CSS Frameworks", "Responsive Design", "UI/UX Principles"]
    },
    {
      title: "Backend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      skills: ["Node.js", "Express", "MongoDB", "RESTful APIs", "Firebase"]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skillsData.map((skillCategory, index) => (
            <div className="skill-card" key={index}>
              <div className="corner-dot top-left"></div>
              <div className="corner-dot top-right"></div>
              <div className="corner-dot bottom-left"></div>
              <div className="corner-dot bottom-right"></div>
              
              <div className="skill-icon">
                {skillCategory.icon}
              </div>
              
              <h3 className="skill-title">{skillCategory.title}</h3>
              
              <ul className="skill-list">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating doodles */}
      <div className="doodle circle-doodle" style={{ bottom: '10%', left: '15%' }}></div>
      <div className="doodle squiggle-doodle" style={{ top: '20%', right: '5%' }}></div>
    </section>
  );
};

export default Skills;