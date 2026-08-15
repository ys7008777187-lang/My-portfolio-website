"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
    const linkProps = project.externalUrl
        ? { href: project.externalUrl, target: "_blank", rel: "noopener noreferrer" }
        : { href: `/work/${project.id}` };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className={styles.card}
        >
            <a {...linkProps} className={styles.link}>
                <div
                    className={styles.imageContainer}
                    style={{ backgroundColor: project.imageColor }}
                >
                    {project.image && (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            unoptimized
                            style={{ objectFit: "cover" }}
                            className={styles.image}
                        />
                    )}
                    <div className={styles.overlay}>
                        <span className={styles.viewBtn}>View</span>
                    </div>
                </div>

                <div className={styles.info}>
                    <div className={styles.text}>
                        <h3 className={styles.title}>{project.title}</h3>
                        <span className={styles.category}>{project.category} • {project.role}</span>
                    </div>
                    <div className={styles.icon}>
                        <ArrowUpRight size={28} />
                    </div>
                </div>
            </a>
        </motion.div>
    );
}
