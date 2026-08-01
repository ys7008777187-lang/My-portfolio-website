"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import { getAssetUrl } from "../../../lib/assetUrl";
import styles from "./page.module.css";
import projectsData from "../../../data/projects.json";

export default function UIUXPage() {
    const projects = Array.isArray(projectsData) ? projectsData.filter(p => p.status === 'Published') : [];

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={18} />
                        <span>Back to Work</span>
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <div className={styles.headerBadge}>
                        <span className={styles.badgeDot} style={{ background: '#6C8CFF' }} />
                        <span>UI/UX Design</span>
                    </div>
                    <h1 className={styles.title}>UI/UX Projects</h1>
                    <p className={styles.subtitle}>
                        A collection of user interface and experience design projects — from mobile apps to complex SaaS platforms.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
                    }}
                >
                    {projects.map((project) => {
                        const linkProps = project.link
                            ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
                            : { href: `/work/${project.id}` };

                        return (
                            <motion.article
                                key={project.id}
                                className={styles.card}
                                variants={{
                                    hidden: { opacity: 0, y: 40, scale: 0.97 },
                                    visible: {
                                        opacity: 1, y: 0, scale: 1,
                                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                                    }
                                }}
                            >
                                <a {...linkProps} className={styles.cardLink}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={getAssetUrl(project.image || '/images/placeholder.jpg')}
                                            alt={project.title}
                                            fill
                                            unoptimized
                                            style={{ objectFit: "cover" }}
                                            className={styles.image}
                                        />
                                        <div className={styles.imageOverlay}>
                                            <motion.div
                                                className={styles.viewBtn}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <ArrowUpRight size={22} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className={styles.cardContent}>
                                        <span className={styles.cardCategory}>{project.category}</span>
                                        <h3 className={styles.cardTitle}>{project.title}</h3>
                                        <div className={styles.cardMeta}>
                                            <span className={styles.cardIcon}>{project.icon}</span>
                                            <span>{project.category}</span>
                                        </div>
                                    </div>
                                </a>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
            <ContactCTA />
        </main>
    );
}
