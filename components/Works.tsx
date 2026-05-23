'use client';

import React from 'react';

interface Project {
  name: string;
  description: string;
  tech: string[];
}

interface WorksProps {
  projects: Project[];
}

const projectImages = [
  "/assets/images/img_rectangle_369.png",
  "/assets/images/img_rectangle_369_396x836.png",
  "/assets/images/img_rectangle_369_1.png",
  "/assets/images/img_rectangle_369.png", // Fallback for more projects
];

const Works: React.FC<WorksProps> = ({ projects }) => {
  return (
    <section className="works-section">
      <div className="works-content">
        <h2 className="works-title">My works</h2>
        
        <div role="list">
          {projects.map((project, index) => (
            <article className="project-item" role="listitem" key={index}>
              <div className="project-info">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-keywords">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span className="keyword" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
              <img 
                src={projectImages[index % projectImages.length]} 
                alt={`Project showcase for ${project.name}`} 
                className="project-image" 
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;