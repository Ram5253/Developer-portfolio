import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Timeline</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-desc">
            Proven background delivering production features, high-availability APIs, and automated data pipelines.
          </p>
        </div>

        <div className="timeline">
          {experienceData.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <div className="company-name">{exp.company}</div>
                  </div>
                  <div className="timeline-date">{exp.period}</div>
                </div>

                {exp.projects.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    className={pIdx > 0 ? 'timeline-subproject' : ''}
                    style={pIdx === 0 ? { marginBottom: '1.5rem' } : {}}
                  >
                    <div className="subproject-title">
                      <span className="prod-badge" style={{ fontSize: '0.68rem' }}>
                        {proj.badge}
                      </span>
                      <strong>{proj.title}</strong>
                    </div>

                    <ul className="timeline-list">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
