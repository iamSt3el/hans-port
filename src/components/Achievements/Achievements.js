import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievementsData = [
    {
      title: "Participation in 48 Hackathon",
      description: "Participated in a 48-hour hackathon organized by the university, focusing on innovative solutions for real-world problems.",
      date: "March 2024",
      color: "var(--secondary)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      )
    },
    {
      title: "WebThone Hackathon ",
      description: "Participated in the WebThone Hackathon, where I collaborated with a team to develop a web application that addresses environmental issues.",
      date: "November 2023",
      color: "var(--accent2)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
          <path d="M4 22h16"></path>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-container">
          {achievementsData.map((achievement, index) => (
            <div className="achievement-card" key={index}>
              <div className="corner-dot top-left"></div>
              <div className="corner-dot top-right"></div>
              <div className="corner-dot bottom-left"></div>
              <div className="corner-dot bottom-right"></div>
              
              <div className="achievement-highlight" style={{ backgroundColor: achievement.color }}></div>
              
              <div className="achievement-header">
                <div className="achievement-icon" style={{ backgroundColor: `${achievement.color}15`, color: achievement.color }}>
                  {achievement.icon}
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
              </div>
              
              <p className="achievement-desc">{achievement.description}</p>
              
              <div className="achievement-date">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '5px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {achievement.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating doodles */}
      <div className="doodle circle-doodle" style={{ bottom: '10%', right: '15%' }}></div>
      <div className="doodle squiggle-doodle" style={{ top: '25%', left: '5%' }}></div>
    </section>
  );
};

export default Achievements;