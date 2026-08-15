"use client";
import { useState, useEffect, useRef } from "react";
import VaporText from "../VaporText/VaporText";

/**
 * ScrollVaporText — Triggers VaporText when scrolled into view.
 *
 * Fixes:
 * - Uses inline-block wrapper (not display:contents) so IntersectionObserver has a real box
 * - Delays trigger until parent motion.div has likely completed its opacity animation
 *   (extra 300ms buffer after intersection detection)
 */
export default function ScrollVaporText({
    text,
    as = "h2",
    className = "",
    delay = 200,
    threshold = 0.15,
}) {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Delay to let parent motion.div finish its opacity/y animation
                    setTimeout(() => setInView(true), 350);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin: "0px 0px -30px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <span ref={ref} style={{ display: "inline-block", width: "100%" }}>
            <VaporText
                text={text}
                delay={delay}
                className={className}
                as={as}
                trigger={inView}
            />
        </span>
    );
}
