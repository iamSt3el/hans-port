import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      date: "2022 - Present",
      title: "Bachelor of Computer Science",
      institution: "Lovely Professional University",
      description: "Focusing on Artificial Intelligence and Web Technologies. Active member of the Coding Club and Web Development Society.",
      position: "left"
    },
    {
      date: "2021 - 2022",
      title: "Full Stack Web Development",
      institution: "Online Bootcamp",
      description: "Intensive 6-month program covering modern web development technologies and practices. Created several full-stack projects as part of the curriculum.",
      position: "right"
    },
    {
      date: "2018 - 2022",
      title: "High School Diploma",
      institution: "Central High School",
      description: "Graduated with honors. President of the Computer Science Club. Participated in several regional coding competitions.",
      position: "left"
    }
  ];

  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {educationData.map((item, index) => (
            <div className={`timeline-item ${item.position}`} key={index}>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.institution}</p>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating doodles */}
      <div className="doodle squiggle-doodle" style={{ top: '20%', right: '5%' }}></div>
      <div className="doodle star-doodle" style={{ bottom: '30%', left: '5%' }}></div>
    </section>
  );
};

export default Education;