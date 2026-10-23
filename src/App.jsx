import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  // Theme state: dark / light
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('sai_ram_portfolio_theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Toast state
  const [toast, setToast] = useState({ visible: false, message: '' });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sai_ram_portfolio_theme', theme);
  }, [theme]);

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 3000);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    showToast(`Switched to ${nextTheme} mode`);
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}
