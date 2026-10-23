import React, { useState, useEffect } from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-text">
            © {new Date().getFullYear()} <strong>{personalData.name}</strong>. Built with React & precision for Backend & AI/ML Systems.
          </div>
          <div className="footer-links">
            <a href="#hero" className="footer-link">Back to Top</a>
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href={`mailto:${personalData.email}`} className="footer-link">Email</a>
          </div>
        </div>
      </footer>

      {/* Floating Back-to-Top Button */}
      <button
        id="back-to-top"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
