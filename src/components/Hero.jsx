import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section section-container">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-name">
            Hey, I'm <br />
            <span className="text-accent">Narendra Pratap Singh Rawal</span>
          </h1>
          <h2 className="hero-subtitle">
            VLSI Physical Design Engineer & RF Communication Enthusiast
          </h2>
          <p className="hero-description">
            Passionate about Digital Electronics and VLSI Design also like to explore Antenna and Satellite Communication
          </p>

          <div className="hero-buttons">
            <a
              href="/final_resume.pdf"
              download
              className="btn-primary">
              <Download size={20} />
              Download Resume
            </a>

            <a href="#projects" className="btn-secondary">
              View Projects
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="image-wrapper">
            <img src="/narendra.png" alt="RF Communication and Digital Design Visualization" />
            <div className="image-overlay"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
}
