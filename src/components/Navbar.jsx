import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="navbar" id="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="logo" aria-label="Dodda Sai Ram">
          <div className="logo-icon">SR</div>
          <span>
            Sai Ram<span style={{ color: 'var(--primary-light)' }}>.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Light and Dark Mode"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={20} color="currentColor" />
            ) : (
              <Moon size={20} color="currentColor" />
            )}
          </button>

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
