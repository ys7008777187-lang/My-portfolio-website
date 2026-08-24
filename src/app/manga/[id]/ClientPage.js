"use client";
import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import styles from "./page.module.css";
import { getOptimizedUrl } from "../../../lib/assetUrl";

export default function ClientPage({ project }) {
    // We will use the mangaGallery array, or default to the main image if it doesn't exist
    const images = project.mangaGallery && project.mangaGallery.length > 0 
        ? project.mangaGallery 
        : [project.image];

    return (
        <main className={styles.main}>
            <div className={styles.navContainer}>
                <Link href="/#work" className={styles.backLink}>
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>

            <div className={styles.container}>
                {/* Comic Header */}
                <header className={styles.comicHeader}>
                    <div className={styles.issueBanner}>
                        <span className={styles.issueLabel}>ISSUE</span>
                        <span className={styles.issueNum}>#{(project.id.toString()).padStart(2, '0')}</span>
                        <span className={styles.issueSep}>—</span>
                        <span className={styles.issueTitle}>{project.category.toUpperCase()}</span>
                    </div>
                    <h1 className={styles.title}>{project.title}</h1>
                    <div className={styles.speechBubble}>
                        <p>A VISUAL JOURNEY!</p>
                    </div>
                </header>

                {/* Manga Grid */}
                <div className={styles.mangaGrid}>
                    {images.map((panel, index) => {
                        const isEven = index % 2 === 0;
                        const rotate = isEven ? '-1deg' : '1deg';
                        
                        // Fallback for old simple string or legacy {src, caption} arrays
                        const isLegacyObject = panel.src && !panel.type;
                        const isString = typeof panel === 'string';
                        
                        let type = 'image';
                        let colSpan = 12;
                        let src = '';
                        let content = '';
                        let title = '';
                        let caption = '';

                        if (isString) {
                            src = panel;
                            caption = `PANEL ${String(index + 1).padStart(2, '0')}`;
                        } else if (isLegacyObject) {
                            src = panel.src;
                            caption = panel.caption;
                        } else {
                            type = panel.type || 'image';
                            colSpan = panel.colSpan || 12;
                            src = panel.src;
                            content = panel.content;
                            title = panel.title;
                            caption = panel.caption;
                        }

                        return (
                            <motion.div 
                                key={index}
                                className={`${styles.mangaPanel} ${styles[`type_${type}`]}`}
                                style={{ 
                                    transform: `rotate(${rotate})`,
                                    gridColumn: `span ${colSpan}`
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, type: "spring" }}
                            >
                                {type === 'image' && (
                                    <>
                                        <div className={styles.imageWrapper}>
                                            <Image
                                                src={getOptimizedUrl(src)}
                                                alt={caption || `${project.title} panel`}
                                                fill
                                                className={styles.image}
                                                unoptimized={src?.includes("unsplash.com")}
                                            />
                                        </div>
                                        {caption && (
                                            <div className={styles.panelCaption}>
                                                {caption}
                                            </div>
                                        )}
                                    </>
                                )}

                                {type === 'text' && (
                                    <div className={styles.textWrapper}>
                                        {title && <h2 className={styles.panelTitle}>{title}</h2>}
                                        {content && <div className={styles.panelContent} dangerouslySetInnerHTML={{ __html: content }} />}
                                    </div>
                                )}
                                
                                {type === 'quote' && (
                                    <div className={styles.quoteWrapper}>
                                        <p className={styles.quoteText}>"{content}"</p>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <div className={styles.endStamp}>
                    <span>TO BE CONTINUED...</span>
                </div>
            </div>

            <ContactCTA />
        </main>
    );
}
