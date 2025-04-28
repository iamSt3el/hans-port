import React from 'react';
import './Projects.css';
import first from '../../assets/image copy 5.png';
import second from '../../assets/image copy 6.png';
import third from '../../assets/image copy 7.png';
const Projects = () => {
  const projectsData = [
    {
      title: "Exploring Neural Machine Translation with Attention Mechanisms ",
      image: first,
      description: "Created a neural machine translation model using attention mechanisms to improve translation accuracy and fluency.",
      tags: ["Python", "Pytorch", "TensorFlow", "NLP"],
      demoLink: "https://github.com/hansubhai2006/Exploring-Neural-Machine-Translation-with-Attention-Mechanisms-",
      githubLink: "https://github.com/hansubhai2006/Exploring-Neural-Machine-Translation-with-Attention-Mechanisms-"
    },
    {
      title: "Beijing Multi-Site Air Quality Project ",
      image: second,
      description: "Analyzed and visualized air quality data from multiple sites in Beijing to identify pollution patterns and trends.",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      demoLink: "https://github.com/hansubhai2006/-Beijing-Multi-Site-Air-Quality-Project-",
      githubLink: "https://github.com/hansubhai2006/-Beijing-Multi-Site-Air-Quality-Project-"
    },
    {
      title: "Customer Segmentation ",
      image: third,
      description: "Developed a customer segmentation model using clustering techniques to identify distinct customer groups for targeted marketing.",
      tags: ["Python", "Scikit-learn", "K-Means", "Clustering"],
      demoLink: "https://github.com/hansubhai2006/Customer-Segmentation-",
      githubLink: "https://github.com/hansubhai2006/Customer-Segmentation-"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="project-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating doodles */}
      <div className="doodle circle-doodle" style={{ top: '30%', left: '10%' }}></div>
      <div className="doodle star-doodle" style={{ bottom: '15%', right: '15%' }}></div>
    </section>
  );
};

export default Projects;