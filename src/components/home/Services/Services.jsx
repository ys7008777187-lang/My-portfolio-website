"use client";

import React from "react";
import { motion } from "framer-motion";
import { textVariants, COMIC_EASE } from "../../../lib/animationPresets";
import styles from "./Services.module.css";

const steps = [
  {
    id: 1,
    title: "RESEARCH",
    desc: "Understanding the problem.",
  },
  {
    id: 2,
    title: "IDEATION",
    desc: "Exploring possibilities.",
  },
  {
    id: 3,
    title: "DESIGN",
    desc: "Crafting interfaces.",
  },
  {
    id: 4,
    title: "INTERACTION",
    desc: "Bringing it to life.",
  },
  {
    id: 5,
    title: "IMPACT",
    desc: "Creating real impact.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  },
};

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <motion.div 
        className={styles.header}
        variants={textVariants.headerEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <span className={styles.sectionNumber}>3.</span>
        <h2 className={styles.title}>SCROLL STORYTELLING</h2>
        <p className={styles.subtitle}>Sections reveal like panels in a story.</p>
      </motion.div>

      <motion.div
        className={styles.processContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div className={styles.panelWrapper} variants={itemVariants}>
              <div className={styles.panel}>
                <div className={styles.panelBox}>
                  <span className={styles.stepName}>{step.title}</span>
                </div>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div className={styles.arrow} variants={itemVariants} aria-hidden="true">
                →
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}
