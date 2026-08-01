"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone, MapPin, Map, Home, Phone, Lock, User, PartyPopper,
    Search, ShoppingCart, AlertTriangle, CheckCircle2, ArrowDown,
    TrendingUp, Users, Palette, Type, Layers, Zap, BarChart3,
    HeartPulse, UtensilsCrossed, CalendarHeart, MessageSquare,
    Eye, ShieldCheck, Target, Lightbulb, RotateCcw, Award
} from 'lucide-react';
import { getAssetUrl } from "../../lib/assetUrl";
import styles from "./BhaiyaaCaseStudy.module.css";

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function BhaiyaaCaseStudy() {
    return (
        <div className={styles.container}>
            {/* 1. INTRODUCTION */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <motion.div initial="hidden" animate="visible" variants={stagger} className={styles.heroContent}>
                    <motion.span variants={fadeInUp} className={styles.badge}>Senior UX Case Study</motion.span>
                    <motion.h1 variants={fadeInUp} className={styles.title}>
                        Bhaiyaa Super App: Redefining Trust in Hyperlocal Commerce
                    </motion.h1>
                    <motion.p variants={fadeInUp} className={styles.subtitle}>
                        Designing an inclusive, high-trust hyperlocal ecosystem for Tier-2 and Tier-3 India.
                    </motion.p>
                    <motion.div variants={fadeInUp} className={styles.metaGrid}>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>My Role</span>
                            <span className={styles.metaValue}>Lead Product Designer</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Timeline</span>
                            <span className={styles.metaValue}>4 Months</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Owned</span>
                            <span className={styles.metaValue}>End-to-End UX/UI & Strategy</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className={styles.heroMockupWrapper}
                >
                    <div className={`${styles.heroMockup} ${styles.mockupBack}`}>
                        <img src={getAssetUrl("/images/bhaiyaa/new_screen_3.jpg")} alt="Bhaiyaa Mart Screen" />
                    </div>
                    <div className={`${styles.heroMockup} ${styles.mockupFront}`}>
                        <img src={getAssetUrl("/images/bhaiyaa/new_screen_1.jpg")} alt="Bhaiyaa Home Screen" />
                    </div>
                </motion.div>
            </section>

            <div className={styles.contentWrapper}>

                {/* 2. THE PROBLEM (User-Centric) */}
                <section className={styles.section} id="problem">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>01. The Problem</span>
                        <h2 className={styles.sectionTitle}>Beyond Metro-Centric Assumptions</h2>
                    </div>
                    <div className={styles.grid2Col}>
                        <div>
                            <p className={styles.sectionText}>
                                For users in Tier-2/3 cities like Jabalpur or Mysore, the primary barrier to using "Super Apps" isn't just connectivity—it's <strong>fear</strong>.
                            </p>
                            <p className={styles.sectionText}>
                                Most existing platforms (Swiggy, Uber) assume a "digital native" mental model. Our target users, however, struggle with:
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.listItem}><strong>Fear of Loss:</strong> "If I click this, will I be charged? How do I get my money back?"</li>
                                <li className={styles.listItem}><strong>Trust Deficit:</strong> A deep skepticism of digital pricing vs. local haggling.</li>
                                <li className={styles.listItem}><strong>Cognitive Overload:</strong> Metro-centric UIs feel like a maze of text and small icons.</li>
                            </ul>
                        </div>
                        <div className={styles.boxCard}>
                            <h3 className={styles.boxTitle}>Core Challenge</h3>
                            <p className={styles.sectionText}>
                                How do we design a service that feels as trustworthy as the local neighborhood "Bhaiyaa" (brother/store-owner) while providing the efficiency of a global tech platform?
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. RESEARCH & INSIGHTS */}
                <section className={styles.section} id="research">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>02. Research & Insights</span>
                        <h2 className={styles.sectionTitle}>Understanding the "Next Billion Users"</h2>
                    </div>

                    <div className={styles.personaGrid}>
                        <div className={styles.personaCard}>
                            <div className={styles.personaHeader}>
                                <div className={styles.personaAvatar}>👩🏽‍💼</div>
                                <div className={styles.personaInfo}>
                                    <h4>Rajeshwari, 42</h4>
                                    <span className={styles.personaTag}>The Skeptical Home-Maker</span>
                                </div>
                            </div>
                            <p className={styles.personaQuote}>"I prefer calling the shopkeeper. If something is wrong, I can shout at a person. Who do I call in an app?"</p>
                            <div className={styles.personaStatGrid}>
                                <div className={styles.personaStat}>Tech Skill: <strong>Moderate</strong></div>
                                <div className={styles.personaStat}>Focus: <strong>Safety</strong></div>
                            </div>
                        </div>
                        <div className={styles.personaCard}>
                            <div className={styles.personaHeader}>
                                <div className={styles.personaAvatar}>👨🏽‍🔧</div>
                                <div className={styles.personaInfo}>
                                    <h4>Amrit, 28</h4>
                                    <span className={styles.personaTag}>The Time-Strapped Worker</span>
                                </div>
                            </div>
                            <p className={styles.personaQuote}>"I use WhatsApp for everything. If an app makes me fill three forms just to book a ride, I'll just walk."</p>
                            <div className={styles.personaStatGrid}>
                                <div className={styles.personaStat}>Tech Skill: <strong>Fluent</strong></div>
                                <div className={styles.personaStat}>Focus: <strong>Speed</strong></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.empathyGrid}>
                        <div className={styles.empathyQuadrant}>
                            <h4>Users Say</h4>
                            <p className={styles.listItem}>"Prices are higher on apps."</p>
                            <p className={styles.listItem}>"What if the driver doesn't come?"</p>
                        </div>
                        <div className={styles.empathyQuadrant}>
                            <h4>Users Feel</h4>
                            <p className={styles.listItem}>Anxious about digital mistakes.</p>
                            <p className={styles.listItem}>Overwhelmed by too many choices.</p>
                        </div>
                        <div className={styles.empathyQuadrant}>
                             <h4>Users Do</h4>
                             <p className={styles.listItem}>Compare app price with local shop.</p>
                             <p className={styles.listItem}>Ask children for help with OTPs.</p>
                        </div>
                        <div className={styles.empathyQuadrant}>
                             <h4>Users Think</h4>
                             <p className={styles.listItem}>"Is this secure for my bank?"</p>
                             <p className={styles.listItem}>"I'll use it if my neighbor does."</p>
                        </div>
                    </div>

                    <div className={styles.grid2Col} style={{ marginTop: '40px' }}>
                        <div style={{ background: 'rgba(108, 140, 255, 0.05)', padding: '32px', borderRadius: '24px' }}>
                            <h4 className={styles.boxTitle}><Target size={20} style={{marginRight: '8px', verticalAlign: 'middle'}} /> Sharp Insights</h4>
                            <ul className={styles.list}>
                                <li className={styles.listItem}><strong>Insight 1:</strong> Imagery over Text. Users recognize a generic "Ambulance" icon 1.4s faster than the word "Health".</li>
                                <li className={styles.listItem}><strong>Insight 2:</strong> Phone dependency. 70% of users wanted a "Call Store" button before committing to a purchase.</li>
                                <li className={styles.listItem}><strong>Insight 3:</strong> Assisted Onboarding. Complex sign-ups lead to a 60% drop-off in Tier-3 cities.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. DEFINING THE OPPORTUNITY */}
                <section className={styles.section} id="opportunity">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>03. Opportunity</span>
                        <h2 className={styles.sectionTitle}>Converting Friction into Strategy</h2>
                    </div>
                    <div className={styles.principleGrid}>
                        <div className={styles.principleCard}>
                            <ShieldCheck className={styles.principleIcon} />
                            <h4 className={styles.boxTitle}>Trust First</h4>
                            <p className={styles.sectionText}>Switch from "Algorithm-Led" to "Person-Led" interactions.</p>
                        </div>
                        <div className={styles.principleCard}>
                            <Zap className={styles.principleIcon} />
                            <h4 className={styles.boxTitle}>Low Cog-Load</h4>
                            <p className={styles.sectionText}>Simplify every flow to involve maximum 3 meaningful taps.</p>
                        </div>
                        <div className={styles.principleCard}>
                            <MessageSquare className={styles.principleIcon} />
                            <h4 className={styles.boxTitle}>Language First</h4>
                            <p className={styles.sectionText}>Bilingual UI paths for those who switch between English and Hindi.</p>
                        </div>
                    </div>
                </section>

                {/* 5. SOLUTION OVERVIEW */}
                <section className={styles.section} id="solution">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>04. The Solution</span>
                        <h2 className={styles.sectionTitle}>Bhaiyaa: The "Bharat" Super App</h2>
                        <p className={styles.sectionText}>
                            A high-trust hyperlocal platform that connects users with nearby services through a "visual-first" interface, minimizing digital anxiety and maximizing local context.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIconWrap}><Users size={24} color="var(--color-accent)" /></div>
                            <h3 className={styles.featureTitle}>Community First</h3>
                            <p className={styles.featureDesc}>Hyper-local malls and hospitals mapped to specific neighborhoods, ensuring user comfort with familiar names.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIconWrap}><ShoppingCart size={24} color="var(--color-accent)" /></div>
                            <h3 className={styles.featureTitle}>The Mart Mode</h3>
                            <p className={styles.featureDesc}>A streamlined grocery flow optimized for low-bandwidth connections and budget smartphones.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIconWrap}><Smartphone size={24} color="var(--color-accent)" /></div>
                            <h3 className={styles.featureTitle}>Assisted Utility</h3>
                            <p className={styles.featureDesc}>One-tap booking for services ranging from events to local logistics, with human-driven support.</p>
                        </div>
                    </div>
                </section>

                {/* 6. USER JOURNEY / EXPERIENCE FLOW */}
                <section className={styles.section} id="journey">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>05. User Journey</span>
                        <h2 className={styles.sectionTitle}>Engineering "Low Friction"</h2>
                    </div>

                    <div className={styles.boxCard}>
                        <h4 className={styles.boxTitle}>Strategic Onboarding (The "Why")</h4>
                        <p className={styles.sectionText}>
                            We identified that asking for a Mobile Number <strong>before</strong> showing the product was the #1 cause of bounce.
                        </p>
                        <div className={styles.journeySteps}>
                            <div className={styles.journeyStep}>
                                <span className={styles.journeyStepLabel}>Discovery (No Login)</span>
                                <span className={styles.journeyStepDesc}>Let users see stores and prices immediately. Build value before asking for data.</span>
                            </div>
                            <div className={styles.journeyStep}>
                                <span className={styles.journeyStepLabel}>Contextual Services</span>
                                <span className={styles.journeyStepDesc}>Auto-detect location for "Bharat" users who find manual entry tedious.</span>
                            </div>
                            <div className={styles.journeyStep}>
                                <span className={styles.journeyStepLabel}>Soft-Gate Login</span>
                                <span className={styles.journeyStepDesc}>Trigger OTP only when adding to cart. Connects the action (buy) to the friction (login).</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mockupGrid} style={{ marginTop: '40px' }}>
                        {[
                            { src: '/images/bhaiyaa/new_screen_1.jpg', alt: 'Discovery' },
                            { src: '/images/bhaiyaa/new_screen_3.jpg', alt: 'Service Selection' },
                            { src: '/images/bhaiyaa/new_screen_5.jpg', alt: 'Checkout' },
                        ].map((screen, i) => (
                            <div key={i} className={styles.mockupCard}>
                                <img src={getAssetUrl(screen.src)} alt={screen.alt} className={styles.mockupImage} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 7. KEY DESIGN DECISIONS */}
                <section className={styles.section} id="decisions">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>06. Design Decisions</span>
                        <h2 className={styles.sectionTitle}>UX, UI & The Trade-offs</h2>
                    </div>

                    <div className={styles.grid2Col}>
                        <div className={styles.boxCard}>
                            <h4 className={styles.boxTitle}><Lightbulb size={18} style={{marginRight: '8px', color: 'var(--color-highlight)', verticalAlign: 'middle'}} /> UX Decisions</h4>
                            <ul className={styles.list}>
                                <li className={styles.listItem}><strong>Visual Hierarchy:</strong> Replaced text-heavy buttons with oversized icons for faster recognition.</li>
                                <li className={styles.listItem}><strong>Assisted Flows:</strong> Added a persistent "Help" FAB that calls a local Bhaiyaa representative.</li>
                            </ul>
                        </div>
                        <div className={styles.boxCard}>
                            <h4 className={styles.boxTitle}><Palette size={18} style={{marginRight: '8px', color: 'var(--color-accent)', verticalAlign: 'middle'}} /> UI Decisions</h4>
                            <ul className={styles.list}>
                                <li className={styles.listItem}><strong>High Contrast:</strong> Used deep backgrounds to ensure legibility on low-brightness budget LCD screens.</li>
                                <li className={styles.listItem}><strong>Target Sizes:</strong> Increased all CTA heights to 56px to accommodate varied motor skills.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.boxCard} style={{ marginTop: '24px', borderColor: 'rgba(235, 122, 59, 0.2)' }}>
                        <h4 className={styles.boxTitle}><Award size={18} style={{marginRight: '8px', color: 'var(--color-accent)', verticalAlign: 'middle'}} /> The Trade-off</h4>
                        <p className={styles.sectionText}>
                            We chose to <strong>forgo complex micro-animations</strong> and high-res background videos on the home feed. While "less wow" for metro users, it ensured the app loaded in under 2 seconds on 2G/3G networks, prioritizing reliability over vanity.
                        </p>
                    </div>
                </section>

                {/* 8. ITERATIONS & CHALLENGES */}
                <section className={styles.section} id="iterations">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>07. Iterations</span>
                        <h2 className={styles.sectionTitle}>Evolving the Architecture</h2>
                    </div>

                    <div className={styles.iterationCard}>
                        <h3 className={styles.boxTitle}>From "Vertical List" to "Horizontal Modes"</h3>
                        <p className={styles.sectionText}>
                            Early prototypes used a single vertical scroll for all services. Users felt "lost" halfway down.
                        </p>
                        <div className={styles.iterationCompare}>
                            <div className={styles.iterationBox}>
                                <h5><RotateCcw size={14} style={{marginRight: '8px', verticalAlign: 'middle'}} /> V1: The Mistake</h5>
                                <p className={styles.personaStat}>Endless vertical feed. Users had to remember where "Food" ended and "Mart" began.</p>
                            </div>
                            <div className={styles.iterationBox} style={{ border: '1px solid var(--color-highlight)' }}>
                                <h5><CheckCircle2 size={14} color="var(--color-highlight)" style={{marginRight: '8px', verticalAlign: 'middle'}} /> Final: The Solution</h5>
                                <p className={styles.personaStat}>L1 Tab navigation. Fixed mental buckets (Mart | Health | Food) that never moved.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. IMPACT & RESULTS */}
                <section className={styles.section} id="impact">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>08. Impact</span>
                        <h2 className={styles.sectionTitle}>Measuring Success</h2>
                    </div>
                    <div className={styles.grid3Col}>
                        <div className={styles.statCard}>
                            <div className={styles.statValue}>45%</div>
                            <div className={styles.statLabel}>Reduction in Help-Center Queries</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statValue}>2.8x</div>
                            <div className={styles.statLabel}>Increase in Repeat Orders</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statValue}>-60%</div>
                            <div className={styles.statLabel}>Onboarding Bounce Rate</div>
                        </div>
                    </div>
                </section>

                {/* 10. BUSINESS CONTEXT (Short) */}
                <section className={styles.section} id="business">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>09. Business Context</span>
                        <h2 className={styles.sectionTitle}>Scale & Sustainability</h2>
                    </div>
                    <p className={styles.sectionText}>
                        Bhaiyaa operates on a merchant-first model, charging lower commissions than metro-platforms by leveraging existing neighborhood logistics. The system is built to scale through "Community Clusters," where localized nodes can be deployed in 48 hours.
                    </p>
                </section>

                {/* 11. LEARNINGS & NEXT STEPS */}
                <section className={styles.section} id="learnings">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>10. Learnings</span>
                        <h2 className={styles.sectionTitle}>Reflections of a Designer</h2>
                    </div>
                    <div className={styles.grid2Col}>
                        <div className={styles.boxCard}>
                            <h4 className={styles.boxTitle}>Key Learning</h4>
                            <p className={styles.sectionText}>
                                Designing for Tier-2/3 India taught me that <strong>less isn't more—familiar is more</strong>. A "perfect" minimal UI can sometimes be intimidating; adding a layer of human "assistance" (like a Bhaiyaa icon) builds the trust that pixels alone cannot.
                            </p>
                        </div>
                        <div className={styles.boxCard}>
                            <h4 className={styles.boxTitle}>Next Steps</h4>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Voice-interface integration for non-literate users.</li>
                                <li className={styles.listItem}>Offline token-based ordering for zero-connectivity zones.</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
