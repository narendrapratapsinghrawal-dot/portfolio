import React from 'react';
import { motion } from 'framer-motion';
import './Journey.css';

const milestones = [
  { year: "2023", title: "Joined MNIT Jaipur", desc: "Started B.Tech in Electronics & Communication Engineering." },
  { year: "2024", title: "Built Foundation", desc: "Core subjects in Electronics and Communication systems." },
  { year: "2025", title: "Digital Design", desc: "Started working with Digital Electronics,CMOS logic,Timing concepts,VLSI Testing & Testability." },
  { year: "2026", title: "RF & Antenna Domain", desc: "Entered the world of RF communication and started learning Antenna Design and Simulation,Exploring Satellite Communication." },
  { year: "2026", title: "Projects Development", desc: " domain like RF communication,digital design,verilog and web development." },
  { year: "2026", title: "WAMS Conference", desc: "Research Paper Accepted at WAMS Conference (June 2026, Hyderabad)." }
];

export default function Journey() {
  return (
    <section id="journey" className="journey-section section-container">
      <div className="section-header">
        <h2 className="section-title">Engineering Journey</h2>
        <div className="section-line"></div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {milestones.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content card">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
