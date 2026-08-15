"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAssetUrl } from "../../../lib/assetUrl";
import projectsData from "../../../data/projects.json";
import styles from "./FeaturedWork.module.css";

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.headerTop}>
            <span className={styles.sectionNumber}>2.</span>
            <h2 className={styles.title}>PROJECTS AS COMIC CHAPTERS</h2>
          </div>
          <p className={styles.subtitle}>
            Each project feels like a comic issue.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => {
            const issueNum = String(index + 1).padStart(2, '0');
            const projectLink = `/manga/${project.id}`;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.cardWrapper}
              >
                <Link href={projectLink} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.issueLabel}>ISSUE {issueNum}</span>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                  </div>
                  
                  <div className={styles.imageWrapper}>
                    <Image
                      src={getAssetUrl(project.image)}
                      alt={project.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

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
