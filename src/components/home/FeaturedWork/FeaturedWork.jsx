"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAssetUrl, getOptimizedUrl } from "../../../lib/assetUrl";
import projectsData from "../../../data/projects.json";
import styles from "./FeaturedWork.module.css";
import { textVariants } from "../../../lib/animationPresets";

/* ── Inline SVG decorations (no extra assets needed) ── */
const StarBurst = () => (
  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,2 36,22 56,22 40,34 46,54 30,42 14,54 20,34 4,22 24,22" />
  </svg>
);

const CloudBurst = () => (
  <svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="25" cy="30" rx="18" ry="14" />
    <ellipse cx="42" cy="22" rx="20" ry="16" />
    <ellipse cx="58" cy="30" rx="15" ry="12" />
    <ellipse cx="40" cy="36" rx="22" ry="10" />
  </svg>
);

/* Decoration pattern per card index */
const CARD_DECOR = [
  // Issue 01 — cloud burst bottom-left
  (key) => (
    <div key={key} className={`${styles.comicDecor} ${styles.cloudBurst}`}>
      <CloudBurst />
    </div>
  ),
  // Issue 02 — speed lines right
  (key) => (
    <div key={key} className={`${styles.comicDecor} ${styles.speedLines}`}>
      <span /><span /><span />
    </div>
  ),
  // Issue 03 — star burst + mini stars
  (key) => (
    <>
      <div key={`${key}-star`} className={`${styles.comicDecor} ${styles.starBurst}`}>
        <StarBurst />
      </div>
      <div key={`${key}-mini`} className={`${styles.comicDecor} ${styles.miniStars}`}>
        <span /><span /><span />
      </div>
    </>
  ),
];

const FeaturedWork = () => {
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setMounted(true);
    // Filter for published projects and take the first 3
    const publishedProjects = projectsData
      .filter((project) => project.status === "Published")
      .slice(0, 3);
    setProjects(publishedProjects);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <section className={styles.section} id="work">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          variants={textVariants.headerEntrance}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className={styles.headerTop}>
            <span className={styles.sectionNumber}>2.</span>
            <h2 className={styles.title}>PROJECTS AS COMIC CHAPTERS</h2>
          </div>
          <p className={styles.subtitle}>
            Digital products designed across mobility, food, commerce and community.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => {
            const issueNum = String(index + 1).padStart(2, '0');
            const projectLink = `/manga/${project.id}`;
            const decorRenderer = CARD_DECOR[index % CARD_DECOR.length];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={styles.cardWrapper}
              >
                <Link href={projectLink} className={styles.card}>
                  {/* Blue comic header */}
                  <div className={styles.cardHeader}>
                    <span className={styles.issueLabel}>ISSUE {issueNum}</span>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                  </div>
                  
                  {/* Project screenshot */}
                  <div className={styles.imageWrapper}>
                    <Image
                      src={getOptimizedUrl(project.image, { thumbnail: true })}
                      alt={project.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Comic decorations — unique per card */}
                  {decorRenderer(`decor-${project.id}`)}

                  {/* Yellow CTA footer */}
                  <div className={styles.cardFooter}>
                    <span className={styles.cta}>
                      READ CHAPTER <ArrowRight className={styles.arrow} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
