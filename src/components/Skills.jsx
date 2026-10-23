import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Code, Sparkles, Binary, Server, Database, ShieldCheck, BarChart3 } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code size={22} />;
      case 'Sparkles':
        return <Sparkles size={22} />;
      case 'Binary':
        return <Binary size={22} />;
      case 'Server':
        return <Server size={22} />;
      case 'Database':
        return <Database size={22} />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} />;
      case 'BarChart3':
        return <BarChart3 size={22} />;
      default:
        return <Code size={22} />;
    }
  };

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-desc">
            Categorized technical expertise verified through real production workloads and working AI implementations.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((group, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-card-header">
                <div className="skill-icon-wrap">
                  {getCategoryIcon(group.icon)}
                </div>
                <h3 className="skill-card-title">{group.category}</h3>
              </div>

              <div className="skill-tag-container">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`tech-pill ${skill.highlight ? 'primary-badge' : ''}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
