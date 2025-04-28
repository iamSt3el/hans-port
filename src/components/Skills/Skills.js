import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    
    // Optional: Add scroll animation for additional visual impact
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible && !animated) {
          setAnimated(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [animated]);

  const skillsData = [
    {
      title: "Languages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "SQL", level: 80 }
      ],
      className: "languages"
    },
    {
      title: "Frontend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      skills: [
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "CSS Frameworks", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Principles", level: 75 }
      ],
      className: "frontend"
    },
    {
      title: "Backend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "Firebase", level: 70 }
      ],
      className: "backend"
    }
  ];

  const getConfidenceText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    if (level >= 50) return "Intermediate";
    return "Beginner";
  };
  
  // Function to stagger animations
  const getAnimationDelay = (index) => {
    return {
      animationDelay: `${0.2 + (index * 0.1)}s`
    };
  };

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        {/* Background decorations */}
        <div className="skills-background-decor bg-decor-1"></div>
        <div className="skills-background-decor bg-decor-2"></div>
        
        <div className="skills-container">
          {skillsData.map((skillCategory, index) => (
            <div 
              className={`skill-card ${skillCategory.className}`} 
              key={index}
              style={getAnimationDelay(index)}
            >
              <div className="corner-dot top-left"></div>
              <div className="corner-dot top-right"></div>
              <div className="corner-dot bottom-left"></div>
              <div className="corner-dot bottom-right"></div>
              
              <div className="skill-decoration decoration-1"></div>
              <div className="skill-decoration decoration-2"></div>
              
              <div className="skill-card-header">
                <div className="skill-icon">
                  {skillCategory.icon}
                </div>
                <h3 className="skill-title">{skillCategory.title}</h3>
              </div>
              
              <ul className="skill-list">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} style={getAnimationDelay(skillIndex)}>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-progress-container">
                      <div 
                        className="skill-progress-bar" 
                        style={{ width: animated ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                    <div className="skill-confidence">{getConfidenceText(skill.level)}</div>
                  </li>
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