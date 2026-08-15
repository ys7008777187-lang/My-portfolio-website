"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Target, LineChart, ShieldCheck, Users, Pointer, Layers, Eye, MoveRight, CheckCircle2, AlertCircle, ArrowUpRight, Zap, RefreshCcw, LayoutDashboard
} from 'lucide-react';
import { getAssetUrl } from "../../lib/assetUrl";
import styles from "./ADTCaseStudy.module.css";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

export default function ADTCaseStudy() {
    return (
        <div className={styles.container}>
            {/* 1. INTRODUCTION */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroGrid}>
                    <motion.div initial="hidden" animate="visible" variants={stagger} className={styles.heroText}>
                        <motion.span variants={fadeInUp} className={styles.badge}>UX Redesign Strategy & CRO</motion.span>
                        <motion.h1 variants={fadeInUp} className={styles.title}>
                            ADT Solution: Engineering Trust & Conversion in B2B SaaS
                        </motion.h1>
                        <motion.p variants={fadeInUp} className={styles.subtitle}>
                            Transforming a high-friction, ambiguous landing experience into a clear, high-converting global HR/Payroll funnel.
                        </motion.p>
                        <motion.div variants={fadeInUp} className={styles.metaGrid}>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>My Role</span>
                                <span className={styles.metaValue}>Lead UX & CRO Expert</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Goal</span>
                                <span className={styles.metaValue}>Increase Demo Bookings</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Industry</span>
                                <span className={styles.metaValue}>B2B SaaS (HR & Payroll)</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Visual Flow Injection: HOME PAGE LAPTOP (HERO) - 3D Coming Out */}
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} className={styles.heroImageWrapper}>
                        <div className={styles.heroMockupContainer}>
                            <div className={styles.laptopMockup} style={{marginTop: '0', marginBottom: '0', width: '100%', maxWidth: 'none'}}>
                                <div className={styles.heroLaptopScreen}>
                                    <img src={getAssetUrl("https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/ADT/Home.jpg")} alt="ADT Solution Landing Page" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className={styles.contentWrapper}>

                {/* 2. PROBLEM STATEMENT */}
                <section className={styles.section} id="problem">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>01. The Challenge</span>
                        <h2 className={styles.sectionTitle}>High Traffic, Low Trust.</h2>
                    </div>
                    <div className={styles.grid2Col}>
                        <div>
                            <p className={styles.sectionText}>
                                ADT Solution possessed a robust global HR and payroll platform, but their digital storefront was failing to communicate value. Despite healthy top-of-funnel traffic, the conversion rate for "Book a Demo" was severely underperforming industry benchmarks.
                            </p>
                            <h4 className={styles.boxTitle} style={{marginTop: '32px'}}>User Struggles:</h4>
                            <ul className={styles.list}>
                                <li className={styles.listItem}><strong>Cognitive Overload:</strong> Users were hit with walls of text rather than scannable product benefits.</li>
                                <li className={styles.listItem}><strong>Lack of Product Visibility:</strong> Visitors couldn't "see" what they were buying. No dashboards, no interfaces.</li>
                                <li className={styles.listItem}><strong>Ambiguous Journey:</strong> The path from landing to booking a demo was scattered with generic CTAs ("Learn More" vs "Get Started").</li>
                            </ul>
                        </div>
                        <div className={styles.boxCard}>
                            <h3 className={styles.boxTitle}>Business Reality</h3>
                            <p className={styles.sectionText}>
                                In the competitive B2B SaaS space (competing against entities like Deel or Remote), purchasing decisions are high-stakes. If a Director of HR cannot immediately verify compliance, security, and ease-of-use within the first 10 seconds, they bounce. 
                            </p>
                            <div className={styles.problemState} style={{marginTop: '24px'}}>
                                <strong>The primary failure was not the product itself, but the framing of the product.</strong>
                            </div>
                        </div>
                    </div>

                </section>

                {/* 3. UX AUDIT SUMMARY */}
                <section className={styles.section} id="audit">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>02. UX Audit</span>
                        <h2 className={styles.sectionTitle}>Diagnosing the Friction</h2>
                        <p className={styles.sectionText}>Before pushing pixels, I conducted a deep heuristic evaluation of the existing site to identify core conversion blockers.</p>
                    </div>

                    <div className={styles.auditGrid}>
                        <div className={styles.auditCard}>
                            <Eye color="var(--color-accent)" size={28} style={{marginBottom: '16px'}} />
                            <h4 className={styles.boxTitle}>1. Clarity Deficit</h4>
                            <p className={styles.sectionText} style={{fontSize: '0.95rem'}}>The hero section relied on generic corporate jargon. It failed to instantly answer: "What is this, who is it for, and why should I care?"</p>
                        </div>
                        <div className={styles.auditCard}>
                            <Layers color="var(--color-accent)" size={28} style={{marginBottom: '16px'}} />
                            <h4 className={styles.boxTitle}>2. Weak Hierarchy</h4>
                            <p className={styles.sectionText} style={{fontSize: '0.95rem'}}>Features were listed as bullet points without visual organization. Users had to read everything to understand anything.</p>
                        </div>
                        <div className={styles.auditCard}>
                            <ShieldCheck color="var(--color-accent)" size={28} style={{marginBottom: '16px'}} />
                            <h4 className={styles.boxTitle}>3. Missing Trust Hooks</h4>
                            <p className={styles.sectionText} style={{fontSize: '0.95rem'}}>For a payroll platform handling millions, the site lacked immediate social proof, compliance badges, and transparent UI previews.</p>
                        </div>
                        <div className={styles.auditCard}>
                            <Pointer color="var(--color-accent)" size={28} style={{marginBottom: '16px'}} />
                            <h4 className={styles.boxTitle}>4. Confused Conversion</h4>
                            <p className={styles.sectionText} style={{fontSize: '0.95rem'}}>CTAs were poorly localized. "Contact Us" was competing aggressively with "Book Demo", splitting intent and causing decision fatigue.</p>
                        </div>
                    </div>
                </section>

                {/* 4. KEY INSIGHTS */}
                <section className={styles.section} id="insights">
                     <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>03. UX Insights</span>
                        <h2 className={styles.sectionTitle}>Translating Problems to Strategy</h2>
                    </div>
                    
                    <div className={styles.croFlow}>
                        <div className={styles.flowStep}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h4>Insight: Users don’t trust generic claims without proof.</h4>
                                <p className={styles.sectionText} style={{margin:0}}><strong>Action:</strong> We must transition from "telling" to "showing". Every major claim must be paired with high-fidelity product dashboard mockups or micro-interactions.</p>
                            </div>
                        </div>
                        <div className={styles.flowStep}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h4>Insight: B2B buyers scan; they do not read.</h4>
                                <p className={styles.sectionText} style={{margin:0}}><strong>Action:</strong> Replace text-heavy feature blocks with an 'outcome-driven' F-pattern layout. Utilize iconography, short descriptors, and ample white space.</p>
                            </div>
                        </div>
                        <div className={styles.flowStep}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h4>Insight: Users feel overwhelmed by non-linear journeys.</h4>
                                <p className={styles.sectionText} style={{margin:0}}><strong>Action:</strong> Enforce a strict narrative flow down the page: Hook &rarr; Value Prop &rarr; Social Proof &rarr; Features mapped to Benefits &rarr; Hard CTA.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. REDESIGN STRATEGY (CORE) */}
                <section className={styles.section} id="strategy">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>04. Redesign Strategy</span>
                        <h2 className={styles.sectionTitle}>Architecting for Conversion</h2>
                    </div>

                    <div className={styles.grid2Col}>
                        <div className={styles.boxCard}>
                            <h3 className={styles.boxTitle}>A. Information Architecture</h3>
                            <p className={styles.sectionText}>I restructured the global navigation to reduce cognitive load. Replaced the flat dropdown menu with a "Megamenu" categorized by <strong>Solutions</strong> (Payroll, HR, Onboarding) and <strong>Use Cases</strong> (Enterprise, Startups).</p>
                            <p className={styles.sectionText}><em>Why: Allows users to self-segment immediately based on their specific pain point.</em></p>
                        </div>
                        <div className={styles.boxCard}>
                            <h3 className={styles.boxTitle}>B. Content Strategy Re-write</h3>
                            <p className={styles.sectionText}>Shifted the copy from <strong>Feature-Centric</strong> ("We have automated tax filing") to <strong>Outcome-Centric</strong> ("Run global payroll with zero tax compliance headaches, in one click").</p>
                            <p className={styles.sectionText}><em>Why: Decision-makers buy the outcome (peace of mind), not the tool.</em></p>
                            
                            {/* Visual Flow Injection: ABOUT US LAPTOP */}
                            <div className={styles.laptopMockup} style={{marginTop: '32px', margin: '32px auto 0', maxWidth: '100%'}}>
                                <div className={styles.laptopScreen}>
                                    <img src={getAssetUrl("https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/ADT/About us.jpg")} alt="Content Re-write" />
                                </div>
                            </div>
                            <p className={styles.imageCaption}>Strategic Content Rewrite</p>
                        </div>
                    </div>

                    <div className={styles.boxCard} style={{marginTop: '32px', borderLeft: '4px solid var(--color-accent)'}}>
                        <h3 className={styles.boxTitle}>C. User Journey Optimization</h3>
                        <p className={styles.sectionText} style={{marginBottom: '12px'}}>The page was choreographed to follow a rigid psychological funnel:</p>
                        <ul className={styles.list} style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px'}}>
                            <li style={{background: 'rgba(255,255,255,0.05)', padding: '12px 24px', borderRadius: '100px'}}>1. Awareness (Hero)</li>
                            <li style={{background: 'rgba(255,255,255,0.05)', padding: '12px 24px', borderRadius: '100px'}}>2. Trust (Logos/Badges)</li>
                            <li style={{background: 'rgba(255,255,255,0.05)', padding: '12px 24px', borderRadius: '100px'}}>3. Logic (Feature Grids)</li>
                            <li style={{background: 'rgba(255,255,255,0.05)', padding: '12px 24px', borderRadius: '100px'}}>4. Action (Demo CTA)</li>
                        </ul>
                    </div>

                    {/* Visual Flow Injection: THE ECOSYSTEM (EOR, IMMIGRATION, PAYROLL) */}
                    <div className={styles.imageGrid}>
                        <div className={styles.imageWrapper} style={{background: 'transparent', border: 'none', padding: 0}}>
                            <div className={styles.laptopMockup} style={{marginTop: '0px', width: '100%'}}>
                                <div className={styles.laptopScreen}>
                                    <img src={getAssetUrl("https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/ADT/Payroll.jpg")} alt="ADT Global Payroll UI" />
                                </div>
                            </div>
                            <p className={styles.imageCaption}>Global Payroll Flow</p>
                        </div>
                        <div className={styles.imageWrapper} style={{background: 'transparent', border: 'none', padding: 0}}>
                            <div className={styles.laptopMockup} style={{marginTop: '0px', width: '100%'}}>
                                <div className={styles.laptopScreen}>
                                    <img src={getAssetUrl("https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/ADT/EOR.jpg")} alt="ADT Employer of Record UI" />
                                </div>
                            </div>
                            <p className={styles.imageCaption}>EOR Dashboard</p>
                        </div>
                        <div className={styles.imageWrapper} style={{background: 'transparent', border: 'none', padding: 0}}>
                            <div className={styles.laptopMockup} style={{marginTop: '0px', width: '100%'}}>
                                <div className={styles.laptopScreen}>
                                    <img src={getAssetUrl("https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/ADT/Immigration.jpg")} alt="ADT Immigration Flow" />
                                </div>
                            </div>
                            <p className={styles.imageCaption}>Immigration Management</p>
                        </div>
                    </div>

                </section>

                {/* 6 & 7. UX/UI IMPROVEMENTS */}
                <section className={styles.section} id="improvements">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>05. Implementation</span>
                        <h2 className={styles.sectionTitle}>Key UX & UI Interventions</h2>
                    </div>

                    <div className={styles.improvementRow}>
                        <div className={styles.problemState}>
                            <div className={styles.statTag} style={{color: '#ff3b30', background: 'rgba(255, 59, 48, 0.1)'}}>Before: The Hero Section</div>
                            <h4 className={styles.boxTitle}>Vague & Unmoored</h4>
                            <p className={styles.sectionText}>"Streamlining your HR processes for the modern world." followed by two competing buttons of the same visual weight.</p>
                        </div>
                        <div className={styles.solutionState}>
                            <div className={styles.statTag}>After: Strategic Hero</div>
                            <h4 className={styles.boxTitle}>Specific & Actionable</h4>
                            <p className={styles.sectionText}>"Global Payroll & HR, Compliant in 150+ Countries." Primary CTA: 'Book a Demo' (High contrast). Secondary CTA: 'Explore Platform' (Ghost button).</p>
                            <p className={styles.sectionText} style={{fontSize: '0.9rem', opacity: 0.8}}><em>Added a floating UI dashboard mockup breaking the hero border to create depth and immediate product context.</em></p>
                        </div>
                    </div>

                    <div className={styles.improvementRow}>
                        <div className={styles.problemState}>
                            <div className={styles.statTag} style={{color: '#ff3b30', background: 'rgba(255, 59, 48, 0.1)'}}>Before: Data Tables</div>
                            <h4 className={styles.boxTitle}>Monotonous Typography</h4>
                            <p className={styles.sectionText}>Pricing and feature tiers were dense walls of 14px text, making comparisons nearly impossible without heavy mental load.</p>
                        </div>
                        <div className={styles.solutionState}>
                            <div className={styles.statTag}>After: Visual Hierarchy</div>
                            <h4 className={styles.boxTitle}>Scannable Feature Cards</h4>
                            <p className={styles.sectionText}>Implemented a modern bento-grid layout. Differentiated font weights (Inter SemiBold for headers, Regular for body) and increased line-height to 1.6 for breathability.</p>
                            
                            {/* Visual Flow Injection: PRICING LAPTOP */}
                            <div className={styles.laptopMockup} style={{marginTop: '32px', margin: '32px auto 0', maxWidth: '100%'}}>
                                <div className={styles.laptopScreen}>
                                    <img src={getAssetUrl("https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/ADT/Pricing.jpg")} alt="ADT Pricing Tables Redesigned" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. CONVERSION OPTIMIZATION */}
                <section className={styles.section} id="cro">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>06. CRO Tactics</span>
                        <h2 className={styles.sectionTitle}>Reducing the Friction</h2>
                    </div>
                    <div className={styles.grid2Col}>
                        <div className={styles.auditCard} style={{background: 'var(--color-bg-glass)'}}>
                            <Target color="var(--color-highlight)" size={24} style={{marginBottom: '16px'}} />
                            <h4 className={styles.boxTitle}>Sticky CTA Strip</h4>
                            <p className={styles.sectionText}>Implemented a non-intrusive sticky header that appears only after the user scrolls past the hero. This ensures the "Book Demo" button is always exactly one click away, regardless of page depth.</p>
                        </div>
                        <div className={styles.auditCard} style={{background: 'var(--color-bg-glass)'}}>
                            <RefreshCcw color="var(--color-highlight)" size={24} style={{marginBottom: '16px'}} />
                            <h4 className={styles.boxTitle}>Micro-Copy Adjustments</h4>
                            <p className={styles.sectionText}>Changed generic form submissions from "Submit" to "See ADT in Action". This framing shifts the user's perception from providing data (loss) to receiving value (gain).</p>
                        </div>
                    </div>
                </section>

                {/* 9. IMPACT & EXPECTED RESULTS */}
                <section className={styles.section} id="impact">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>07. Impact</span>
                        <h2 className={styles.sectionTitle}>The Business Value</h2>
                        <p className={styles.sectionText}>By aligning the digital experience with the psychological needs of B2B buyers, the redesign shifts ADT from a generic service provider to a premium, trustworthy SaaS platform.</p>
                    </div>

                    <div className={styles.metricGrid}>
                        <div className={styles.metricCard}>
                            <div className={styles.metricValue}>+35%</div>
                            <div className={styles.metricLabel}>Expected Lead<br/>Capture</div>
                        </div>
                        <div className={styles.metricCard}>
                            <div className={styles.metricValue}>-40%</div>
                            <div className={styles.metricLabel}>Hero Section<br/>Bounce Rate</div>
                        </div>
                        <div className={styles.metricCard}>
                            <div className={styles.metricValue}>2x</div>
                            <div className={styles.metricLabel}>Increase in<br/>Time-on-Page</div>
                        </div>
                        <div className={styles.metricCard}>
                            <div className={styles.metricValue}>↑</div>
                            <div className={styles.metricLabel}>Perceived Brand<br/>Authority</div>
                        </div>
                    </div>
                </section>

                {/* 10. LEARNINGS */}
                <section className={styles.section} id="learnings">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>08. Reflections</span>
                        <h2 className={styles.sectionTitle}>What B2B SaaS Taught Me</h2>
                    </div>
                    <div className={styles.boxCard} style={{borderLeft: '4px solid var(--color-accent)'}}>
                        <h3 className={styles.boxTitle}>Aesthetics don't convert; clarity does.</h3>
                        <p className={styles.sectionText}>
                            The biggest learning from auditing and restructuring the ADT platform is that B2B buyers are risk-averse. They are actively looking for reasons *not* to buy. 
                        </p>
                        <p className={styles.sectionText}>
                            While modern SaaS aesthetics (gradients, glassmorphism) create an initial halo effect, the heavy lifting of conversion is done by <strong>uncompromising clarity, aggressive hierarchy, and omnipresent trust signals </strong> (compliance data, product previews). UX in B2B isn't just about making things easy to use; it's about making them safe to buy.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
