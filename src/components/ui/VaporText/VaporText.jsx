"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { getRandomIndicChar } from "../../../lib/indicChars";
import styles from "./VaporText.module.css";

/**
 * VaporText — Reverse Explosion Text Effect (Performance-Optimized)
 *
 * Uses pure CSS transitions (GPU-composited) instead of Framer Motion springs.
 * All characters transition simultaneously via class changes — zero per-frame
 * React re-renders during animation.
 *
 * Each character starts scattered far away, flies back to position with CSS
 * transition, cycling through Indian-script characters during flight.
 */

const CYCLES = 4;
const CYCLE_MS = 70;
const STAGGER_PER_CHAR = 30;
const FLASH_MS = 280;
const SCATTER_RADIUS = 400;

export default function VaporText({
    text,
    delay = 0,
    speed = 1,
    isGlitching = false,
    className = "",
    as: Tag = "span",
    onComplete,
    trigger = true,
}) {
    const chars = useMemo(() => text.split(""), [text]);
    const centerIdx = useMemo(() => Math.floor(chars.length / 2), [chars]);

    // Deterministic pseudo-random function to avoid hydration mismatch between server and client
    const pseudoRandom = useCallback((seed) => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }, []);

    // Pre-compute scatter positions deterministically
    const scatterData = useMemo(() => {
        return chars.map((c, i) => {
            if (c === " ") return null;
            const rand1 = pseudoRandom(i * 13.1);
            const rand2 = pseudoRandom(i * 27.2);
            const rand3 = pseudoRandom(i * 31.3);
            const rand4 = pseudoRandom(i * 47.4);

            const angle = rand1 * Math.PI * 2;
            const dist = (0.5 + rand2 * 0.5) * SCATTER_RADIUS;
            return {
                x: (Math.cos(angle) * dist).toFixed(3),
                y: (Math.sin(angle) * dist).toFixed(3),
                rotate: ((rand3 - 0.5) * 540).toFixed(3),
                scale: (1.6 + rand4 * 1.2).toFixed(3),
            };
        });
    }, [chars, pseudoRandom]);

    // Phase tracking: 'idle' | 'scattered' | 'flying' | 'flash' | 'done' | 'glitching'
    const [globalPhase, setGlobalPhase] = useState("idle");
    // Per-char display characters (only changes during cycling)
    const [displayChars, setDisplayChars] = useState(() => chars.map(() => "\u00A0"));
    // Per-char phase for staggered timing
    const [charPhases, setCharPhases] = useState(() => chars.map(() => "idle"));

    useEffect(() => {
        if (!trigger) return;

        // Reset state on start to support React 18 Strict Mode and Next.js client routing remounts
        setGlobalPhase("idle");
        setDisplayChars(chars.map(() => "\u00A0"));
        setCharPhases(chars.map(() => "idle"));

        // Reduced motion
        if (typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setDisplayChars([...chars]);
            setCharPhases(chars.map(() => "done"));
            setGlobalPhase("done");
            onComplete?.();
            return;
        }

        const timers = [];

        // Step 1: Scatter — show initial Indian chars at scattered positions
        timers.push(setTimeout(() => {
            setDisplayChars(chars.map((c) => c === " " ? " " : getRandomIndicChar()));
            setCharPhases(chars.map(() => "scattered"));
            setGlobalPhase("scattered");
        }, delay));

        // Step 2: For each char, schedule fly-in and cycling (staggered from center)
        chars.forEach((finalChar, i) => {
            if (finalChar === " ") return;

            const distFromCenter = Math.abs(i - centerIdx);
            const charDelay = delay + (80 + distFromCenter * STAGGER_PER_CHAR) / speed;

            // Start flying (CSS transition kicks in)
            timers.push(setTimeout(() => {
                setCharPhases((prev) => {
                    const n = [...prev];
                    n[i] = "flying";
                    return n;
                });
            }, charDelay));

            // Cycle through Indian chars during flight
            for (let c = 1; c <= CYCLES; c++) {
                timers.push(setTimeout(() => {
                    setDisplayChars((prev) => {
                        const n = [...prev];
                        if (c < CYCLES) {
                            n[i] = getRandomIndicChar();
                        } else {
                            n[i] = finalChar;
                        }
                        return n;
                    });
                    if (c === CYCLES) {
                        setCharPhases((prev) => {
                            const n = [...prev];
                            n[i] = "flash";
                            return n;
                        });
                    }
                }, charDelay + (c * CYCLE_MS) / speed));
            }

            // Settle
            timers.push(setTimeout(() => {
                setCharPhases((prev) => {
                    const n = [...prev];
                    n[i] = "done";
                    return n;
                });
            }, charDelay + (CYCLES * CYCLE_MS + FLASH_MS) / speed));
        });

        // Handle spaces
        chars.forEach((c, i) => {
            if (c === " ") {
                timers.push(setTimeout(() => {
                    setCharPhases((prev) => {
                        const n = [...prev];
                        n[i] = "done";
                        return n;
                    });
                }, delay + 50 / speed));
            }
        });

        // onComplete
        const maxDist = Math.max(...chars.map((_, i) => Math.abs(i - centerIdx)));
        const totalDuration = delay + (80 + maxDist * STAGGER_PER_CHAR + CYCLES * CYCLE_MS + FLASH_MS + 100) / speed;
        timers.push(setTimeout(() => {
            setGlobalPhase("done");
            onComplete?.();
        }, totalDuration));

        return () => timers.forEach(clearTimeout);
    }, [trigger, chars, centerIdx, delay, onComplete, speed]);

    // Handle Glitch effect (CSS time distortion handles the animation now)
    useEffect(() => {
        if (!isGlitching && globalPhase === "done" && displayChars.join("") !== text) {
            // Revert any leftover scattered chars just in case
            setDisplayChars([...chars]);
        }
    }, [isGlitching, globalPhase, chars, text, displayChars]);

    const allDone = globalPhase === "done";

    return (
        <Tag className={`${styles.vaporWrap} ${allDone ? className : ""}`}>
            {chars.map((originalChar, i) => {
                if (originalChar === " ") {
                    return <span key={i} className={styles.vaporSpace}>{"\u00A0"}</span>;
                }

                const scatter = scatterData[i];
                const basePhase = charPhases[i];
                // Override phase to glitching if active and done
                const phase = (isGlitching && basePhase === "done") ? "glitching" : basePhase;

                // Compute CSS custom properties for scatter position
                const charStyle = (phase === "idle" || phase === "scattered") && scatter
                    ? {
                        "--tx": `${scatter.x}px`,
                        "--ty": `${scatter.y}px`,
                        "--rot": `${scatter.rotate}deg`,
                        "--sc": scatter.scale,
                        "--speed": speed,
                        "--g-delay": `-${i * 0.05}s`,
                    }
                    : {
                        "--tx": "0px",
                        "--ty": "0px",
                        "--rot": "0deg",
                        "--sc": phase === "flash" ? 1.05 : 1,
                        "--speed": speed,
                        "--g-delay": `-${i * 0.05}s`,
                    };

                const phaseClass =
                    phase === "scattered" ? styles.scattered
                    : phase === "flying" ? styles.flying
                    : phase === "flash" ? styles.flash
                    : phase === "glitching" ? styles.glitching
                    : phase === "done" ? styles.done
                    : styles.idle;

                return (
                    <span
                        key={i}
                        className={`${styles.vaporChar} ${phaseClass}`}
                        style={charStyle}
                    >
                        {displayChars[i]}
                    </span>
                );
            })}
        </Tag>
    );
}
