import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, ExternalLink } from 'lucide-react';
import './Research.css';

export default function Research() {
  return (
    <section id="research" className="research-section section-container">
      <div className="section-header">
        <h2 className="section-title">Research & Publications</h2>
        <div className="section-line"></div>
      </div>

      <motion.div
        className="research-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="research-badge">
          <Award size={24} />
          <span>WAMS 2026 Accepted</span>
        </div>

        <h3 className="research-title">
          Designing of Thin Flexible Circularly Polarized Antenna for S-Band Wearable Applications
        </h3>

        <div className="research-status">
          <span className="status-dot"></span>
          Accepted for Publication
        </div>

        <div className="research-abstract">
          <strong>Abstract:</strong> In this paper, a thin and flexible circularly polarized antenna designed for S-band wearable applications. The CPW-fed circular patch antenna operates at a frequency of 2.6 GHz, offering a bandwidth of 1.47 GHz. A polyimide substrate with a thickness of 0.125 mm was employed. Circular polarization is further achieved through the truncation of the ground plane corners and the incorporation of a slot in the radiating patch. Additionally, the antenna's gain is enhanced by utilizing a circular AMC surface. The radiation pattern, E- and H-plane, surface current distribution, and SAR analysis collectively demonstrate the satisfactory performance of the proposed antenna. This antenna is suitable for S-band satellite applications, as well as for LTE band 7, 5G n41, ISM band, WLAN, and Wi-Fi 2.4 GHz. Its lightweight structure, flexibility, and reduced fabrication complexity render it a promising candidate for flexible, wearable, and portable wireless communication systems.
        </div>

        <div className="research-buttons">
          <a href="#" className="btn-primary">
            <BookOpen size={20} />
            Read Paper (Draft)
          </a>
          <a href="#projects" className="btn-secondary">
            View Antenna Project
            <ExternalLink size={20} />
          </a>
        </div>

        <div className="research-glow"></div>
      </motion.div>
    </section>
  );
}
