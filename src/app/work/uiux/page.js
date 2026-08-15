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

/* ── Accent colors cycle ── */
const panelColors = [
    "#FFB86C", "#6C8CFF", "#FF6B9D", "#00E5A8",
    "#8BE9FD", "#BD93F9", "#F1FA8C", "#FF79C6",
    "#50FA7B"
];

/* ── Animations ── */
const panelVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.06,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

// Helper for taglines
const getTagline = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("campus bites")) return "FEEDING CAMPUS, ONE BITE AT A TIME!";
    if (titleLower.includes("adt solution")) return "SECURING DIGITAL FUTURES!";
    if (titleLower.includes("myrik")) return "EVERYTHING YOU NEED, IN YOUR POCKET!";
    if (titleLower.includes("bhaiyaa")) return "LOCAL SERVICES, SUPER EASY!";
    if (titleLower.includes("worq")) return "CONNECT. COLLABORATE. GET PAID.";
    if (titleLower.includes("basecamp")) return "FOCUS MAKES PROGRESS!";
    if (titleLower.includes("guitar")) return "STRUM THE FUTURE!";
    if (titleLower.includes("wearables") || titleLower.includes("tech on your wrist")) return "TECH ON YOUR WRIST!";
    if (titleLower.includes("zoo")) return "WILD BY DESIGN!";
    return "DESIGN BEYOND BOUNDARIES!";
};

export default function UIUXPage() {
    const projects = Array.isArray(projectsData) ? projectsData.filter(p => p.status === 'Published') : [];

    return (
        <main className={styles.main}>
            {/* ═══ COMIC TOP STRIP ═══ */}
            <div className={styles.topStrip}>
                <span className={styles.stripLeft}>MEANWHILE, IN THE DESIGN MULTIVERSE...</span>
                <span className={styles.stripCenter}>
                    A COLLECTION OF <strong>DIGITAL EXPERIENCES</strong>
                </span>
            </div>

            <div className={styles.container}>
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={18} />
                        <span>Back to Work</span>
                    </Link>
                </motion.div>

                {/* ═══ COMIC HERO HEADER ═══ */}
                <motion.div
                    className={styles.comicHeader}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                >
                    <div className={styles.headerLeft}>
                        <span className={styles.headerLabel}>DIGITAL EXPERIENCES</span>
                        <h1 className={styles.comicTitle}>
                            UI/UX PROJECTS
                        </h1>
                        <p className={styles.comicSubtitle}>
                            A collection of user interface and experience design projects — from mobile apps to complex SaaS platforms.
                        </p>
                    </div>
                    <div className={styles.headerRight}>
                        <div className={styles.speechBubble}>
                            <span>CRAFTING DIGITAL MAGIC!</span>
                        </div>
                    </div>
                </motion.div>

                {/* ═══ COMIC PANEL GRID ═══ */}
                <motion.div
                    className={styles.panelGrid}
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {projects.map((project, index) => {
                            const color = panelColors[index % panelColors.length];
                            const tagline = getTagline(project.title);
                            const linkProps = project.link
                                ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
                                : { href: `/work/${project.id}` };

                            const MotionLink = motion.create ? motion.create(Link) : motion(Link);

                            return (
                                <MotionLink
                                    key={project.id}
                                    {...linkProps}
                                    className={styles.panel}
                                    style={{ "--panel-color": color }}
                                    custom={index}
                                    variants={panelVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                                    layout
                                >
                                    {/* Issue badge */}
                                        <div className={styles.issueBadge} style={{ backgroundColor: color }}>
                                            <span className={styles.issueLabel}>ISSUE</span>
                                            <span className={styles.issueNum}>#{String(index + 1).padStart(2, "0")}</span>
                                        </div>

                                        {/* Tagline bubble */}
                                        <div className={styles.taglineBubble}>
                                            <span>{tagline}</span>
                                        </div>

                                        {/* Image */}
                                        <div className={styles.panelImageWrap}>
                                            <Image
                                                src={getAssetUrl(project.image || '/images/placeholder.jpg')}
                                                alt={project.title}
                                                fill
                                                unoptimized
                                                style={{ objectFit: "cover" }}
                                                className={styles.panelImage}
                                            />
                                            <div className={styles.panelOverlay} />

                                            {/* Hover view button */}
                                            <motion.div
                                                className={styles.viewBtn}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <ArrowUpRight size={22} />
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className={styles.panelContent}>
                                            <h3 className={styles.panelTitle}>{project.title}</h3>
                                            <span className={styles.panelCategory} style={{ color }}>
                                                {project.category}
                                            </span>
                                            <p className={styles.panelDesc}>{project.description}</p>
                                        </div>

                                        {/* Bottom speed-line accent */}
                                        <div className={styles.panelAccentBar} style={{ background: color }} />
                                    </MotionLink>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* ═══ BOTTOM QUOTE ═══ */}
                <div className={styles.bottomQuote}>
                    <span>DESIGN IS NOT JUST WHAT IT LOOKS LIKE...</span>
                    <strong>IT&apos;S HOW IT WORKS!</strong>
                </div>
            </div>

            <ContactCTA />
        </main>
    );
}
