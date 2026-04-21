"use client";
import React, { useState, useEffect, forwardRef, useRef } from "react";
import Image from "next/image";
import { Hand } from "lucide-react";
import styles from "./CreativeBook.module.css";
import HTMLFlipBook from "react-pageflip";

const Page = forwardRef((props, ref) => {
    // Determine left/right for spine shadow direction
    const isLeft = props.number % 2 === 0 && props.number !== 0; 
    
    return (
        <div className={`${styles.pageItem} ${isLeft ? styles.pageLeft : styles.pageRight}`} ref={ref}>
            <div className={styles.pageContent}>
                <Image
                    src={props.image}
                    alt={`Page ${props.number + 1}`}
                    fill
                    unoptimized
                    className={styles.pageImage}
                />
            </div>
        </div>
    );
});

Page.displayName = "Page";

export default function CreativeBook({ images, title, isComic, bookFormat = "square" }) {
    const [isMounted, setIsMounted] = useState(false);
    const [dynamicMax, setDynamicMax] = useState({ width: 600, height: 700 });
    const bookRef = useRef(null);

    const isLandscape = bookFormat === "landscape";

    useEffect(() => {
        setIsMounted(true);
        const updateSize = () => {
             // Calculate a safe max height based on the viewport, leaving room for margins/headers
             const safeMaxHeight = Math.min(window.innerHeight * 0.75, isLandscape ? 600 : 700);
             // Maintain aspect ratio
             const safeMaxWidth = isLandscape 
                ? safeMaxHeight * (480 / 340) 
                : safeMaxHeight * (375 / 560);
                
             setDynamicMax({ width: safeMaxWidth, height: safeMaxHeight });
        };
        
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [isLandscape]);

    if (!isMounted) return null;

    // Book sizing: aspect ratio drives the layout, stretch mode fills the container
    const baseWidth = isLandscape ? 480 : 375;
    const baseHeight = isLandscape ? 340 : 560;

    const minWidth = isLandscape ? 280 : 250;
    const minHeight = isLandscape ? 200 : 350;

    // Physics adjustments for Coffee Table Books (thicker, heavier glossy paper)
    const shadowOpacity = isLandscape ? 0.25 : 0.6; // Less shadow depth per bend
    const flipTime = isLandscape ? 1200 : 1000; // Slower, heavier page turns

    return (
        <div className={styles.bookContainer}>
            <div className={styles.dragHint}>
                <Hand size={18} />
                <span>Grab and drag the corner of the page to flip</span>
            </div>

            <div className={styles.bookViewport}>
                <HTMLFlipBook
                    width={baseWidth}
                    height={baseHeight}
                    size="stretch"
                    minWidth={minWidth}
                    maxWidth={dynamicMax.width}
                    minHeight={minHeight}
                    maxHeight={dynamicMax.height}
                    maxShadowOpacity={shadowOpacity}
                    flippingTime={flipTime}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="flipbook"
                    ref={bookRef}
                >
                    {images.map((src, i) => (
                        <Page key={i} number={i} image={src} isLastPage={i === images.length - 1} />
                    ))}
                </HTMLFlipBook>
            </div>
        </div>
    );
}
