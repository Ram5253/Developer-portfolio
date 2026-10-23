import React from 'react';
import { aboutData } from '../data/portfolioData';
import { Server, Cpu, Bot, Database } from 'lucide-react';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Server':
        return <Server size={20} />;
      case 'Cpu':
        return <Cpu size={20} />;
      case 'Bot':
        return <Bot size={20} />;
      case 'Database':
        return <Database size={20} />;
      default:
        return <Server size={20} />;
    }
  };

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Backend Architect & AI/ML Practitioner</h2>
          <p className="section-desc">
            Transforming complex enterprise requirements into high-throughput backend APIs and context-aware intelligent agents.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            {aboutData.summary.map((paragraph, index) => (
              <p
                key={index}
                className="about-paragraph"
                style={index === aboutData.summary.length - 1 ? { marginBottom: 0 } : {}}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-highlights">
            {aboutData.highlights.map((item, index) => (
              <div className="highlight-box" key={index}>
                <div className="highlight-icon">
                  {getIcon(item.icon)}
                </div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
