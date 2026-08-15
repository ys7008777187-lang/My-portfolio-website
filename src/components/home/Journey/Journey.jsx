"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./Journey.module.css";

import { getAssetUrl } from "../../../lib/assetUrl";

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalProjects = 4;

  // Auto-cycle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalProjects);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const projects = [
    {
      title: "BHAIYAA SUPER APP",
      description: "A super app that brings community, services and convenience together.",
      role: "UI/UX Design",
      year: "2024",
      focus: ["Ps", "Ae", "Figma"],
      image: "/images/projects/bhaiyaa.png",
      annotations: [
        { text: "Personalized Dashboard", position: "top" },
        { text: "Easy Access to Services", position: "middle" },
        { text: "Contextual Recommendations", position: "bottom" },
      ]
    },
    {
      title: "CAMPUS BITES",
      description: "A seamless food delivery experience designed exclusively for university campuses.",
      role: "UX Case Study",
      year: "2023",
      focus: ["Figma", "Prototyping"],
      image: "/images/campusbites/Store Dashboard.png",
      annotations: [
        { text: "Streamlined Ordering", position: "top" },
        { text: "Live Order Tracking", position: "middle" },
        { text: "Campus Integration", position: "bottom" },
      ]
    },
    {
      title: "BASECAMP REDESIGN",
      description: "Modernizing the project management experience with a fresh, intuitive interface.",
      role: "UI/UX Redesign",
      year: "2023",
      focus: ["Figma", "Wireframing"],
      image: "/images/basecamp/dashboard.webp",
      annotations: [
        { text: "Clean Interface", position: "top" },
        { text: "Improved Navigation", position: "middle" },
        { text: "Task Management", position: "bottom" },
      ]
    },
    {
      title: "ADT SOLUTION",
      description: "An enterprise dashboard for security and monitoring management.",
      role: "UI/UX Design",
      year: "2022",
      focus: ["Ps", "Figma"],
      image: "/images/ADT/Home.jpg",
      annotations: [
        { text: "Data Visualization", position: "top" },
        { text: "Real-time Alerts", position: "middle" },
        { text: "Admin Controls", position: "bottom" },
      ]
    }
  ];

  const currentProject = projects[activeIndex];

  return (
    <section className={styles.section} id="journey">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.sectionNumber}>4.</div>
          <h2 className={styles.title}>INTERACTIVE PROJECT EXPERIENCE</h2>
          <p className={styles.subtitle}>Detailed case study with annotations, flows and motion.</p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              className={styles.cardContent}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.leftColumn}>
                <h3 className={styles.projectTitle}>{currentProject.title}</h3>
                <p className={styles.projectDesc}>
                  {currentProject.description}
                </p>
                
                <div className={styles.detailsGrid}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>ROLE</span>
                    <span className={styles.detailValue}>{currentProject.role}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>YEAR</span>
                    <span className={styles.detailValue}>{currentProject.year}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>FOCUS</span>
                    <div className={styles.tools}>
                      {currentProject.focus.map(tool => {
                        let dotClass = styles.figmaDot;
                        if (tool === 'Ps') dotClass = styles.psDot;
                        if (tool === 'Ae') dotClass = styles.aeDot;
                        
                        return (
                          <div key={tool} className={styles.toolItem}>
                            <span className={`${styles.dot} ${dotClass}`}></span> {tool}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.rightColumn}>
                <div className={`${styles.imageWrapper} ${currentProject.title.includes("BHAIYAA") || currentProject.title.includes("CAMPUS BITES") ? styles.mockupWrapper : ''}`}>
                  <Image
                    src={getAssetUrl(currentProject.image)}
                    alt={currentProject.title}
                    width={600}
                    height={800}
                    className={`${styles.image} ${currentProject.title.includes("BHAIYAA") || currentProject.title.includes("CAMPUS BITES") ? styles.mockupImage : ''}`}
                    unoptimized
                  />
                  
                  <div className={styles.annotations}>
                    {currentProject.annotations.map((annotation, index) => (
                      <motion.div
                        key={`${activeIndex}-${index}`}
                        className={`${styles.annotation} ${styles[annotation.position]}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                      >
                        <div className={styles.annotationLine}></div>
                        <div className={styles.annotationText}>{annotation.text}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.cardBottom}>
            <div className={styles.navigator}>
              {[1, 2, 3, 4].map((step, index) => (
                <div key={step} className={styles.navStepContainer} onClick={() => setActiveIndex(index)}>
                  <div className={`${styles.navDot} ${activeIndex === index ? styles.activeDot : ''}`}>
                    0{step}
                  </div>
                  {index < 3 && <div className={styles.navLine}></div>}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
