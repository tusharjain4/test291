'use client';

import React from 'react';

interface JourneyProps {
  currentRole: string;
  experience: number;
  about: string;
  highlights: string[];
}

const Journey: React.FC<JourneyProps> = ({ currentRole, experience, about, highlights }) => {
  const journeyItems = [
    {
      institution: currentRole,
      period: `${experience}+ Years Experience`,
      description: about,
    },
    {
      institution: "Key Achievement",
      period: "Recent",
      description: highlights[0] || "Driving product quality and enhancing interface responsiveness.",
    },
  ];

  return (
    <section className="journey-section">
      <div className="journey-content">
        <h2 className="journey-title">My Journey</h2>
        
        <div className="journey-list" role="list">
          {journeyItems.map((item, index) => (
            <article className="journey-item" role="listitem" key={index}>
              <div className="journey-header">
                <div className="journey-icon">
                  <img src="/assets/images/img_icon_building_2.svg" alt="Experience icon" />
                </div>
                <div className="journey-info">
                  <h3 className="journey-institution">{item.institution}</h3>
                  <p className="journey-period">{item.period}</p>
                </div>
              </div>
              <div className="journey-details">
                <img src="/assets/images/img_line_container.svg" alt="" className="journey-line" />
                <p className="journey-description">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;