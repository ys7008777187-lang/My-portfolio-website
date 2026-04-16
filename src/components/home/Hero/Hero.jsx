"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ============================================================
   TEXT SCRAMBLE — Decode effect with geometric symbols
   ============================================================ */
const GLYPHS = "◆▲●◇▼○□△▽◈◉▪▫";

function TextScramble({ text, delay = 0, className, as: Tag = "span" }) {
    const [display, setDisplay] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        let timeout;
        let frame;
        let iteration = 0;
        const chars = text.split("");
        const totalChars = chars.length;
        const stagger = 30; // ms per character lock-in

        timeout = setTimeout(() => {
            const tick = () => {
                const locked = Math.floor(iteration / 2);
                const result = chars.map((char, i) => {
                    if (char === " ") return " ";
                    if (i < locked) return char;
                    return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                }).join("");

                setDisplay(result);
                iteration++;

                if (locked < totalChars) {
                    frame = requestAnimationFrame(() => {
                        setTimeout(tick, stagger);
                    });
                } else {
                    setDisplay(text);
                    setDone(true);
                }
            };
            tick();
        }, delay);

        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(frame);
        };
    }, [text, delay]);

    return <Tag className={`${className || ""} ${done ? styles.scrambleDone : styles.scrambleActive}`}>{display || "\u00A0"}</Tag>;
}

/* ============================================================
   MORPHING BLOB — SVG with animated feTurbulence
   ============================================================ */
function MorphingBlob({ mouseX, mouseY }) {
    const blobRef = useRef(null);
    const turbRef = useRef(null);
    const [baseFreq, setBaseFreq] = useState(0.012);

    useEffect(() => {
        let animFrame;
        let time = 0;

        const animate = () => {
            time += 0.003;
            // Organic idle morphing
            const idle = 0.012 + Math.sin(time) * 0.003 + Math.cos(time * 1.7) * 0.002;
            setBaseFreq(idle);

            if (turbRef.current) {
                turbRef.current.setAttribute("baseFrequency", `${idle} ${idle * 0.8}`);
            }
            animFrame = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animFrame);
    }, []);

    // Cursor reactivity — shift blob frequency when mouse moves fast
    const smoothX = useSpring(mouseX, { damping: 30, stiffness: 80 });
    const smoothY = useSpring(mouseY, { damping: 30, stiffness: 80 });
    const blobX = useTransform(smoothX, [-500, 500], [-40, 40]);
    const blobY = useTransform(smoothY, [-400, 400], [-30, 30]);

    return (
        <motion.div className={styles.blobContainer} style={{ x: blobX, y: blobY }}>
            <svg viewBox="0 0 800 800" className={styles.blobSvg} ref={blobRef}>
                <defs>
                    <filter id="morphBlob" x="-50%" y="-50%" width="200%" height="200%">
                        <feTurbulence
                            ref={turbRef}
                            type="fractalNoise"
                            baseFrequency="0.012 0.01"
                            numOctaves="3"
                            seed="2"
                            result="turbulence"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="turbulence"
                            scale="120"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                    <radialGradient id="blobGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(99, 102, 241, 0.35)" />
                        <stop offset="40%" stopColor="rgba(59, 130, 246, 0.2)" />
                        <stop offset="70%" stopColor="rgba(6, 182, 212, 0.1)" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
                <ellipse
                    cx="400"
                    cy="400"
                    rx="250"
                    ry="220"
                    fill="url(#blobGrad)"
                    filter="url(#morphBlob)"
                />
            </svg>
        </motion.div>
    );
}

/* ============================================================
   CURSOR GLOW — Magnetic light with trailing ghosts
   ============================================================ */
function CursorGlow({ mouseX, mouseY }) {
    const springConfig = { damping: 20, stiffness: 150 };
    const glowX = useSpring(mouseX, springConfig);
    const glowY = useSpring(mouseY, springConfig);

    // Trailing ghosts with progressively softer springs
    const ghost1X = useSpring(mouseX, { damping: 25, stiffness: 100 });
    const ghost1Y = useSpring(mouseY, { damping: 25, stiffness: 100 });
    const ghost2X = useSpring(mouseX, { damping: 30, stiffness: 60 });
    const ghost2Y = useSpring(mouseY, { damping: 30, stiffness: 60 });

    return (
        <div className={styles.cursorGlowLayer}>
            <motion.div
                className={`${styles.cursorGhost} ${styles.ghost2}`}
                style={{ x: ghost2X, y: ghost2Y }}
            />
            <motion.div
                className={`${styles.cursorGhost} ${styles.ghost1}`}
                style={{ x: ghost1X, y: ghost1Y }}
            />
            <motion.div
                className={styles.cursorGlowOrb}
                style={{ x: glowX, y: glowY }}
            />
        </div>
    );
}

/* ============================================================
   HERO COMPONENT
   ============================================================ */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }
});

export default function Hero() {
    const [available] = useState(true);
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Mouse tracking
    useEffect(() => {
        const handleMouse = (e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            mouseX.set(e.clientX - rect.left - rect.width / 2);
            mouseY.set(e.clientY - rect.top - rect.height / 2);
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, [mouseX, mouseY]);


    return (
        <section className={styles.hero} ref={containerRef}>
            {/* Layer 0: Aurora gradient background */}
            <div className={styles.aurora}>
                <div className={styles.auroraOrb1} />
                <div className={styles.auroraOrb2} />
                <div className={styles.auroraOrb3} />
            </div>

            {/* Layer 1: Noise + Vignette */}
            <div className={styles.noiseOverlay} />
            <div className={styles.vignetteOverlay} />

            {/* Layer 2: Morphing SVG Blob */}
            <MorphingBlob mouseX={mouseX} mouseY={mouseY} />

            {/* Layer 3: Cursor glow trail */}
            <CursorGlow mouseX={mouseX} mouseY={mouseY} />

            {/* Layer 5: Content */}
            <div className={styles.heroContent}>
                {/* Status Badge */}
                <motion.div
                    className={`${styles.badge} ${available === false ? styles.unavailable : ""}`}
                    {...fadeUp(0.2)}
                >
                    <span className={styles.badgeDot} />
                    {available === false ? "Currently unavailable" : "Available for projects"}
                </motion.div>

                {/* Headline with scramble decode */}
                <motion.h1
                    className={styles.headline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                >
                    <TextScramble text="I design interfaces" delay={600} className={styles.headlineLine1} as="span" />
                    <br />
                    <TextScramble text="that feel alive." delay={1200} className={styles.headlineGradient} as="span" />
                </motion.h1>

                {/* Subtitle */}
                <motion.p className={styles.subtitle} {...fadeUp(1.8)}>
                    <span className={styles.subtitleEmphasis}>UI/UX Designer</span> crafting premium digital
                    experiences — where aesthetics meet intuition and every pixel earns its place.
                </motion.p>

                {/* CTAs */}
                <motion.div className={styles.ctas} {...fadeUp(2.0)}>
                    <Link href="/work" className={styles.ctaPrimary}>
                        <span>View My Work</span>
                        <ArrowRight size={18} />
                    </Link>
                    <Link href="/contact" className={styles.ctaSecondary}>
                        <span>Let&apos;s Talk</span>
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>


            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.6 }}
            >
                <span>Scroll</span>
                <motion.div
                    className={styles.scrollLine}
                    animate={{ scaleY: [1, 0.4, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
}
