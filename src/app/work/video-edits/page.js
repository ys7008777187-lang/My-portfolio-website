"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Play, X, Instagram, ExternalLink, Sparkles, Film, Heart } from "lucide-react";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import { getAssetUrl, getOptimizedUrl } from "../../../lib/assetUrl";
import styles from "./page.module.css";

const videoProjects = [
    {
        id: 'v1',
        title: 'ADT Solution Showcase',
        category: 'Video Editing',
        icon: '🎬',
        description: 'Comprehensive product demonstration and feature highlight with dynamic transitions',
        videoSrc: '/videos/adt-video.mp4',
        thumbnail: '/images/projects/adt.jpg',
        tagline: 'THE FULL EXPERIENCE!'
    },
    {
        id: 'v2',
        title: 'Logo Motion Loader',
        category: 'Motion Graphics',
        icon: '✨',
        description: 'Smooth, stylized animated logo sequence crafted for digital products',
        videoSrc: '/videos/logo-loader.gif',
        thumbnail: '/videos/logo-loader.gif',
        tagline: 'SMOOTH MOVES!'
    },
    {
        id: 'v3',
        title: 'Packaging 3D Motion',
        category: '3D & Motion',
        icon: '📦',
        description: 'Dynamic product packaging animation highlighting textures and form',
        videoSrc: '/videos/packaging-motion.mp4',
        thumbnail: '/videos/packaging-motion.mp4',
        tagline: 'UNBOX THE MAGIC!'
    },
    {
        id: 'v4',
        title: 'Footwear Motion Story',
        category: 'Commercial Motion',
        icon: '👟',
        description: 'Stylish footwear presentation blending bold typography with kinetic rhythm',
        videoSrc: '/videos/shoes-motion.mp4',
        thumbnail: '/videos/shoes-motion.mp4',
        tagline: 'STEP INTO STYLE!'
    },
    {
        id: 'v5',
        title: 'Character Motion & VFX',
        category: 'Animation & VFX',
        icon: '💥',
        description: 'Expressive character motion study featuring stylized visual physics',
        videoSrc: '/videos/character-motion.mp4',
        thumbnail: '/videos/character-motion.mp4',
        tagline: 'ACTION PACKED!'
    },
    {
        id: 'v6',
        title: 'Kinetic Motion Graphic',
        category: 'Motion Design',
        icon: '⚡',
        description: 'High-energy typographic sequence with bold timing and impact frames',
        videoSrc: '/videos/do-it-motion.mp4',
        thumbnail: '/videos/do-it-motion.mp4',
        tagline: 'HIGH ENERGY!'
    },
    {
        id: 'v7',
        title: 'Brand Identity Animation',
        category: 'Brand Motion',
        icon: '🎨',
        description: 'Fluid corporate identity motion showcase designed for modern web apps',
        videoSrc: '/videos/bhaiyaa-animation.mp4',
        thumbnail: '/videos/bhaiyaa-animation.mp4',
        tagline: 'BRAND IN MOTION!'
    }
];

const INSTAGRAM_HANDLE = "chitranga420";
const INSTAGRAM_PROFILE_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

const instagramReels = [
    {
        id: 'ig1',
        title: '3D Kinetic Motion Study',
        category: 'Reel • Motion Design',
        tag: 'TRENDING REEL',
        videoSrc: '/videos/packaging-motion.mp4',
        description: 'Exploring isometric lighting and dynamic camera transitions.',
        instagramUrl: `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
    },
    {
        id: 'ig2',
        title: 'Character Animation Loop',
        category: 'Reel • Character Animation',
        tag: 'VIRAL DROP',
        videoSrc: '/videos/character-motion.mp4',
        description: 'Custom character rigging and expressive timing test.',
        instagramUrl: `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
    },
    {
        id: 'ig3',
        title: 'Commercial Sneaker Reel',
        category: 'Reel • Product Video',
        tag: 'FEATURED EDIT',
        videoSrc: '/videos/shoes-motion.mp4',
        description: 'Fast-paced product breakdown with kinetic rhythm.',
        instagramUrl: `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
    },
    {
        id: 'ig4',
        title: 'Impact Typography Sequence',
        category: 'Reel • Kinetic Type',
        tag: 'SOUND ON',
        videoSrc: '/videos/do-it-motion.mp4',
        description: 'Bold typography edit timed to beat drops.',
        instagramUrl: `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
    },
    {
        id: 'ig5',
        title: 'Brand Identity Reveal',
        category: 'Reel • Brand Motion',
        tag: 'LOGO REVEAL',
        videoSrc: '/videos/bhaiyaa-animation.mp4',
        description: 'Sleek logo animation crafted in After Effects.',
        instagramUrl: `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
    },
    {
        id: 'ig6',
        title: 'Logo Motion Micro-Interaction',
        category: 'Reel • UI Motion',
        tag: 'UI MOTION',
        videoSrc: '/videos/logo-loader.gif',
        description: 'Smooth loading sequence for web and mobile interfaces.',
        instagramUrl: `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
    }
];

const panelColors = ['#FF6B9D', '#8BE9FD', '#FFB86C', '#50FA7B', '#FF79C6', '#BD93F9', '#F1FA8C'];

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
                    A COLLECTION OF <strong>MOTION STORIES &amp; REELS</strong>
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

                {/* ═══ INSTAGRAM REELS SPOTLIGHT SECTION ═══ */}
                <motion.section
                    className={styles.igSection}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Instagram Profile Spotlight Card */}
                    <div className={styles.igProfileCard}>
                        <div className={styles.igProfileLeft}>
                            <div className={styles.igAvatarWrap}>
                                <div className={styles.igAvatarGlow} />
                                <div className={styles.igAvatar}>
                                    <Instagram size={36} color="#fff" />
                                </div>
                            </div>
                            <div className={styles.igProfileMeta}>
                                <div className={styles.igHandleRow}>
                                    <span className={styles.igHandle}>@{INSTAGRAM_HANDLE}</span>
                                    <span className={styles.igVerifiedBadge}>✓ CREATOR</span>
                                </div>
                                <h2 className={styles.igHeadline}>INSTAGRAM REELS &amp; SHORTS</h2>
                                <p className={styles.igBio}>
                                    Motion Graphics • VFX • 3D Loops • Kinetic Typography • Process Breakdowns
                                </p>
                            </div>
                        </div>

                        <div className={styles.igProfileActions}>
                            <a
                                href={INSTAGRAM_PROFILE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.igPrimaryBtn}
                            >
                                <Instagram size={18} />
                                <span>FOLLOW ON INSTAGRAM</span>
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Reels Grid Showcase */}
                    <div className={styles.igGrid}>
                        {instagramReels.map((reel, index) => {
                            const color = panelColors[(index + 2) % panelColors.length];
                            return (
                                <motion.div
                                    key={reel.id}
                                    className={styles.reelCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                >
                                    <div className={styles.reelMediaWrap} onClick={() => setSelectedProject(reel)}>
                                        {reel.videoSrc.endsWith('.mp4') ? (
                                            <video
                                                src={getOptimizedUrl(reel.videoSrc)}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className={styles.reelVideo}
                                            />
                                        ) : (
                                            <img
                                                src={getOptimizedUrl(reel.videoSrc)}
                                                alt={reel.title}
                                                className={styles.reelVideo}
                                            />
                                        )}
                                        <div className={styles.reelOverlay} />
                                        
                                        {/* Tag badge */}
                                        <div className={styles.reelTagBadge} style={{ background: color }}>
                                            <span>{reel.tag}</span>
                                        </div>

                                        {/* Play icon */}
                                        <div className={styles.reelPlayBtn}>
                                            <Play size={20} fill="#fff" style={{ marginLeft: '2px' }} />
                                        </div>

                                        {/* Instagram watermark */}
                                        <div className={styles.reelWatermark}>
                                            <Instagram size={13} />
                                            <span>@{INSTAGRAM_HANDLE}</span>
                                        </div>
                                    </div>

                                    <div className={styles.reelInfo}>
                                        <div className={styles.reelCategoryRow}>
                                            <span className={styles.reelCategory}>{reel.category}</span>
                                            <Heart size={14} className={styles.reelHeart} />
                                        </div>
                                        <h3 className={styles.reelTitle}>{reel.title}</h3>
                                        <p className={styles.reelDesc}>{reel.description}</p>
                                        
                                        <div className={styles.reelActions}>
                                            <button
                                                type="button"
                                                className={styles.reelPreviewBtn}
                                                onClick={() => setSelectedProject(reel)}
                                            >
                                                <Play size={13} />
                                                <span>Watch Preview</span>
                                            </button>
                                            <a
                                                href={INSTAGRAM_PROFILE_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.reelDirectLink}
                                            >
                                                <Instagram size={13} />
                                                <span>Instagram</span>
                                                <ExternalLink size={11} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Bottom Instagram Banner CTA */}
                    <div className={styles.igBannerCta}>
                        <div className={styles.igBannerContent}>
                            <Sparkles size={24} className={styles.igSparkle} />
                            <div>
                                <h3 className={styles.igBannerTitle}>CATCH THE LATEST EDITS ON INSTAGRAM</h3>
                                <p className={styles.igBannerSubtitle}>
                                    New reels, creative workflows, and motion breakdowns posted regularly on @{INSTAGRAM_HANDLE}
                                </p>
                            </div>
                        </div>
                        <a
                            href={INSTAGRAM_PROFILE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.igBannerBtn}
                        >
                            <Instagram size={18} />
                            <span>VIEW @{INSTAGRAM_HANDLE}</span>
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </motion.section>

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


