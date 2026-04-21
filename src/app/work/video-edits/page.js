"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Play, X, ArrowUpRight } from "lucide-react";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import styles from "../uiux/page.module.css";

const videoProjects = [
    {
        id: "v1",
        title: "ADT Solution Showcase",
        category: "Video Editing",
        icon: "🎬",
        description: "Comprehensive product demonstration and feature highlight",
        videoSrc: "/videos/adt-video.mp4",
        thumbnail: "/images/projects/adt.jpg"
    },
    {
        id: "v2",
        title: "Logo Motion Loader",
        category: "Motion Graphics",
        icon: "✨",
        description: "Smooth, stylized animated logo sequence",
        videoSrc: "/videos/logo-loader.gif",
        thumbnail: "/videos/logo-loader.gif"
    },
    {
        id: "v3",
        title: "Packaging Motion",
        category: "Motion Graphics",
        icon: "📦",
        description: "Dynamic product packaging animation",
        videoSrc: "/videos/packaging-motion.mp4",
        thumbnail: "/videos/packaging-motion.mp4"
    },
    {
        id: "v4",
        title: "Shoe Motion",
        category: "Motion Graphics",
        icon: "👟",
        description: "Stylish footwear motion presentation",
        videoSrc: "/videos/shoes-motion.mp4",
        thumbnail: "/videos/shoes-motion.mp4"
    }
];

export default function VideoEditsPage() {
    const [selectedProject, setSelectedProject] = useState(null);

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
                        <span className={styles.badgeDot} style={{ background: '#FF6C8C' }} />
                        <span>Motion Stories</span>
                    </div>
                    <h1 className={styles.title}>Video Edits</h1>
                    <p className={styles.subtitle}>
                        Dynamic video editing, motion graphics, and visual storytelling that captivates audiences.
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
                    {videoProjects.map((project) => (
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
                            <div className={styles.cardLink} onClick={() => setSelectedProject(project)} style={{ cursor: "pointer" }}>
                                <div className={styles.videoWrapper}>
                                    {/* Thumbnail with play overlay */}
                                    {project.thumbnail && project.thumbnail.endsWith('.mp4') ? (
                                        <video
                                            src={project.thumbnail}
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
                                        />
                                    ) : (
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                position: 'absolute',
                                                inset: 0
                                            }}
                                        />
                                    )}
                                    <div className={styles.videoOverlay}>
                                        <motion.div
                                            className={styles.playBtn}
                                            whileHover={{ scale: 1.15 }}
                                        >
                                            <Play size={28} fill="currentColor" />
                                        </motion.div>
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <span className={styles.cardCategory}>{project.category}</span>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.cardIcon}>{project.icon}</span>
                                        <span>{project.description}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>

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
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
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
                                            src={selectedProject.videoSrc}
                                            controls
                                            autoPlay
                                            playsInline
                                            className={styles.lightboxImage}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    ) : (
                                        <img
                                            src={selectedProject.videoSrc}
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
