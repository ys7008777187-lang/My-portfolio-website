"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Profile.module.css";
import { MapPin, Mail, Briefcase } from "lucide-react";
import profileData from "../../../data/profile.json";
import { getAssetUrl } from "../../../lib/assetUrl";

const stats = [
    { 
        value: "2+", 
        label: "YEARS OF\nEXPERIENCE", 
        sfx: "⚡",
        power: "POWER 01",
        bottomIcon: "👊",
        bottomText: "YEARS OF LEARNING.\nCRAFTING. EVOLVING."
    },
    { 
        value: "30+", 
        label: "PROJECTS\nCOMPLETED", 
        sfx: "💥",
        power: "POWER 02",
        bottomIcon: "🪄",
        bottomText: "IDEAS TURNED INTO\nREAL-WORLD IMPACT."
    },
    { 
        value: "11", 
        label: "HAPPY\nCLIENTS", 
        sfx: "🔥",
        power: "POWER 03",
        bottomIcon: "🤝",
        bottomText: "TRUSTED BY AMAZING\nPEOPLE & BRANDS."
    },
];

const comicEntrance = {
    hidden: { opacity: 0, scale: 0.5, rotate: -8 },
    visible: (i) => ({
        opacity: 1, scale: 1, rotate: 0,
        transition: { delay: 0.3 + i * 0.15, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
    })
};

const textStagger = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { 
            staggerChildren: 0.15,
            delayChildren: 0.2
        } 
    }
};

const textFadeIn = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
        opacity: 1, x: 0, 
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    }
};

export default function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setProfile(profileData);
    }, []);

    if (!profile) return null;

    return (
        <section className={styles.section}>
            <div className={styles.speedLinesBg} />

            <div className={styles.container}>
                {/* ═══ MAIN PANEL — image with text overlaid ═══ */}
                <motion.div
                    className={styles.heroPanel}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Full-bleed background image */}
                    <div className={styles.heroBg}>
                        <img
                            src={getAssetUrl(profile.image)}
                            alt="Yash Srivastava - Comic Art Portrait"
                            style={{ 
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover", 
                                objectPosition: "center top" 
                            }}
                        />
                        <div className={styles.heroBgHalftone} />
                        <div className={styles.heroBgVignette} />
                    </div>

                    {/* Dark gradient — left side for text readability */}
                    <div className={styles.heroGradientLeft} />
                    {/* Bottom gradient */}
                    <div className={styles.heroGradientBottom} />

                    {/* Tape corners */}
                    <div className={styles.tapeCornerTL} />
                    <div className={styles.tapeCornerTR} />

                    {/* ── All text content overlaid on image ── */}
                    <div className={styles.heroContent}>
                        {/* Issue banner */}
                        <motion.div
                            className={styles.issueBanner}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <span className={styles.issueLabel}>ISSUE</span>
                            <span className={styles.issueNum}>#01</span>
                            <span className={styles.issueSep}>—</span>
                            <span className={styles.issueTitle}>ORIGIN STORY</span>
                        </motion.div>

                        <motion.div
                            className={styles.textBlock}
                            variants={textStagger}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.span variants={textFadeIn} className={styles.aboutLabel}>ABOUT ME</motion.span>

                            <motion.h1 variants={textFadeIn} className={styles.tagline}>
                                <span className={styles.taglineSmall}>DESIGNING WITH</span>
                                <span className={styles.taglineRow}>
                                    <span className={styles.taglineHeart}>HEART</span>
                                    <span className={styles.taglineSmall}> AND</span>
                                </span>
                                <span className={styles.taglineCuriosity}>CURIOSITY.</span>
                            </motion.h1>

                            {/* Speech bubble */}
                            <motion.div
                                className={styles.speechBubble}
                                variants={textFadeIn}
                            >
                                EVERY PIXEL HAS A <strong>PURPOSE!</strong>
                            </motion.div>

                            {/* Bio */}
                            <motion.p variants={textFadeIn} className={styles.bio}>{profile.bio1}</motion.p>
                            <motion.p variants={textFadeIn} className={styles.bio}>{profile.bio2}</motion.p>

                            {/* Info badges */}
                            <motion.div variants={textFadeIn} className={styles.infoBadges}>
                                <div className={styles.infoBadge}>
                                    <MapPin size={13} />
                                    <span>{profile.location}</span>
                                </div>
                                <div className={styles.infoBadge}>
                                    <Briefcase size={13} />
                                    <span>{profile.workingAt}</span>
                                </div>
                            </motion.div>
                            <motion.div variants={textFadeIn} className={styles.infoBadges}>
                                <div className={styles.infoBadge}>
                                    <Mail size={13} />
                                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Name tag — bottom right */}
                    <motion.div
                        className={styles.nameTag}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <span className={styles.nameTagName}>{profile.name}</span>
                        <span className={styles.nameTagRole}>{profile.role}</span>
                    </motion.div>

                    {/* KAPOW burst — top right */}
                    <motion.span
                        className={styles.kapowBurst}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                        KAPOW!!
                    </motion.span>

                    {/* Bottom caption bar */}
                    <div className={styles.captionBar}>
                        <span className={styles.captionIcon}>🎨</span>
                        <span className={styles.captionText}>THE ORIGIN ARC — WHERE CODE MEETS CREATIVITY</span>
                        <span className={styles.captionTag}>★ EST. 2022</span>
                    </div>
                </motion.div>

                {/* ═══ STATS ROW ═══ */}
                <div className={styles.statsRow}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className={styles.statItem}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={comicEntrance}
                        >
                            <div className={styles.powerTag}>{stat.power}</div>
                            <span className={styles.statSfx}>{stat.sfx}</span>
                            <div className={styles.statContent}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <div className={styles.statLabelWrapper}>
                                    <div className={styles.statLabelBg}>
                                        {stat.label.split('\n').map((line, idx) => (
                                            <span key={idx}>{line}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.statBottomBox}>
                                <div className={styles.statBottomIcon}>{stat.bottomIcon}</div>
                                <div className={styles.statBottomText}>
                                    {stat.bottomText.split('\n').map((line, idx) => (
                                        <span key={idx}>{line}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
