"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Play, X, Instagram, ExternalLink, Sparkles, Heart, Film } from "lucide-react";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import { getAssetUrl, getOptimizedUrl } from "../../../lib/assetUrl";
import styles from "./page.module.css";

const INSTAGRAM_HANDLE = "chitranga420";
const INSTAGRAM_PROFILE_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

// ══════════════════════════════════════════════════════════════
// ALL 12 REAL INSTAGRAM REELS FROM @chitranga420
// Each reel maps to its actual downloaded video file & poster
// ══════════════════════════════════════════════════════════════
const instagramPosts = [
    {
        id: 'ig-azaad',
        title: 'AZAAD — The Cage (Short Film)',
        category: 'Short Film • Psychological Sci-Fi',
        tag: '📌 PINNED FILM',
        thumbnail: '/images/instagram/DcNpPhtRD_X.jpg',
        videoSrc: '/videos/instagram/DcNpPhtRD_X.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/DcNpPhtRD_X/',
        description: 'A Chitranga original short film written & created by Yash Srivastava. Exploring societal conditioning, identity, and free will.',
    },
    {
        id: 'ig-house-survived',
        title: 'Why Did This House Survive Nepal\'s Floods?',
        category: 'Structural Engineering • Explainer',
        tag: '📌 PINNED POST',
        thumbnail: '/images/instagram/Dcsc3kRx5K7.jpg',
        videoSrc: '/videos/instagram/Dcsc3kRx5K7.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/Dcsc3kRx5K7/',
        description: 'Everything around it was swept away, yet this house stood. Visual analysis of deep pile foundations anchored into stable soil.',
    },
    {
        id: 'ig-volcano',
        title: 'Volcanic Eruption: Earth\'s Terrifying Power',
        category: 'Cinematic VFX • Simulation',
        tag: 'CINEMATIC VFX',
        thumbnail: '/images/instagram/DdD5dl8qWFH.jpg',
        videoSrc: '/videos/instagram/DdD5dl8qWFH.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/DdD5dl8qWFH/',
        description: 'Massive volcanic eruption, glowing lava flows, smoke, and ash recreated with cinematic visual effects and sound design.',
    },
    {
        id: 'ig-dog',
        title: 'Loyal Dog Waiting in Flood Debris',
        category: 'Cinematic • Emotional Story',
        tag: 'VIRAL REEL',
        thumbnail: '/images/instagram/DcxYRrsxig9.jpg',
        videoSrc: '/videos/instagram/DcxYRrsxig9.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/DcxYRrsxig9/',
        description: 'Nepal\'s flood took everything — except his loyalty. A heartbreaking visual story capturing true devotion amid tragedy.',
    },
    {
        id: 'ig-twin-cyclones',
        title: 'Two Coasts. Two Cyclones. Same Day',
        category: 'Satellite Telemetry • Storm Watch',
        tag: 'HUD TELEMETRY',
        thumbnail: '/images/instagram/Dc2vwX7Rw9P.jpg',
        videoSrc: '/videos/instagram/Dc2vwX7Rw9P.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/Dc2vwX7Rw9P/',
        description: 'Twin cyclones in the Arabian Sea and Bay of Bengal simultaneously putting Mumbai and Kolkata in the crosshairs.',
    },
    {
        id: 'ig-typhoon-dolphin',
        title: 'Typhoon Dolphin — Mass Evacuation',
        category: 'Extreme Weather • Satellite Breakdown',
        tag: 'CLIMATE CRISIS',
        thumbnail: '/images/instagram/Dc0pwKLRBtn.jpg',
        videoSrc: '/videos/instagram/Dc0pwKLRBtn.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/Dc0pwKLRBtn/',
        description: 'China\'s strongest typhoon of the year. Red alert in Zhejiang with winds over 150 km/h and over 1,000,000 people evacuated.',
    },
    {
        id: 'ig-kailasa',
        title: 'Kailasa Temple: Carved Top-Down',
        category: 'Architecture • Ancient Engineering',
        tag: 'ANCIENT TECH',
        thumbnail: '/images/instagram/Ddlm8CjxTFs.jpg',
        videoSrc: '/videos/instagram/Ddlm8CjxTFs.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/Ddlm8CjxTFs/',
        description: 'Kailasa Temple, Ellora — one giant monolithic rock hollowed out from top down. Decades of work with zero room for error.',
    },
    {
        id: 'ig-trapped-girl',
        title: 'Nepal Flash Flood — Girl Trapped 3 Days, Survives',
        category: 'Survival • Disaster Rescue',
        tag: 'VIRAL STORY',
        thumbnail: '/images/instagram/Dcus3FZxMq2.jpg',
        videoSrc: '/videos/instagram/Dcus3FZxMq2.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/Dcus3FZxMq2/',
        description: 'Trapped for 3 days under rubble in Rasuwa district with no food or water. The Triangle of Life technique that saved her.',
    },
    {
        id: 'ig-timure-glof',
        title: 'Timure GLOF Disaster & Helicopter Rescue',
        category: 'Himalayas • Rescue Operation',
        tag: 'REAL FOOTAGE',
        thumbnail: '/images/instagram/DcvKhpcxP5Z.jpg',
        videoSrc: '/videos/instagram/DcvKhpcxP5Z.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/DcvKhpcxP5Z/',
        description: 'Glacial lake outburst flood buries Timure village under mud and rock. Real army rescue helicopter footage from the Himalayas.',
    },
    {
        id: 'ig-hanuman',
        title: 'Hidden Hanuman Idol — 170 Years Underground',
        category: 'Heritage • Archaeological Discovery',
        tag: 'ANCIENT HISTORY',
        thumbnail: '/images/instagram/DdBfi8EBeyq.jpg',
        videoSrc: '/videos/instagram/DdBfi8EBeyq.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/DdBfi8EBeyq/',
        description: 'Sat buried beneath the earth for 170 years. Untouched and unseen until 150kN of force brought centuries of history back to light.',
    },
    {
        id: 'ig-pilot-hero',
        title: 'Captain Smit Machchhar: Pilot Hero',
        category: 'Aviation • Real Emergency',
        tag: 'HERO STORY',
        thumbnail: '/images/instagram/DeQ5zTnxh5B.jpg',
        videoSrc: '/videos/instagram/DeQ5zTnxh5B.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/DeQ5zTnxh5B/',
        description: 'Boeing 737 MAX 8 emergency diversion to Tabuk, Saudi Arabia. Courageous flight deck handling by an Indian captain.',
    },
    {
        id: 'ig-wall-of-water',
        title: 'Nepal — When the River Turned Into a Wall of Water',
        category: 'Disaster • Documentary',
        tag: 'DOCUMENTARY',
        thumbnail: '/images/instagram/DcijJPdxJQ_.jpg',
        videoSrc: '/videos/instagram/DcijJPdxJQ_.mp4',
        instagramUrl: 'https://www.instagram.com/chitranga420/reel/DcijJPdxJQ_/',
        description: 'Bhotekoshi River flash flood overwhelming entire settlements, bridges, and highways in minutes.',
    },
];

// ══════════════════════════════════════════════════════════════
// Local motion-design work (portfolio video files)
// ══════════════════════════════════════════════════════════════
const motionWork = [
    {
        id: 'mw1',
        title: '3D Kinetic Motion Study',
        category: 'Reel • Motion Design',
        icon: '📦',
        videoSrc: '/videos/packaging-motion.mp4',
        thumbnail: '/videos/packaging-motion.mp4',
        tagline: 'TRENDING REEL',
        description: 'Exploring isometric lighting and dynamic camera transitions with 3D product packaging.',
    },
    {
        id: 'mw2',
        title: 'Character Animation Loop',
        category: 'Reel • Character Animation',
        icon: '💥',
        videoSrc: '/videos/character-motion.mp4',
        thumbnail: '/videos/character-motion.mp4',
        tagline: 'VIRAL DROP',
        description: 'Custom character rigging and expressive timing test with cyberpunk city environment.',
    },
    {
        id: 'mw3',
        title: 'Commercial Sneaker Reel',
        category: 'Reel • Product Video',
        icon: '👟',
        videoSrc: '/videos/shoes-motion.mp4',
        thumbnail: '/videos/shoes-motion.mp4',
        tagline: 'FEATURED EDIT',
        description: 'Fast-paced product breakdown with kinetic rhythm and bold typography.',
    },
    {
        id: 'mw4',
        title: 'Kinetic Typography — DO IT',
        category: 'Motion Graphics',
        icon: '⚡',
        videoSrc: '/videos/do-it-motion.mp4',
        thumbnail: '/videos/do-it-motion.mp4',
        tagline: 'SOUND ON',
        description: 'High-energy typographic sequence with bold timing and impact frames.',
    },
    {
        id: 'mw5',
        title: 'Logo Reveal Animation',
        category: 'Brand Motion',
        icon: '✨',
        videoSrc: '/videos/logo-loader.gif',
        thumbnail: '/videos/logo-loader.gif',
        tagline: 'LOGO REVEAL',
        description: 'Smooth, stylized animated logo sequence crafted for digital products.',
    },
    {
        id: 'mw6',
        title: 'Brand Identity — Bhaiyaa',
        category: 'UI Motion',
        icon: '🎨',
        videoSrc: '/videos/bhaiyaa-animation.mp4',
        thumbnail: '/videos/bhaiyaa-animation.mp4',
        tagline: 'UI MOTION',
        description: 'Fluid corporate identity motion showcase designed for modern web apps.',
    },
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

                {/* ═══════════════════════════════════════════════════════ */}
                {/* INSTAGRAM REELS — PRIMARY SECTION                     */}
                {/* ═══════════════════════════════════════════════════════ */}
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
                                    VFX • Disaster Science • Ancient Architecture • Short Films • Visual Storytelling
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
                        {instagramPosts.map((reel, index) => {
                            const color = panelColors[(index + 2) % panelColors.length];
                            const igUrl = reel.instagramUrl || INSTAGRAM_PROFILE_URL;

                            return (
                                <motion.div
                                    key={reel.id}
                                    className={styles.reelCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.35 }}
                                >
                                    <div className={styles.reelMediaWrap} onClick={() => setSelectedProject(reel)}>
                                        <img
                                            src={getOptimizedUrl(reel.thumbnail)}
                                            alt={reel.title}
                                            className={styles.reelVideo}
                                        />
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
                                                <span>Watch Video</span>
                                            </button>
                                            <a
                                                href={igUrl}
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

                {/* ═══════════════════════════════════════════════════════ */}
                {/* MOTION DESIGN WORK — PORTFOLIO VIDEOS                 */}
                {/* ═══════════════════════════════════════════════════════ */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginTop: '3rem' }}
                >
                    <div className={styles.sectionDivider}>
                        <Film size={20} />
                        <h2 className={styles.sectionDividerTitle}>MOTION DESIGN WORK</h2>
                        <span className={styles.sectionDividerSub}>Portfolio pieces &amp; motion graphics reels</span>
                    </div>

                    <motion.div className={styles.panelGrid} layout>
                        <AnimatePresence mode="popLayout">
                            {motionWork.map((project, index) => {
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

                            {/* Direct Instagram link for specific reel or profile */}
                            {selectedProject.id?.startsWith('ig') && (
                                <div className={styles.lightboxFooter}>
                                    <a
                                        href={selectedProject.instagramUrl || INSTAGRAM_PROFILE_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.lightboxIgLink}
                                    >
                                        <Instagram size={16} />
                                        <span>View this Reel on Instagram</span>
                                        <ExternalLink size={13} />
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ContactCTA />
        </main>
    );
}
