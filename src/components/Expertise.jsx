import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Radio, Zap, LayoutTemplate } from 'lucide-react';
import './Expertise.css';

const expertiseData = [
  {
    id: 1,
    title: "Digital Design",
    icon: <Cpu size={32} />,
    tools: ["Verilog HDL", "ModelSim", "Vivado"],
    topics: ["RTL Design", "FSM Design", "STA", "Digital Logic"]
  },
  {
    id: 2,
    title: "RF & Antenna Systems",
    icon: <Radio size={32} />,
    tools: ["HFSS", "CST Microwave Studio"],
    topics: ["Antenna Design", "RF Communication", "Satellite Communication"]
  },
  {
    id: 3,
    title: "VLSI & Circuit Design",
    icon: <Zap size={32} />,
    tools: ["Cadence Virtuoso", "LTSpice"],
    topics: ["Analog Design", "Simulation", "Circuit Analysis"]
  },

];

export default function Expertise() {
  return (
    <section id="expertise" className="expertise-section section-container">
      <div className="section-header">
        <h2 className="section-title">Expertise & Tools</h2>
        <div className="section-line"></div>
      </div>

      <div className="expertise-grid">
        {expertiseData.map((item, index) => (
          <motion.div
            key={item.id}
            className="expertise-card card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-icon">
              {item.icon}
            </div>
            <h3 className="card-title">{item.title}</h3>

            <div className="card-section">
              <h4>Topics</h4>
              <ul className="topic-list">
                {item.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>

            <div className="card-section tools-section">
              <h4>Tools</h4>
              <div className="tools-tags">
                {item.tools.map((tool, i) => (
                  <span key={i} className="tool-tag">{tool}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
