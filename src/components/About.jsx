import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section section-container">
      <div className="about-grid">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
            <img src="/study.jpg" alt="Portrait" className="portrait-image" />
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Who I Am</h2>
          <div className="about-text">
            <p><strong>Who am I?</strong><br /> I am a Final Year B.Tech student in Electronics & Communication Engineering at MNIT Jaipur, passionate about learning electronics and implementing it to contribute the innovation in the Tech field.</p>

            <p><strong>Why Electronics?</strong><br /> From a young age, I was fascinated by how physical components could process logic and transmit information across the globe.</p>

            <p><strong>Why Digital Design?</strong><br /> Digital logic is the brain of modern technology. Writing RTL and seeing it synthesize into a working chip gives me immense satisfaction.</p>

            <p><strong>Why RF Communication?</strong><br /> The invisible world of wireless signals is incredibly complex. Designing antennas and understanding satellite communication challenges my analytical skills.</p>

            <p><strong>Career Goals</strong><br /> I aim to contribute to cutting-edge digital and RF systems, bridging the gap between logic design and wireless transmission.</p>

            <p className="ending-line">
              <em>Always curious about how electronic systems work—from digital logic to wireless communication.</em>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
