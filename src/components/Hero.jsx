import React from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div>
            <div className="hero-greeting">
              <span className="pulse-dot"></span>
              Available for Backend & AI/ML Roles • Hyderabad, India
            </div>

            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">{personalData.name}</span>
            </h1>

            <div className="hero-headline">
              Python Developer{' '}
              <span className="sub-role">• AI / ML & GenAI Specialist</span>
            </div>

            <p className="hero-pitch">{personalData.pitch}</p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary" id="btn-hero-projects">
                <span>View Featured Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary" id="btn-hero-contact">
                <span>Contact Me</span>
                <Mail size={18} />
              </a>
            </div>

            {/* Quick Social Links */}
            <div className="hero-socials">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="social-link"
                title="Send Email"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={`tel:${personalData.phone}`}
                className="social-link"
                title={`Call ${personalData.phone}`}
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Real Metrics Banner */}
        <div className="hero-stats-banner">
          {personalData.stats.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
