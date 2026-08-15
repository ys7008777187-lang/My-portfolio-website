"use client";
import { useState, useEffect, useRef } from "react";
import { getRandomIndicChar } from "../../../lib/indicChars";
import styles from "./FlowingRibbon.module.css";

/**
 * FlowingRibbon — Persistent floating Indian-script characters.
 * Pure CSS animations, no JS animation loop.
 * Reduced to 25 characters for performance.
 */

const CHAR_COUNT = 25;

function generateChar(id) {
    return {
        id,
        char: getRandomIndicChar(),
        x: Math.random() * 100,
        size: 12 + Math.random() * 12,
        opacity: 0.03 + Math.random() * 0.04,
        duration: 22 + Math.random() * 20,
        delay: Math.random() * -40,
        sway: (Math.random() - 0.5) * 60,
        rotation: Math.random() * 360,
    };
}

export default function FlowingRibbon() {
    const [chars, setChars] = useState([]);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const initial = [];
        for (let i = 0; i < CHAR_COUNT; i++) {
            initial.push(generateChar(i));
        }
        setChars(initial);
    }, []);

    if (chars.length === 0) return null;

    return (
        <div className={styles.ribbon} aria-hidden="true">
            {chars.map((c) => (
                <span
                    key={c.id}
                    className={styles.floatingChar}
                    style={{
                        left: `${c.x}%`,
                        fontSize: `${c.size}px`,
                        animationDuration: `${c.duration}s`,
                        animationDelay: `${c.delay}s`,
                        "--opacity": c.opacity,
                        "--sway": `${c.sway}px`,
                        "--rotation": `${c.rotation}deg`,
                    }}
                >
                    {c.char}
                </span>
            ))}
        </div>
    );
}
