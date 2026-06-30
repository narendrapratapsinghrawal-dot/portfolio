import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { name: "Digital Design", level: 98 },
  { name: "Verilog HDL", level: 85 },
  { name: "MATLAB", level: 75 },
  { name: "Cadence Virtuoso", level: 92 },
  { name: "Proteus", level: 98 },
  { name: "Antenna Design", level: 52 },
  { name: "HFSS", level: 75 },
  { name: "React Web Dev", level: 10 }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section section-container">
      <div className="section-header">
        <h2 className="section-title">Skills Snapshot</h2>
        <div className="section-line"></div>
      </div>

      <div className="skills-container card">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-bar-bg">
              <motion.div
                className="skill-bar-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
