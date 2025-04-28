import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  
  const skillsData = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      color: "var(--primary)",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "HTML/CSS", level: 95 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      color: "var(--accent2)",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "CSS/SASS", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Design", level: 75 }
      ]
    },
    {
      id: "ml",
      title: "Machine Learning",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      color: "var(--accent1)",
      skills: [
        { name: "TensorFlow", level: 75 },
        { name: "Scikit-Learn", level: 85 },
        { name: "Data Analysis", level: 80 },
        { name: "Neural Networks", level: 70 },
        { name: "Computer Vision", level: 65 }
      ]
    }
  ];

  // Function to determine confidence level text
  const getConfidenceText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    if (level >= 50) return "Intermediate";
    return "Beginner";
  };
  
  // Handle scroll to trigger animations
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;
        
        if (isVisible && !animated) {
          setAnimated(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animated]);
  
  // Animation delay for staggered appearance
  const getAnimationDelay = (categoryIndex, skillIndex) => {
    const baseDelay = categoryIndex * 0.1;
    const skillDelay = skillIndex * 0.05;
    return {
      animationDelay: `${0.2 + baseDelay + skillDelay}s`
    };
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        {/* Background decorative elements */}
        <div className="skills-background">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-squiggle bg-squiggle-1"></div>
          <div className="bg-squiggle bg-squiggle-2"></div>
        </div>
        
        {/* Skills cards container */}
        <div className="skills-cards-container">
          {skillsData.map((category, categoryIndex) => (
            <div 
              className={`skill-category-card ${animated ? 'animated' : ''}`} 
              key={category.id}
              style={{
                animationDelay: `${0.2 + (categoryIndex * 0.2)}s`,
                borderTopColor: category.color
              }}
            >
              <div className="corner-dot top-left"></div>
              <div className="corner-dot top-right"></div>
              <div className="corner-dot bottom-left"></div>
              <div className="corner-dot bottom-right"></div>
              
              <div className="category-header">
                <div className="category-icon" style={{ backgroundColor: `${category.color}15`, color: category.color }}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    className={`skill-item ${animated ? 'animated' : ''}`} 
                    key={skillIndex}
                    style={getAnimationDelay(categoryIndex, skillIndex)}
                  >
                    <div className="skill-info">
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-level" style={{ color: category.color }}>
                        {getConfidenceText(skill.level)}
                      </div>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ 
                          width: animated ? `${skill.level}%` : '0%',
                          backgroundColor: category.color,
                          transitionDelay: `${0.5 + (categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating doodles */}
      <div className="doodle circle-doodle" style={{ top: '10%', left: '5%' }}></div>
      <div className="doodle squiggle-doodle" style={{ bottom: '20%', right: '10%' }}></div>
      <div className="doodle star-doodle" style={{ top: '30%', right: '20%' }}></div>
    </section>
  );
};

export default Skills;