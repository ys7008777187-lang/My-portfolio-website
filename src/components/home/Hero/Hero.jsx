"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAssetUrl } from "@/lib/assetUrl";
import styles from "./Hero.module.css";
import {
    ArrowRight,
    ChevronDown,
    Linkedin,
    Instagram,
    Dribbble,
} from "lucide-react";

/* ── Tool SVG icons (inline so they never break) ── */
const FigmaIcon = () => (
    <svg viewBox="0 0 38 57" width="16" height="16" fill="none"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg>
);
const FramerIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF"/></svg>
);
const PremiereProIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="#9999FF"><path fillRule="evenodd" clipRule="evenodd" d="M2.8 0h18.4C22.74 0 24 1.26 24 2.8v18.4c0 1.54-1.26 2.8-2.8 2.8H2.8C1.26 24 0 22.74 0 21.2V2.8C0 1.26 1.26 0 2.8 0zM9.71 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01v3.36c.11.01.3.01.49.01.41 0 .82-.1 1.18-.29.43-.24.71-.71.71-1.42.01-.63-.24-1.15-.52-1.47zm.46 4.29c-.55.27-1.19.39-1.87.39-.1 0-.32 0-.49-.01v3.93H6.58V6.87c.55-.08 1.31-.14 2.35-.14.74 0 1.28.12 1.64.36.49.28.83.83.83 1.62 0 .69-.23 1.34-.77 1.77-.15.12-.32.21-.46.23zm4.28-2.96v1.38c.11-.01.25-.01.43-.01.69 0 1.13.1 1.42.31.27.19.4.52.4.97V18h-1.51v-5.35c0-.25-.05-.42-.18-.53-.13-.11-.34-.17-.63-.17-.12 0-.22 0-.33.01V18h-1.57V9.75h1.97z"/></svg>
);
const CanvaIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none"><rect width="24" height="24" rx="4" fill="#00C4CC"/><path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm2.8 12.3c-1.1 0-1.8-.6-2.4-1.3-.4.8-1.1 1.3-2.1 1.3-1.6 0-2.6-1.3-2.6-3.2 0-2.2 1.4-3.6 3.1-3.6 1 0 1.7.5 2.1 1.2v-1.1h1.5v5.3c0 .8.4 1.2 1 1.2.5 0 .9-.3 1.1-.7l.8.6c-.4.7-1.3 1.1-2.5 1.1zm-3.5-3.3c0-1.1-.7-2-1.7-2s-1.7.9-1.7 2 .7 2 1.7 2 1.7-.9 1.7-2z" fill="#FFFFFF"/></svg>
);
const IllustratorIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="#FF9A00"><path fillRule="evenodd" clipRule="evenodd" d="M2.8 0h18.4C22.74 0 24 1.26 24 2.8v18.4c0 1.54-1.26 2.8-2.8 2.8H2.8C1.26 24 0 22.74 0 21.2V2.8C0 1.26 1.26 0 2.8 0zm7.78 15.38h-4.3L5.53 18H3.82l4.05-11.13h1.83L13.77 18h-1.79l-.4-2.62zm-3.86-1.36h3.42l-1.7-5.53-1.72 5.53zm8.38-4.3c-.59 0-1.01-.44-1.01-1.01 0-.58.43-1.01 1.03-1.01.6 0 1.01.43 1.01 1.01 0 .57-.42 1.01-1.03 1.01zm-.79 8.28V11.03h1.57V18h-1.57z"/></svg>
);
const PhotoshopIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="#31A8FF"><path fillRule="evenodd" clipRule="evenodd" d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01v3.36c.11.01.3.01.49.01.41 0 .82-.1 1.18-.29.43-.24.71-.71.71-1.42.01-.63-.23-1.15-.52-1.47zM2.8 0h18.4C22.74 0 24 1.26 24 2.8v18.4c0 1.54-1.26 2.8-2.8 2.8H2.8C1.26 24 0 22.74 0 21.2V2.8C0 1.26 1.26 0 2.8 0zm6.49 12.71c-.55.27-1.19.39-1.87.39-.1 0-.32 0-.49-.01v3.93H5.7V6.87c.55-.08 1.31-.14 2.35-.14.74 0 1.28.12 1.64.36.49.28.83.83.83 1.62 0 .69-.23 1.34-.77 1.77-.15.12-.32.21-.46.23zm7.03-1.18c-.27-.14-.64-.25-1.11-.25-.87 0-1.47.67-1.47 1.68 0 1.05.57 1.66 1.47 1.66.44 0 .76-.1 1.08-.25v1.24c-.36.18-.81.27-1.38.27-1.64 0-2.69-1.15-2.69-2.95 0-1.76 1.05-3.01 2.82-3.01.55 0 1.01.11 1.28.25v1.36z"/></svg>
);

const stackTools = [
    { name: "Figma", Icon: FigmaIcon },
    { name: "Framer", Icon: FramerIcon },
    { name: "Premiere Pro", Icon: PremiereProIcon },
    { name: "Canva", Icon: CanvaIcon },
    { name: "Illustrator", Icon: IllustratorIcon },
    { name: "Photoshop", Icon: PhotoshopIcon }
];

export default function Hero() {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Mouse parallax for 3D depth
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 2;
            const y = (e.clientY / innerHeight - 0.5) * 2;
            setMousePos({ x, y });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Ambient golden particle canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animId;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        const onResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", onResize);

        const particles = Array.from({ length: 42 }).map(() => ({
            x: Math.random() * w,
            y: Math.random() * h,
            size: Math.random() * 2.2 + 0.5,
            speedY: Math.random() * 0.45 + 0.12,
            speedX: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.55 + 0.2,
            fadeSpeed: Math.random() * 0.008 + 0.003,
            fadeDir: Math.random() > 0.5 ? 1 : -1,
            color: Math.random() > 0.3 ? "226,183,20" : "255,255,255",
        }));

        const render = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach((p) => {
                p.y -= p.speedY;
                p.x += p.speedX;
                p.opacity += p.fadeSpeed * p.fadeDir;
                if (p.opacity > 0.75) { p.opacity = 0.75; p.fadeDir = -1; }
                else if (p.opacity < 0.12) { p.opacity = 0.12; p.fadeDir = 1; }
                if (p.y < 0) { p.y = h + 10; p.x = Math.random() * w; }
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
                ctx.shadowBlur = 6;
                ctx.shadowColor = `rgba(${p.color}, 0.7)`;
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            animId = requestAnimationFrame(render);
        };
        render();

        return () => {
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <section className={styles.hero}>
            {/* === VIDEO BACKGROUND with 3D parallax === */}
            <div
                className={styles.bgLayer}
                style={{
                    transform: `scale(1.06) translate3d(${mousePos.x * -12}px, ${mousePos.y * -8}px, 0)`,
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className={styles.bgVideo}
                >
                    <source src={getAssetUrl("/videos/hero-bg.mp4")} type="video/mp4" />
                </video>

                {/* Ambient portal glow that tracks mouse */}
                <div
                    className={styles.portalGlow}
                    style={{
                        transform: `translate3d(${mousePos.x * 15}px, ${mousePos.y * 10}px, 0)`,
                    }}
                />

                {/* Cinematic overlays */}
                <div className={styles.vignette} />
                <div className={styles.halftone} />
            </div>

            {/* Particle canvas */}
            <canvas ref={canvasRef} className={styles.canvas} />

            {/* === MAIN CONTENT with 3D perspective === */}
            <div className={styles.contentWrapper}>
                {/* LEFT COLUMN — text & CTA */}
                <div
                    className={styles.leftColumn}
                    style={{
                        transform: `perspective(1000px) rotateY(${mousePos.x * 2}deg) rotateX(${mousePos.y * -2}deg) translate3d(${mousePos.x * 5}px, ${mousePos.y * 3}px, 0)`,
                    }}
                >
                    {/* Comic Speech Bubble */}
                    <motion.div
                        className={styles.speechBubble}
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <span className={styles.bubbleText}>
                            WELCOME TO<br />MY PORTFOLIO
                        </span>
                        <div className={styles.bubbleTail} />
                    </motion.div>

                    {/* Massive 3D Headline */}
                    <motion.h1
                        className={styles.headline}
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.4 }}
                    >
                        <motion.span whileHover={{ x: 6 }} className={styles.headlineLine}>DESIGNING DIGITAL</motion.span>
                        <motion.span whileHover={{ x: 6 }} className={styles.headlineLine}>PRODUCTS, SYSTEMS</motion.span>
                        <motion.span whileHover={{ x: 6 }} className={`${styles.headlineLine} ${styles.impact}`}>
                            &amp; EXPERIENCES.
                            <span className={styles.impactUnderline} />
                        </motion.span>
                    </motion.h1>

                    {/* Profile Info Box */}
                    <motion.div
                        className={styles.infoBox}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className={styles.infoContent}>
                            <p className={styles.name}>
                                I&apos;M <span className={styles.nameHighlight}>YASH SRIVASTAVA</span>
                            </p>
                            <p className={styles.role}>PRODUCT DESIGNER</p>
                        </div>
                        <div className={styles.signature}>
                            <span>YS.</span>
                        </div>
                    </motion.div>

                    {/* Availability Status Badge */}
                    <motion.div
                        className={styles.availabilityBadge}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75, duration: 0.5 }}
                    >
                        <span className={styles.statusPulseDot} />
                        <span className={styles.statusBadgeText}>AVAILABLE FOR FULL-TIME ROLES</span>
                        <span className={styles.statusLocation}>• Bangalore, India</span>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        className={styles.ctaWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Link href="/work" className={styles.ctaButton}>
                            <span className={styles.ctaText}>EXPLORE MY WORK</span>
                            <span className={styles.ctaArrow}>
                                <ArrowRight size={20} />
                            </span>
                        </Link>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN — 3D Floating Process Panels */}
                <div
                    className={styles.rightColumn}
                    style={{
                        transform: `perspective(1200px) rotateY(${mousePos.x * -5 - 14}deg) rotateX(${mousePos.y * 4 + 3}deg) translate3d(${mousePos.x * -8}px, ${mousePos.y * -6}px, 0)`,
                    }}
                >
                    {[
                        { step: "01", label: "STRATEGY" },
                        { step: "02", label: "WIREFRAMES" },
                        { step: "03", label: "UI DESIGN" },
                        { step: "04", label: "RESEARCH" }
                    ].map(({ step, label }, idx) => (
                        <motion.div
                            key={label}
                            className={styles.floatingPanel}
                            initial={{ opacity: 0, x: 70, rotateY: -20 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{
                                delay: 0.9 + idx * 0.12,
                                type: "spring",
                                stiffness: 100,
                            }}
                            whileHover={{
                                scale: 1.08,
                                x: -10,
                                rotateY: -4,
                                transition: { duration: 0.25 },
                            }}
                        >
                            {/* Panel Mini Preview */}
                            <div className={styles.panelVisual}>
                                {label === "STRATEGY" && (
                                    <div className={styles.strategyGfx}>
                                        <span className={styles.dot} />
                                        <span className={styles.gfxLine} />
                                        <span className={styles.dotActive} />
                                        <span className={styles.gfxLine} />
                                        <span className={styles.dot} />
                                    </div>
                                )}
                                {label === "WIREFRAMES" && (
                                    <div className={styles.wireframeGfx}>
                                        <div className={styles.wfBar} />
                                        <div className={styles.wfRow}>
                                            <div className={styles.wfBox} />
                                            <div className={styles.wfLines}>
                                                <div className={styles.wfLineLong} />
                                                <div className={styles.wfLineShort} />
                                            </div>
                                        </div>
                                        <div className={styles.wfGrid}>
                                            <div className={styles.wfCell} />
                                            <div className={styles.wfCell} />
                                            <div className={styles.wfCell} />
                                        </div>
                                    </div>
                                )}
                                {label === "UI DESIGN" && (
                                    <div className={styles.uiGfx}>
                                        <div className={styles.uiTopBar}>
                                            <span className={styles.uiDot} />
                                            <span className={styles.uiDot} />
                                            <span className={styles.uiDot} />
                                        </div>
                                        <div className={styles.uiBody}>
                                            <div className={styles.uiChart}>
                                                <div className={styles.bar1} />
                                                <div className={styles.bar2} />
                                                <div className={styles.bar3} />
                                            </div>
                                            <div className={styles.uiBtn}>UI</div>
                                        </div>
                                    </div>
                                )}
                                {label === "RESEARCH" && (
                                    <div className={styles.researchGfx}>
                                        <div className={styles.persona}>
                                            <div className={styles.avatar} />
                                            <div className={styles.statLines}>
                                                <div className={styles.statLong} />
                                                <div className={styles.statShort} />
                                            </div>
                                        </div>
                                        <div className={styles.tags}>
                                            <span className={styles.tag}>98%</span>
                                            <span className={styles.tag}>DATA</span>
                                        </div>
                                    </div>
                                )}
                                <div className={styles.panelShine} />
                            </div>
                            {/* Unified High-Contrast Comic Paper Tag */}
                            <div className={styles.panelTag}>
                                <span className={styles.tagStep}>{step}</span>
                                <span className={styles.tagLabel}>{label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* === BOTTOM AREA — Stack Snapshot (Left) + Scroll Indicator (Right) === */}
            <div className={styles.bottomArea}>
                <motion.div
                    className={styles.stackBox}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <span className={styles.toolsTextLabel}>STACK:</span>
                    <div className={styles.toolIconsContainer}>
                        {stackTools.map((tool) => (
                            <div key={tool.name} className={styles.toolIconCard} aria-label={tool.name}>
                                <tool.Icon />
                                <span className={styles.toolNameTooltip}>{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={styles.scrollArea}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <ChevronDown size={22} className={styles.scrollIcon} />
                    </motion.div>
                </motion.div>
            </div>

            {/* === VERTICAL SOCIAL BAR === */}
            <motion.div
                className={styles.socialBar}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
            >
                <a href="https://www.linkedin.com/in/yashsrivastavaa035/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                    <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/chitranga420/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                    <Instagram size={20} />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Dribbble">
                    <Dribbble size={20} />
                </a>
            </motion.div>
        </section>
    );
}
