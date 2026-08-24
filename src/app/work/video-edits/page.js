"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Play, X } from "lucide-react";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import { getAssetUrl, getOptimizedUrl } from "../../../lib/assetUrl";
import styles from "./page.module.css";

const videoProjects = [
    {
        id: 'v1',
        title: 'ADT Solution Showcase',
        category: 'Video Editing',
        icon: '🎬',
        description: 'Comprehensive product demonstration and feature highlight',
        videoSrc: '/videos/adt-video.mp4',
        thumbnail: '/images/projects/adt.jpg',
        tagline: 'THE FULL EXPERIENCE!'
    },
    {
        id: 'v2',
        title: 'Logo Motion Loader',
        category: 'Motion Graphics',
        icon: '✨',
        description: 'Smooth, stylized animated logo sequence',
        videoSrc: '/videos/logo-loader.gif',
        thumbnail: '/videos/logo-loader.gif',
        tagline: 'SMOOTH MOVES!'
    },
    {
        id: 'v3',
        title: 'Packaging Motion',
        category: 'Motion Graphics',
        icon: '📦',
        description: 'Dynamic product packaging animation',
        videoSrc: '/videos/packaging-motion.mp4',
        thumbnail: '/videos/packaging-motion.mp4',
        tagline: 'UNBOX THE MAGIC!'
    },
    {
        id: 'v4',
        title: 'Shoe Motion',
        category: 'Motion Graphics',
        icon: '👟',
        description: 'Stylish footwear motion presentation',
        videoSrc: '/videos/shoes-motion.mp4',
        thumbnail: '/videos/shoes-motion.mp4',
        tagline: 'STEP INTO STYLE!'
    }
];

const panelColors = ['#FF6B9D', '#8BE9FD', '#FFB86C', '#50FA7B'];

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

export default function VideoEditsPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <main className={styles.main}>
            {/* ═══ COMIC TOP STRIP ═══ */}
            <div className={styles.topStrip}>
                <span className={styles.stripLeft}>MEANWHILE, IN THE DESIGN MULTIVERSE...</span>
                <span className={styles.stripCenter}>
                    A COLLECTION OF <strong>MOTION STORIES</strong>
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
                        <span className={styles.headerLabel}>VISUAL CREATIONS</span>
                        <h1 className={styles.comicTitle}>VIDEO EDITS</h1>
                        <p className={styles.comicSubtitle}>
                            Dynamic video editing, motion graphics, and visual storytelling that captivates audiences.
                        </p>
                    </div>
                    <div className={styles.headerRight}>
                        <div className={styles.speechBubble}>
                            <span>LIGHTS, CAMERA, ACTION!</span>
                        </div>
                    </div>
                </motion.div>

                {/* ═══ COMIC PANEL GRID ═══ */}
                <motion.div
                    className={styles.panelGrid}
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {videoProjects.map((project, index) => {
                            const color = panelColors[index % panelColors.length];
                            return (
                                <motion.article
                                    key={project.id}
                                    className={styles.panel}
                                    style={{ "--panel-color": color }}
                                    custom={index}
                                    variants={panelVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                                    layout
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Issue badge */}
                                    <div className={styles.issueBadge} style={{ backgroundColor: color }}>
                                        <span className={styles.issueLabel}>ISSUE</span>
                                        <span className={styles.issueNum}>#{String(index + 1).padStart(2, "0")}</span>
                                    </div>

                                    {/* Tagline bubble */}
                                    {project.tagline && (
                                        <div className={styles.taglineBubble}>
                                            <span>{project.tagline}</span>
                                        </div>
                                    )}

                                    {/* Image / Video */}
                                    <div className={styles.panelImageWrap}>
                                        {project.thumbnail && project.thumbnail.endsWith('.mp4') ? (
                                            <video
                                                src={getOptimizedUrl(project.thumbnail)}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    position: 'absolute',
                                                    inset: 0
                                                }}
                                                className={styles.panelImage}
                                            />
                                        ) : (
                                            <img
                                                src={getOptimizedUrl(project.thumbnail)}
                                                alt={project.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    position: 'absolute',
                                                    inset: 0
                                                }}
                                                className={styles.panelImage}
                                            />
                                        )}
                                        <div className={styles.panelOverlay} />

                                        {/* Hover play button */}
                                        <motion.div
                                            className={styles.playIcon}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Play fill="currentColor" size={24} style={{ marginLeft: "3px" }} />
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
                                </motion.article>
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

            {/* ═══ LIGHTBOX ═══ */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className={styles.lightboxOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className={styles.lightboxContent}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            transition={{ type: "spring", damping: 22, stiffness: 350 }}
                        >
                            <button className={styles.lightboxClose} onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>

                            <div className={styles.lightboxHeader}>
                                <h2>{selectedProject.title}</h2>
                                {selectedProject.description && <p>{selectedProject.description}</p>}
                            </div>

                            <div className={styles.lightboxBody}>
                                <div className={styles.lightboxSingleItem}>
                                    {selectedProject.videoSrc && selectedProject.videoSrc.endsWith('.mp4') ? (
                                        <video
                                            src={getAssetUrl(selectedProject.videoSrc)}
                                            controls
                                            autoPlay
                                            playsInline
                                            className={styles.lightboxImage}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    ) : (
                                        <img
                                            src={getAssetUrl(selectedProject.videoSrc)}
                                            alt={selectedProject.title}
                                            className={styles.lightboxImage}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ContactCTA />
        </main>
    );
}
