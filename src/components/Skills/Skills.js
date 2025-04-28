import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const [connections, setConnections] = useState([]);
  const skillsRef = useRef(null);
  const categoriesRef = useRef({
    languages: null,
    frontend: null,
    backend: null
  });
  const hexagonsRef = useRef({
    languages: {},
    frontend: {},
    backend: {}
  });
  
  const skillsData = [
    {
      id: "languages",
      title: "Languages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      description: "Programming languages I'm proficient in",
      skills: [
        { id: "js", name: "JavaScript", level: 90, icon: "JS" },
        { id: "python", name: "Python", level: 85, icon: "PY" },
        { id: "java", name: "Java", level: 75, icon: "JV" },
        { id: "html", name: "HTML/CSS", level: 95, icon: "HC" },
        { id: "sql", name: "SQL", level: 80, icon: "SQ" }
      ],
      className: "languages"
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      description: "Creating beautiful and responsive user interfaces",
      skills: [
        { id: "react", name: "React.js", level: 90, icon: "⚛️" },
        { id: "vue", name: "Vue.js", level: 80, icon: "VU" },
        { id: "css", name: "CSS/SASS", level: 85, icon: "CS" },
        { id: "responsive", name: "Responsive", level: 95, icon: "RD" },
        { id: "ux", name: "UI/UX", level: 75, icon: "UX" }
      ],
      className: "frontend"
    },
    {
      id: "backend",
      title: "Backend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      description: "Building robust server-side applications and APIs",
      skills: [
        { id: "node", name: "Node.js", level: 85, icon: "ND" },
        { id: "express", name: "Express", level: 80, icon: "EX" },
        { id: "mongo", name: "MongoDB", level: 75, icon: "DB" },
        { id: "rest", name: "REST APIs", level: 90, icon: "AP" },
        { id: "firebase", name: "Firebase", level: 70, icon: "FB" }
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
  
  // Calculate and draw connection lines between hexagons
  const calculateConnections = () => {
    if (!animated) return;
    
    let newConnections = [];
    
    skillsData.forEach(category => {
      const categoryId = category.id;
      const hexRefs = hexagonsRef.current[categoryId];
      const hexKeys = Object.keys(hexRefs);
      
      // Create connections between adjacent skills
      for (let i = 0; i < hexKeys.length - 1; i++) {
        if (hexRefs[hexKeys[i]] && hexRefs[hexKeys[i+1]]) {
          const rect1 = hexRefs[hexKeys[i]].getBoundingClientRect();
          const rect2 = hexRefs[hexKeys[i+1]].getBoundingClientRect();
          
          const x1 = rect1.left + rect1.width / 2;
          const y1 = rect1.top + rect1.height / 2;
          const x2 = rect2.left + rect2.width / 2;
          const y2 = rect2.top + rect2.height / 2;
          
          // Calculate distance and angle
          const dx = x2 - x1;
          const dy = y2 - y1;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          
          newConnections.push({
            id: `${categoryId}-${hexKeys[i]}-${hexKeys[i+1]}`,
            x1: x1,
            y1: y1,
            length: distance,
            angle: angle,
            category: categoryId
          });
        }
      }
      
      // Create circular connection from last to first element
      if (hexRefs[hexKeys[0]] && hexRefs[hexKeys[hexKeys.length - 1]]) {
        const rect1 = hexRefs[hexKeys[hexKeys.length - 1]].getBoundingClientRect();
        const rect2 = hexRefs[hexKeys[0]].getBoundingClientRect();
        
        const x1 = rect1.left + rect1.width / 2;
        const y1 = rect1.top + rect1.height / 2;
        const x2 = rect2.left + rect2.width / 2;
        const y2 = rect2.top + rect2.height / 2;
        
        // Calculate distance and angle
        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        newConnections.push({
          id: `${categoryId}-${hexKeys[hexKeys.length - 1]}-${hexKeys[0]}`,
          x1: x1,
          y1: y1,
          length: distance,
          angle: angle,
          category: categoryId
        });
      }
    });
    
    setConnections(newConnections);
  };
  
  // Handle scroll to trigger animations
  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;
        
        if (isVisible && !animated) {
          setAnimated(true);
          setTimeout(calculateConnections, 1000); // Wait for animations to finish
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateConnections);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateConnections);
    };
  }, [animated]);
  
  // Recalculate connections after animation completes
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(calculateConnections, 1000);
      return () => clearTimeout(timer);
    }
  }, [animated]);
  
  // Function to stagger animations
  const getAnimationDelay = (index) => {
    return {
      animationDelay: `${0.2 + (index * 0.1)}s`
    };
  };

  return (
    <section id="skills" ref={skillsRef} className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        {/* Background decorative elements */}
        <div className="skills-background">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-squiggle bg-squiggle-1"></div>
          <div className="bg-squiggle bg-squiggle-2"></div>
          <div className="bg-dots"></div>
        </div>
        
        {/* Connection lines between hexagons */}
        <div className="connections-container">
          {connections.map((connection) => (
            <div
              key={connection.id}
              className={`connection-line ${connection.category} ${animated ? 'visible' : ''}`}
              style={{
                left: `${connection.x1}px`,
                top: `${connection.y1}px`,
                width: `${connection.length}px`,
                transform: `rotate(${connection.angle}deg)`
              }}
            ></div>
          ))}
        </div>
        
        <div className="skills-container">
          {skillsData.map((category, categoryIndex) => (
            <div 
              className={`skill-category ${category.className}`} 
              key={category.id}
              ref={el => categoriesRef.current[category.id] = el}
            >
              <div className="category-header" style={getAnimationDelay(categoryIndex)}>
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
              
              <div className="hexagon-wrapper">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    className={`skill-hexagon`} 
                    key={skill.id}
                    style={getAnimationDelay(skillIndex + categoryIndex + 1)}
                    ref={el => hexagonsRef.current[category.id][skill.id] = el}
                  >
                    <div className="hex-content">
                      <div className="hex-icon">
                        {skill.icon}
                      </div>
                      <div className="hex-name">{skill.name}</div>
                      <div className="hex-level">{getConfidenceText(skill.level)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;