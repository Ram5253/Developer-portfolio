import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';
import { GraduationCap, Award, Cpu, Code } from 'lucide-react';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-desc">
            Academic foundation in engineering combined with rigorous specialization in AI and data systems.
          </p>
        </div>

        <div className="edu-cert-grid">
          {/* Left Column: Education */}
          <div className="edu-card">
            <h3 className="card-block-title">
              <GraduationCap size={22} color="var(--primary-light)" />
              <span>Education & Training</span>
            </h3>

            {educationData.map((edu, idx) => (
              <div className="edu-item" key={idx}>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-meta">
                  <span>{edu.meta}</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="cert-card">
            <h3 className="card-block-title">
              <Award size={22} color="var(--primary-light)" />
              <span>Certifications</span>
            </h3>

            {certificationsData.map((cert, idx) => (
              <div className="cert-item" key={idx}>
                <div className="cert-icon">
                  {cert.type.includes('AI') ? (
                    <Cpu size={20} />
                  ) : (
                    <Code size={20} />
                  )}
                </div>
                <div>
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                background: 'var(--bg-surface-elevated)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  marginBottom: '0.5rem',
                  color: 'var(--primary-light)',
                }}
              >
                Core Engineering Strengths
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Rigorous mathematical & analytical problem solving, data structure optimization, and structured database design gained through engineering curriculum and applied in high-traffic production environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
