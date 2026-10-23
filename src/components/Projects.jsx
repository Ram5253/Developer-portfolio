import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterButtons = [
    { label: 'All Projects', value: 'all' },
    { label: '🏢 Company & Production', value: 'company' },
    { label: '🤖 AI / GenAI & Multi-Agent', value: 'ai' },
    { label: '📊 Machine Learning', value: 'ml' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects & Systems</h2>
          <p className="section-desc">
            Production platforms serving real enterprise users and end-to-end AI/ML systems.
          </p>
        </div>

        {/* Filter Tab Bar */}
        <div className="projects-filter-bar">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              className={`filter-btn ${activeFilter === btn.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(btn.value)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div>
                <div className="project-top">
                  <div className="project-badge-group">
                    {project.category === 'company' ? (
                      <span className="prod-badge">● Production System</span>
                    ) : project.category === 'ai' ? (
                      <span className="ai-badge">★ AI / Multi-Agent</span>
                    ) : (
                      <span
                        className="badge"
                        style={{
                          background: 'rgba(245,158,11,0.12)',
                          color: '#f59e0b',
                          borderColor: 'rgba(245,158,11,0.3)',
                        }}
                      >
                        📊 Machine Learning
                      </span>
                    )}
                    <span className="badge">{project.company}</span>
                  </div>
                  <span className="badge">{project.badge}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-desc">{project.description}</p>

                <ul className="project-bullets">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="project-stack">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="stack-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.details && (
                    <a
                      href={project.links.details}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%' }}
                    >
                      <span>View Role in Experience Timeline</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <GithubIcon size={14} />
                      <span>{project.links.github.includes('RAG') ? 'GitHub Code' : 'GitHub [ADD LINK]'}</span>
                    </a>
                  )}

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <span>View Details</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
