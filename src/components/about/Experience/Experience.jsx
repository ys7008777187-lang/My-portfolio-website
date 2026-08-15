"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollVaporText from "../../ui/ScrollVaporText/ScrollVaporText";
import styles from "./Experience.module.css";
import { MapPin, Calendar, X } from "lucide-react";
import experienceData from "../../../data/experience.json";
import { getAssetUrl } from "../../../lib/assetUrl";

/* ── Wind sway presets ── */
const SWAY = [
    { amp: 2.6, dur: 3.8, delay: 0 },
    { amp: 2.0, dur: 4.3, delay: 0.5 },
    { amp: 3.0, dur: 3.4, delay: 0.3 },
    { amp: 1.8, dur: 4.6, delay: 0.7 },
    { amp: 2.4, dur: 3.9, delay: 0.2 },
    { amp: 2.8, dur: 4.1, delay: 0.6 },
    { amp: 2.2, dur: 3.6, delay: 0.4 },
];

/* ── Photo gradients (Updated for Comic Brutalism) ── */
const PHOTO_FILLS = [
    { gradient: "var(--color-comic-yellow)", accent: "var(--color-comic-border)" },
    { gradient: "var(--color-comic-cyan)", accent: "var(--color-comic-border)" },
    { gradient: "var(--color-comic-red)", accent: "var(--color-comic-border)" },
    { gradient: "var(--color-comic-green)", accent: "var(--color-comic-border)" },
    { gradient: "var(--color-comic-blue)", accent: "var(--color-comic-border)" },
];

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        setExperiences(
            experienceData.map((d) => ({
                company: d.company,
                role: d.role,
                duration: d.duration,
                location: d.location || "Remote",
                current: d.current || false,
                highlights: d.description ? d.description.split("\n") : [],
            }))
        );
    }, []);

    /* Lock body scroll when popup is open */
    useEffect(() => {
        if (activeIndex >= 0) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [activeIndex]);

    const activeExp = activeIndex >= 0 ? experiences[activeIndex] : null;
    const activeFill = activeIndex >= 0 ? PHOTO_FILLS[activeIndex % PHOTO_FILLS.length] : null;

    const scrollRef = useRef(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.label}>Experience</span>
                    <ScrollVaporText text="Moments Captured" as="h2" className={styles.title} />
                    <p className={styles.subtitle}>Each instant holds a story — tap to flip &amp; reveal</p>
                </motion.div>

                {/* ═══ PHYSICAL WINDOW + CARDS ═══ */}
                <div 
                    className={styles.physicalWindow}
                    style={{ backgroundImage: `url(${getAssetUrl('/images/comic-city-bg.jpg')})` }}
                >
                    <div className={styles.wireSection}>
                        <div className={styles.scrollTrack} ref={scrollRef}>
                            <div className={styles.wire}>
                                <span className={styles.nail} style={{ left: 0 }} />
                                <span className={styles.nail} style={{ right: 0 }} />
                            </div>

                            <motion.div 
                                className={styles.cardsRow}
                                drag="x"
                                dragConstraints={scrollRef}
                                dragElastic={0.2}
                            >
                                {experiences.map((exp, i) => {
                                    const sway = SWAY[i % SWAY.length];
                                    const fill = PHOTO_FILLS[i % PHOTO_FILLS.length];
                                    
                                    const SFX = [
                                        { text: "SWING!", color: "var(--color-comic-yellow)", rotate: "-5deg" },
                                        { text: "SWAY!", color: "#3b82f6", rotate: "3deg" },
                                        { text: "SWING!", color: "var(--color-comic-red)", rotate: "-2deg" },
                                        { text: "SWAY!", color: "var(--color-comic-green)", rotate: "4deg" }
                                    ];
                                    const sfx = SFX[i % SFX.length];

                                    return (
                                        <motion.div
                                            key={exp.company}
                                            className={styles.hangingUnit}
                                            initial={{ opacity: 0, y: -40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-30px" }}
                                            transition={{ delay: i * 0.06, duration: 0.35 }}
                                        >
                                            {/* Sway wrapper */}
                                            <motion.div
                                                className={styles.swayWrapper}
                                                animate={{
                                                    rotate: [
                                                        -sway.amp, sway.amp * 0.7,
                                                        -sway.amp * 0.85, sway.amp,
                                                        -sway.amp * 0.6, sway.amp * 0.8,
                                                        -sway.amp,
                                                    ],
                                                }}
                                                transition={{
                                                    rotate: {
                                                        repeat: Infinity,
                                                        duration: sway.dur,
                                                        ease: "easeInOut",
                                                        delay: sway.delay,
                                                    },
                                                }}
                                            >
                                                <div className={styles.string} />
                                                <div className={styles.clip}>
                                                    <div className={styles.clipBody} />
                                                    <div className={styles.clipJaw} />
                                                </div>

                                                {/* Instax Card (front only) */}
                                                <motion.button
                                                    className={styles.instaxCard}
                                                    onClick={() => setActiveIndex(i)}
                                                    whileHover={{ scale: 1.06, y: -4 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <div
                                                        className={styles.photoArea}
                                                        style={{ background: fill.gradient }}
                                                    >
                                                        <span className={styles.photoAccent}>
                                                            {exp.role.includes("Professor") ? "🎓" : "💼"}
                                                        </span>
                                                        <h3 className={styles.photoCompany}>{exp.company}</h3>
                                                        <p className={styles.photoRole}>{exp.role}</p>
                                                        {exp.current && (
                                                            <span className={styles.currentBadge}>
                                                                Current
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className={styles.caption}>
                                                        <span className={styles.captionDate}>
                                                            <Calendar size={11} /> {exp.duration}
                                                        </span>
                                                        <span className={styles.captionLocation}>
                                                            <MapPin size={11} /> {exp.location}
                                                        </span>
                                                    </div>
                                                    <span className={styles.instaxBrand}>instax</span>
                                                </motion.button>

                                                {/* SFX Text */}
                                                <span 
                                                    className={styles.sfxText} 
                                                    style={{ color: sfx.color, transform: `rotate(${sfx.rotate})` }}
                                                >
                                                    {sfx.text}
                                                </span>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ FLIP POPUP OVERLAY ═══ */}
            <AnimatePresence>
                {activeExp && activeFill && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setActiveIndex(-1)}
                    >
                        {/* The flipping popup card */}
                        <div
                            className={styles.popupStage}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                className={styles.flipCard}
                                initial={{ rotateY: 0, scale: 0.35 }}
                                animate={{ rotateY: 180, scale: 1 }}
                                exit={{ rotateY: 0, scale: 0.35 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 160,
                                    damping: 18,
                                    mass: 0.8,
                                }}
                            >
                                {/* ── FRONT FACE (the small Instax) ── */}
                                <div className={styles.flipFace + " " + styles.flipFront}>
                                    <div className={styles.miniInstax}>
                                        <div
                                            className={styles.miniPhoto}
                                            style={{ background: activeFill.gradient }}
                                        >
                                            <span className={styles.miniIcon}>
                                                {activeExp.role.includes("Professor") ? "🎓" : "💼"}
                                            </span>
                                            <span className={styles.miniName}>{activeExp.company}</span>
                                        </div>
                                        <div className={styles.miniCaption}>
                                            {activeExp.duration}
                                        </div>
                                    </div>
                                </div>

                                {/* ── BACK FACE (the popup detail) ── */}
                                <div className={styles.flipFace + " " + styles.flipBack}>
                                    <div className={styles.popupCard}>
                                        {/* Close button */}
                                        <button
                                            className={styles.closeBtn}
                                            onClick={() => setActiveIndex(-1)}
                                        >
                                            <X size={18} />
                                        </button>

                                        {/* Accent top bar */}
                                        <div
                                            className={styles.popupAccent}
                                            style={{ background: activeFill.accent }}
                                        />

                                        <div className={styles.popupContent}>
                                            <div className={styles.popupHeader}>
                                                <span className={styles.popupIcon}>
                                                    {activeExp.role.includes("Professor") ? "🎓" : "💼"}
                                                </span>
                                                <div>
                                                    <h3
                                                        className={styles.popupCompany}
                                                        style={{ color: activeFill.accent }}
                                                    >
                                                        {activeExp.company}
                                                        {activeExp.current && (
                                                            <span
                                                                className={styles.popupCurrentTag}
                                                            >
                                                                Current
                                                            </span>
                                                        )}
                                                    </h3>
                                                    <p className={styles.popupRole}>{activeExp.role}</p>
                                                </div>
                                            </div>

                                            <div className={styles.popupMeta}>
                                                <span><Calendar size={14} /> {activeExp.duration}</span>
                                                <span><MapPin size={14} /> {activeExp.location}</span>
                                            </div>

                                            <div
                                                className={styles.popupDivider}
                                                style={{ background: `${activeFill.accent}22` }}
                                            />

                                            <ul className={styles.popupHighlights}>
                                                {activeExp.highlights.map((h, hi) => (
                                                    <motion.li
                                                        key={hi}
                                                        initial={{ opacity: 0, x: -12 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.25 + hi * 0.04 }}
                                                    >
                                                        <span
                                                            className={styles.bullet}
                                                            style={{ background: activeFill.accent }}
                                                        />
                                                        {h}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
