"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Figma,
    Code2,
    MonitorSmartphone,
    Palette,
    Eye,
    Zap,
    LayoutGrid,
    CheckCircle2,
    Accessibility,
    ExternalLink
} from 'lucide-react';
import { getAssetUrl } from "../../lib/assetUrl";
import styles from "./BasecampCaseStudy.module.css";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
};

export default function BasecampCaseStudy() {
    return (
        <article className={styles.container}>
            {/* 01. Hero Section */}
            <motion.section 
                className={styles.heroSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
            >
                <div className={styles.heroContent}>
                    <motion.div variants={fadeInUp} className={styles.label}>
                        01. The Introduction
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className={styles.title}>
                        Basecamp <span className={styles.highlight}>Homepage Redesign</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className={styles.subtitle}>
                        Transforming an outdated, text-heavy SaaS homepage into a modern, conversion-focused product experience.
                    </motion.p>
                    <motion.div variants={fadeInUp} className={styles.heroActions}>
                        <a href="https://melodic-mousse-f64c4a.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                            View Live Site <ExternalLink size={18} />
                        </a>
                        <a href="https://melodic-mousse-f64c4a.netlify.app/design-system" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                            Design System <Palette size={18} />
                        </a>
                    </motion.div>
                </div>
                
                <motion.div variants={fadeInUp} className={styles.heroImageWrapper}>
                    <div className={styles.browserMockup}>
                        <div className={styles.browserHeader}>
                            <div className={styles.dots}>
                                <span></span><span></span><span></span>
                            </div>
                            <div className={styles.urlBar}>basecamp.com/redesign</div>
                        </div>
                        <img 
                            src={getAssetUrl('/images/basecamp/hero.webp')}
                            alt="Basecamp Hero Redesign"
                            className={styles.heroImage}
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* 02. Project Overview */}
            <motion.section 
                className={styles.overviewSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
            >
                <div className={styles.overviewGrid}>
                    <motion.div variants={fadeInUp} className={styles.overviewItem}>
                        <h3 className={styles.overviewLabel}>Role</h3>
                        <p className={styles.overviewValue}>UI/UX Designer<br/>Frontend Developer</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className={styles.overviewItem}>
                        <h3 className={styles.overviewLabel}>Duration</h3>
                        <p className={styles.overviewValue}>Assignment Project</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className={styles.overviewItem}>
                        <h3 className={styles.overviewLabel}>Tools Stack</h3>
                        <div className={styles.toolsList}>
                            <span className={styles.toolTag}><Figma size={14}/> Figma</span>
                            <span className={styles.toolTag}><Code2 size={14}/> React & Vite</span>
                            <span className={styles.toolTag}><LayoutGrid size={14}/> Vanilla CSS</span>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* 03. The Challenge */}
            <motion.section 
                className={styles.challengeSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
            >
                <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>02.</span> The Challenge & Solutions
                </motion.h2>
                
                <div className={styles.challengeGrid}>
                    <motion.div variants={fadeInUp} className={styles.challengeCard}>
                        <div className={styles.cardIconWrapper}><MonitorSmartphone size={24} /></div>
                        <h3>Outdated & Cluttered</h3>
                        <p className={styles.problemText}>The original layout was text-heavy and overwhelming for new users.</p>
                        <div className={styles.solutionBox}>
                            <h4>Solution</h4>
                            <p>Implemented a modern Bento Grid layout, beautiful browser mockups, and a strict 8px spatial grid system for visual harmony.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className={styles.challengeCard}>
                        <div className={styles.cardIconWrapper}><Zap size={24} /></div>
                        <h3>Lack of Clarity</h3>
                        <p className={styles.problemText}>Hard to understand how the actual product works from screenshots alone.</p>
                        <div className={styles.solutionBox}>
                            <h4>Solution</h4>
                            <p>Created self-animating interactive live UI mockups and a guided 3-phase interactive Product Tour to demonstrate value.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className={styles.challengeCard}>
                        <div className={styles.cardIconWrapper}><Palette size={24} /></div>
                        <h3>Inconsistent Visuals</h3>
                        <p className={styles.problemText}>Difficult to visualize the underlying design system and reusable components.</p>
                        <div className={styles.solutionBox}>
                            <h4>Solution</h4>
                            <p>Built a live standalone design system page showcasing typography, colors, and core components interactively.</p>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Big Pull Quote */}
            <motion.section 
                className={styles.quoteSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <blockquote className={styles.pullQuote}>
                    "A product is only as good as its presentation. We turned a wall of text into a living, breathing product experience."
                </blockquote>
            </motion.section>

            {/* 04. Feature Showcase (Bento Grid) */}
            <motion.section 
                className={styles.featureSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
            >
                <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.sectionNumber}>03.</span> Interactive Features
                    </h2>
                    <p className={styles.sectionDesc}>Showcasing the core tools of Basecamp through an engaging bento grid aesthetic.</p>
                </motion.div>

                <div className={styles.bentoGrid}>
                    <motion.div variants={fadeInUp} className={`${styles.bentoItem} ${styles.bentoLarge}`}>
                        <div className={styles.bentoContent}>
                            <h3>Dashboard Overview</h3>
                            <p>A bird's eye view of all projects and activity.</p>
                        </div>
                        <img src={getAssetUrl('/images/basecamp/dashboard.webp')} alt="Dashboard" className={styles.bentoImage} />
                    </motion.div>
                    
                    <motion.div variants={fadeInUp} className={styles.bentoItem}>
                        <div className={styles.bentoContent}>
                            <h3>Campfire Chat</h3>
                            <p>Real-time team communication.</p>
                        </div>
                        <img src={getAssetUrl('/images/basecamp/feature-campfire-chat.png')} alt="Campfire" className={styles.bentoImage} />
                    </motion.div>

                    <motion.div variants={fadeInUp} className={styles.bentoItem}>
                        <div className={styles.bentoContent}>
                            <h3>Message Board</h3>
                            <p>Long-form announcements and discussions.</p>
                        </div>
                        <img src={getAssetUrl('/images/basecamp/feature-message-board.png')} alt="Message Board" className={styles.bentoImage} />
                    </motion.div>

                    <motion.div variants={fadeInUp} className={styles.bentoItem}>
                        <div className={styles.bentoContent}>
                            <h3>To-do Lists</h3>
                            <p>Track work that needs getting done.</p>
                        </div>
                        <img src={getAssetUrl('/images/basecamp/feature-todo-list.png')} alt="Todo List" className={styles.bentoImage} />
                    </motion.div>

                    <motion.div variants={fadeInUp} className={styles.bentoItem}>
                        <div className={styles.bentoContent}>
                            <h3>Schedule</h3>
                            <p>Important dates and milestones.</p>
                        </div>
                        <img src={getAssetUrl('/images/basecamp/feature-schedule.png')} alt="Schedule" className={styles.bentoImage} />
                    </motion.div>
                </div>
            </motion.section>

            {/* 05. Design System */}
            <motion.section 
                className={styles.designSystemSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
            >
                <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>04.</span> Visual Language
                </motion.h2>

                <div className={styles.dsGrid}>
                    <motion.div variants={fadeInUp} className={styles.colorPalette}>
                        <div className={styles.dsSubHeader}>
                            <h3>Brand Colors</h3>
                            <p>A fresh, trustworthy palette.</p>
                        </div>
                        <div className={styles.swatchContainer}>
                            <div className={styles.swatchWrapper}>
                                <div className={styles.swatch} style={{background: '#16A34A'}}></div>
                                <div className={styles.swatchInfo}>
                                    <span className={styles.swatchName}>Primary Green</span>
                                    <span className={styles.swatchHex}>#16A34A</span>
                                </div>
                            </div>
                            <div className={styles.swatchWrapper}>
                                <div className={styles.swatch} style={{background: '#0F172A'}}></div>
                                <div className={styles.swatchInfo}>
                                    <span className={styles.swatchName}>Primary Dark</span>
                                    <span className={styles.swatchHex}>#0F172A</span>
                                </div>
                            </div>
                            <div className={styles.swatchWrapper}>
                                <div className={styles.swatch} style={{background: '#7C3AED'}}></div>
                                <div className={styles.swatchInfo}>
                                    <span className={styles.swatchName}>Accent Purple</span>
                                    <span className={styles.swatchHex}>#7C3AED</span>
                                </div>
                            </div>
                            <div className={styles.swatchWrapper}>
                                <div className={styles.swatch} style={{background: '#F8FAFC'}}></div>
                                <div className={styles.swatchInfo}>
                                    <span className={styles.swatchName}>Slate BG</span>
                                    <span className={styles.swatchHex}>#F8FAFC</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className={styles.typography}>
                        <div className={styles.dsSubHeader}>
                            <h3>Typography</h3>
                            <p>Plus Jakarta Sans for optimal legibility.</p>
                        </div>
                        <div className={styles.typeSpecimen}>
                            <div className={styles.typeRow}>
                                <span className={styles.typeLabel}>Bold 700</span>
                                <span className={styles.typeSample} style={{fontWeight: 700, fontSize: '2rem'}}>AaBbCc</span>
                            </div>
                            <div className={styles.typeRow}>
                                <span className={styles.typeLabel}>Medium 500</span>
                                <span className={styles.typeSample} style={{fontWeight: 500, fontSize: '1.5rem'}}>AaBbCc</span>
                            </div>
                            <div className={styles.typeRow}>
                                <span className={styles.typeLabel}>Regular 400</span>
                                <span className={styles.typeSample} style={{fontWeight: 400, fontSize: '1rem'}}>AaBbCcDdEeFf</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* 06. Accessibility */}
            <motion.section 
                className={styles.accessibilitySection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
            >
                <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>05.</span> Inclusive Design
                </motion.h2>

                <div className={styles.a11yGrid}>
                    <motion.div variants={fadeInUp} className={styles.a11yCard}>
                        <div className={styles.a11yHeader}>
                            <Eye size={24} className={styles.a11yIcon} />
                            <h3>Contrast Ratios</h3>
                        </div>
                        <ul className={styles.a11yList}>
                            <li>
                                <span>Green on White</span>
                                <span className={styles.a11yScore}><CheckCircle2 size={16}/> 4.76:1 (AA)</span>
                            </li>
                            <li>
                                <span>Slate Dark on White</span>
                                <span className={styles.a11yScore}><CheckCircle2 size={16}/> 19.4:1 (AAA)</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp} className={styles.a11yCard}>
                        <div className={styles.a11yHeader}>
                            <Accessibility size={24} className={styles.a11yIcon} />
                            <h3>Keyboard & Semantics</h3>
                        </div>
                        <ul className={styles.a11yList}>
                            <li>
                                <span>Full Keyboard Navigation</span>
                                <span className={styles.a11yScore}><CheckCircle2 size={16}/> :focus-visible</span>
                            </li>
                            <li>
                                <span>Screen Reader Support</span>
                                <span className={styles.a11yScore}><CheckCircle2 size={16}/> Semantic HTML5</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </motion.section>

            {/* 07. References */}
            <motion.section 
                className={styles.referenceSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
            >
                <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>06.</span> Inspiration & References
                </motion.h2>
                
                <div className={styles.refGrid}>
                    <motion.div variants={fadeInUp} className={styles.refCard}>
                        <h4>Asana</h4>
                        <p>Influenced the bold, unapologetic headline typography.</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className={styles.refCard}>
                        <h4>Notion</h4>
                        <p>Inspired the clean, content-first minimalist aesthetic.</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className={styles.refCard}>
                        <h4>Linear</h4>
                        <p>Borrowed techniques for subtle gradients and glassmorphic browser mockups.</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className={styles.refCard}>
                        <h4>Slack</h4>
                        <p>Guided the creation of self-animating, live-feeling UI mockups.</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* 08. Conclusion / Live Experience */}
            <motion.section 
                className={styles.conclusionSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <div className={styles.conclusionContent}>
                    <h2>Experience the Live Build</h2>
                    <p>The best way to understand the redesign is to interact with it. Explore the live React application and the standalone design system.</p>
                    
                    <div className={styles.ctaGroup}>
                        <a href="https://melodic-mousse-f64c4a.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.primaryBtnLarge}>
                            Launch Project <ArrowUpRight size={20} />
                        </a>
                    </div>
                </div>
            </motion.section>

        </article>
    );
}
