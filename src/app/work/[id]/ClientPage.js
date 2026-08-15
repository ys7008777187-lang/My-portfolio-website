"use client";
import React from 'react';
import { motion } from "framer-motion";
import Button from "../../../components/ui/Button/Button";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import styles from "./page.module.css";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import projectsData from "../../../data/projects.json";
import BhaiyaaCaseStudy from "../../../components/work/BhaiyaaCaseStudy";
import MyrikCaseStudy from "../../../components/work/MyrikCaseStudy";
import ADTCaseStudy from "../../../components/work/ADTCaseStudy";
import WorqCaseStudy from "../../../components/work/WorqCaseStudy";
import CampusBitesCaseStudy from "../../../components/work/CampusBitesCaseStudy";
import BasecampCaseStudy from "../../../components/work/BasecampCaseStudy";

export default function ProjectPage({ id }) {
    // Check if it's the ADT Solution
    if (id === '1') {
        return (
            <main className={styles.main}>
                <div style={{ padding: '20px 5%', maxWidth: '1200px', margin: '0 auto', paddingTop: '100px' }}>
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={20} /> Back to Work
                    </Link>
                </div>
                <ADTCaseStudy />
                <ContactCTA />
            </main>
        );
    }

    // Check if it's the Bhaiyaa Super App
    if (id === '3') {
        return (
            <main className={styles.main}>
                <div style={{ padding: '20px 5%', maxWidth: '1200px', margin: '0 auto', paddingTop: '100px' }}>
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={20} /> Back to Work
                    </Link>
                </div>
                <BhaiyaaCaseStudy />
                <ContactCTA />
            </main>
        );
    }

    if (id === '2') {
        return (
            <main className={styles.main}>
                <div style={{ padding: '20px 5%', maxWidth: '1200px', margin: '0 auto', paddingTop: '100px' }}>
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={20} /> Back to Work
                    </Link>
                </div>
                <MyrikCaseStudy />
                <ContactCTA />
            </main>
        );
    }

    // Check if it's the WORQ case study
    if (id === '7') {
        return (
            <main className={styles.main}>
                <div style={{ padding: '20px 5%', maxWidth: '1200px', margin: '0 auto', paddingTop: '100px' }}>
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={20} /> Back to Work
                    </Link>
                </div>
                <WorqCaseStudy />
                <ContactCTA />
            </main>
        );
    }

    if (id === '8') {
        return (
            <main className={styles.main}>
                <div style={{ padding: '20px 5%', maxWidth: '1200px', margin: '0 auto', paddingTop: '100px' }}>
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={20} /> Back to Work
                    </Link>
                </div>
                <CampusBitesCaseStudy />
                <ContactCTA />
            </main>
        );
    }

    if (id === '9') {
        return (
            <main className={styles.main}>
                <div style={{ padding: '20px 5%', maxWidth: '1200px', margin: '0 auto', paddingTop: '100px' }}>
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={20} /> Back to Work
                    </Link>
                </div>
                <BasecampCaseStudy />
                <ContactCTA />
            </main>
        );
    }
    const rawProject = projectsData.find(p => p.id.toString() === id) || projectsData[0];
    
    // Add fallback properties if they don't exist in the JSON
    const project = {
        ...rawProject,
        role: rawProject.category || "Designer",
        duration: "TBD",
        tools: "Various",
        color: "#1A202C",
        overview: "Detailed case study coming soon.",
        problem: "Problem statement placeholder.",
        solution: "Solution description placeholder."
    };

    return (
        <main className={styles.main}>
            <div className={styles.hero} style={{ backgroundColor: project.color }}>
                <div className={styles.container}>
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={20} /> Back to Work
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className={styles.heroContent}
                    >
                        <span className={styles.category}>{project.category}</span>
                        <h1 className={styles.title}>{project.title}</h1>
                        <div className={styles.metaGrid}>
                            <div className={styles.metaItem}>
                                <span className={styles.label}>Role</span>
                                <span className={styles.role}>{project.role}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.label}>Duration</span>
                                <span>{project.duration}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.label}>Tools</span>
                                <span>{project.tools}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className={styles.contentContainer}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Overview</h2>
                    <p className={styles.text}>{project.overview}</p>
                </section>

                <section className={styles.gridSection}>
                    <div className={styles.col}>
                        <h3 className={styles.subTitle}>The Problem</h3>
                        <p className={styles.text}>{project.problem}</p>
                    </div>
                    <div className={styles.col}>
                        <h3 className={styles.subTitle}>The Solution</h3>
                        <p className={styles.text}>{project.solution}</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Design Process</h2>
                    <div className={styles.placeholderBlock}>
                        <span>Process / Wireframes Placeholder</span>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Final UI</h2>
                    <div className={styles.placeholderGallery}>
                        <div className={styles.galleryItem} />
                        <div className={styles.galleryItem} />
                    </div>
                </section>
            </div>

            <ContactCTA />
        </main>
    );
}
