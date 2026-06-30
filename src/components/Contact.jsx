import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Code, FileText, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-container">
      <div className="section-header">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Whether it's Digital Design, RF Communication, Research Collaboration, or Engineering Opportunities, I'd be happy to connect.
        </p>
      </div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-card card">
            <h3>Contact Information</h3>
            <p>Feel free to reach out through any of these platforms. I typically respond within 24 hours.</p>

            <div className="contact-links">
              <a href="mailto:narendrapratapsinghrawal@gmail.com" className="contact-link">
                <div className="icon-wrapper"><Mail size={20} /></div>
                <span>narendrapratapsinghrawal@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/npsrawal" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="icon-wrapper"><Globe size={20} /></div>
                <span>LinkedIn Profile</span>
              </a>
              <a href="#" className="contact-link">
                <div className="icon-wrapper"><Code size={20} /></div>
                <span>GitHub Profile</span>
              </a>
              <a href="/final_resume.pdf" download className="contact-link">
                <div className="icon-wrapper"><FileText size={20} /></div>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="contact-form card" action="https://formsubmit.co/narendrapratapsinghrawal@gmail.com" method="POST">
            <h3>Send a Message</h3>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Narendra" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="youremail@gmail.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="How can we collaborate?" required></textarea>
            </div>

            <button type="submit" className="btn-primary submit-btn">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
