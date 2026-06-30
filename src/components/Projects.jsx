import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Circularly Polarized S-Band Wearable Antenna",
    shortDesc: "Designed a thin, flexible CPW-fed circularly polarized antenna for S-band wearable and wireless communication applications.",
    tags: ["HFSS", "Antenna Design", "RF", "Wearable Antenna"],
    image: "/antenna.png",
    details: {
      problem: "Designing a lightweight, flexible antenna with circular polarization, wide bandwidth, and low SAR for wearable wireless communication systems.",
      objective: "Develop a CPW-fed circularly polarized S-band antenna operating at 2.6 GHz with enhanced gain and wide bandwidth.",
      process: "Designed the circular patch on a polyimide substrate, introduced a slot and truncated ground corners to achieve circular polarization, and integrated a circular AMC surface to improve antenna gain. Evaluated radiation characteristics, surface current distribution, and SAR performance through simulation.",
      tools: ["HFSS", "MATLAB"],
      results: "Achieved operation at 2.6 GHz with a 1.47 GHz bandwidth, enhanced gain using an AMC surface, and satisfactory radiation and SAR performance.",
      outcome: "Developed a compact, flexible antenna suitable for S-band satellite communication, LTE Band 7, 5G n41, ISM, WLAN, Wi-Fi 2.4 GHz, and wearable wireless applications."
    }
  },
  {
    id: 2,
    title: "FSM-Based Traffic Signal Controller — Verilog HDL",
    shortDesc: " Designed a traffic signal controller using Moore FSM architecture.",
    tags: ["Verilog", "ModelSim", "Xilinx Vivado"],
    image: "/fsm.jpg",
    details: {
      "problem": "Designing a reliable traffic signal control system with correct state transitions and timing.",
      "objective": "Build an FSM-based Traffic Signal Controller using Verilog HDL.",
      "process": "Designed the finite state machine, implemented timing logic and state transitions, simulated different traffic scenarios, and verified functionality.",
      "tools": ["Verilog", "ModelSim", "Xilinx Vivado"],
      "results": "Successfully simulated all traffic signal states and synthesized the design on FPGA.",
      "outcome": "Strengthened understanding of Finite State Machines (FSMs), digital design, timing control, and Verilog-based hardware implementation."
    }
  },
  {
    id: 3,
    title: "Synchronous FIFO Buffer",
    shortDesc: "Designed a synchronous FIFO buffer for efficient data storage and retrieval operations.",
    tags: ["Verilog HDL", "FIFO", "Digital Design"],
    image: "/fifo.png",
    details: {
      problem: "Implementing reliable data buffering while preventing overflow and underflow conditions.",
      objective: "Design a synchronous FIFO buffer with efficient read/write operations and status flag generation.",
      process: "Implemented read/write pointer logic, developed full and empty status detection, and verified functionality through simulation.",
      tools: ["Verilog HDL", "VS Code", "Xilinx Vivado"],
      results: "Successfully simulated FIFO operations and validated correct data storage, retrieval, and flag generation.",
      outcome: "Strengthened understanding of FIFO architecture, pointer management, memory design, and synchronous digital systems."
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="projects-section section-container">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.shortDesc}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>

              <button className="btn-secondary view-btn" onClick={() => openModal(project)}>
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={closeModal}>
                <X size={24} />
              </button>

              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-tags">
                {selectedProject.details.tools.map((tool, i) => (
                  <span key={i} className="project-tag">{tool}</span>
                ))}
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h3>Problem Statement</h3>
                  <p>{selectedProject.details.problem}</p>
                </div>
                <div className="modal-section">
                  <h3>Objective</h3>
                  <p>{selectedProject.details.objective}</p>
                </div>
                <div className="modal-section">
                  <h3>Design Process</h3>
                  <p>{selectedProject.details.process}</p>
                </div>
                <div className="modal-section">
                  <h3>Results & Outcome</h3>
                  <p>{selectedProject.details.results}</p>
                  <p>{selectedProject.details.outcome}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
