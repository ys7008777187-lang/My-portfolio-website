"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowDown, Layers, Palette, Film } from "lucide-react";
import styles from "./page.module.css";
import ContactCTA from "../../components/home/ContactCTA/ContactCTA";

const categories = [
    {
        id: "uiux",
        num: "01",
        title: "UI/UX\nProjects",
        category: "DIGITAL EXPERIENCES",
        tagline: "CRAFTING DIGITAL MAGIC!",
        description: "Intuitive interfaces & seamless user experiences for web and mobile.",
        href: "/work/uiux",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/anime-uiux_v2.jpg",
        color: "#6C8CFF",
        icon: Layers,
        projectCount: "6+",
        sfx: "POW!"
    },
    {
        id: "graphics",
        num: "02",
        title: "Graphics &\nArtwork",
        category: "VISUAL CREATIONS",
        tagline: "EVERY PIXEL TELLS A STORY!",
        description: "Logos, branding, illustrations, and artistic visual stories.",
        href: "/work/graphics",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/anime-graphics_v2.jpg",
        color: "#00E5A8",
        icon: Palette,
        projectCount: "10+",
        sfx: "BAM!"
    },
    {
        id: "video",
        num: "03",
        title: "Video\nEdits",
        category: "MOTION STORIES",
        tagline: "LIGHTS, CAMERA, ACTION!",
        description: "Dynamic video editing, motion graphics & visual storytelling.",
        href: "/work/video-edits",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/anime-video_v2.jpg",
        color: "#FF6C8C",
        icon: Film,
        projectCount: "5+",
        sfx: "BOOM!"
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2, delayChildren: 0.4 }
    }
};

const panelVariants = {
    hidden: { opacity: 0, y: 60, rotateZ: -2 },
    visible: {
        opacity: 1, y: 0, rotateZ: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

export default function Work() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <main className={styles.main}>
            {/* Hero Background */}
            <div className={styles.heroBackground}>
                <Image
                    src="https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/work-page-bg.jpg"
                    alt="Cyberpunk work background"
                    fill
                    priority
                    quality={85}
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay} />
                <div className={styles.halftoneOverlay} />
            </div>

            <div className={styles.container}>
                {/* ═══ COMIC MASTHEAD ═══ */}
                <motion.header
                    className={styles.masthead}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.mastheadLeft}>
                        <div className={styles.issueBanner}>
                            <span className={styles.issueLabel}>ISSUE</span>
                            <span className={styles.issueNum}>#02</span>
                            <span className={styles.issueSep}>—</span>
                            <span className={styles.issueTitle}>MY WORKS</span>
                        </div>
                        <span className={styles.jpLabel}>私の作品</span>
                        <h1 className={styles.comicTitle}>
                            <span className={styles.titleLine1}>MY</span>
                            <span className={styles.titleLine2}>WORKS</span>
                        </h1>
                        <p className={styles.comicSubtitle}>
                            A collection of design adventures,<br />
                            where ideas meet imagination.
                        </p>
                        <div className={styles.scrollHint}>
                            <div className={styles.scrollCircle}>
                                <ArrowDown size={14} />
                            </div>
                            <span>SCROLL TO EXPLORE</span>
                        </div>
                    </div>

                    <div className={styles.mastheadRight}>
                        <div className={styles.speechBubble}>
                            <span>WELCOME TO THE<br /><strong>CREATIVE UNIVERSE!</strong></span>
                        </div>
                        <div className={styles.kanjiBlock}>
                            <span>創</span>
                            <span>造</span>
                        </div>
                    </div>
                </motion.header>

                {/* ═══ 3 COMIC PANELS ═══ */}
                <motion.div
                    className={styles.panelsRow}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {categories.map((cat) => {
                        const IconComp = cat.icon;
                        const isHovered = hoveredId === cat.id;

                        return (
                            <motion.div
                                key={cat.id}
                                variants={panelVariants}
                                className={styles.panelWrapper}
                                onHoverStart={() => setHoveredId(cat.id)}
                                onHoverEnd={() => setHoveredId(null)}
                            >
                                <Link href={cat.href} className={styles.panelLink}>
                                    <div
                                        className={styles.panel}
                                        style={{ '--panel-color': cat.color }}
                                    >
                                        {/* Speed lines on hover */}
                                        <div className={styles.speedLines} />

                                        {/* Top numbering */}
                                        <div className={styles.panelTop}>
                                            <span className={styles.panelNum}>{cat.num}</span>
                                            <div className={styles.panelBadge} style={{ background: cat.color }}>
                                                <IconComp size={16} strokeWidth={2} />
                                                <span>{cat.projectCount}</span>
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className={styles.panelImageWrap}>
                                            <Image
                                                src={cat.image}
                                                alt={cat.title}
                                                fill
                                                unoptimized
                                                className={styles.panelImage}
                                            />
                                            <div className={styles.panelImageOverlay} />

                                            {/* SFX burst */}
                                            <div className={styles.sfxBurst} style={{ color: cat.color }}>
                                                {cat.sfx}
                                            </div>
                                        </div>

                                        {/* Tagline bubble on hover */}
                                        <div className={styles.taglineBubble}>
                                            {cat.tagline}
                                        </div>

                                        {/* Content */}
                                        <div className={styles.panelContent}>
                                            <span className={styles.panelCategory} style={{ color: cat.color }}>
                                                {cat.category}
                                            </span>
                                            <h2 className={styles.panelTitle}>{cat.title}</h2>
                                            <p className={styles.panelDesc}>{cat.description}</p>
                                            <div className={styles.panelCta}>
                                                <span>Explore</span>
                                                <ArrowRight size={18} />
                                            </div>
                                        </div>

                                        {/* Bottom accent bar */}
                                        <div className={styles.panelAccent} style={{ background: cat.color }} />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom strip */}
                <motion.div
                    className={styles.bottomStrip}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <span>PORTFOLIO × YASH SRIVASTAVA</span>
                    <span className={styles.stripQuote}>Designing Experiences. Crafting Impact.</span>
                    <span>© 2025</span>
                </motion.div>
            </div>

            <div className={styles.ctaSection}>
                <ContactCTA />
            </div>
        </main>
    );
}
