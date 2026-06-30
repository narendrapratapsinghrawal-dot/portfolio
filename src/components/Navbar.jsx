import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#">NPSR</a>
        </div>

        <div className="navbar-links desktop-only">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="navbar-actions desktop-only">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setShowResumeModal(true)} className="btn-primary resume-btn">Resume</button>
        </div>

        <button className="mobile-menu-btn mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#expertise" onClick={() => setMobileMenuOpen(false)}>Expertise</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#research" onClick={() => setMobileMenuOpen(false)}>Research</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <button className="theme-toggle-mobile" onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}>
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </button>
          <button onClick={() => { setShowResumeModal(true); setMobileMenuOpen(false); }} className="btn-primary">Resume</button>
        </div>
      )}
      {showResumeModal && (
        <div className="resume-modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div className="resume-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setShowResumeModal(false)}>
              <X size={20} />
            </button>
            <iframe src="/final_resume.pdf" title="Resume" className="resume-iframe"></iframe>
          </div>
        </div>
      )}
    </nav>
  );
}
