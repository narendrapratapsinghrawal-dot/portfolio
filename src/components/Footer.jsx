import React from 'react';
import { Globe, Code, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-content">
        <div className="footer-info">
          <h3>Narendra Pratap Singh Rawal</h3>
          <p>VLSI Physical Design Engineer</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#expertise">Expertise</a>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="mailto:narendrapratapsinghrawal@gmail.com" aria-label="Email"><Mail size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Globe size={20} /></a>
            <a href="#" aria-label="GitHub"><Code size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Narendra Pratap Singh Rawal. All rights reserved.</p>
      </div>
    </footer>
  );
}
