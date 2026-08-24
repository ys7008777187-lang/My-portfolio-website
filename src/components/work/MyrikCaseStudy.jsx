"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
    Zap, MapPin, BatteryCharging, Leaf, TrendingUp, Users, DollarSign, Target,
    Activity, BarChart2, Briefcase, CheckCircle, Navigation, Package,
    AlertTriangle, Clock, Truck, Eye, Lightbulb, Layers, ArrowRight,
    MessageSquare, Search, Smartphone, Shield, RefreshCw, Star, Compass
} from 'lucide-react';
import { getOptimizedUrl } from "../../lib/assetUrl";
import { IMAGES } from "../../constants/images";
import styles from "./MyrikCaseStudy.module.css";

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function MyrikCaseStudy() {
    return (
        <div className={styles.container}>
            {/* ===== HERO ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroGrid} />
                <motion.div initial="hidden" animate="visible" variants={stagger} className={styles.heroContent}>
                    <motion.span variants={fadeInUp} className={styles.badge}>UX Case Study</motion.span>
                    <motion.h1 variants={fadeInUp} className={styles.title}>
                        Myrik: Designing Mobility for Bharat's Underserved Towns
                    </motion.h1>
                    <motion.p variants={fadeInUp} className={styles.subtitle}>
                        How I designed the end-to-end experience for an EV ride-hailing platform that brings affordable, reliable transport to India's Tier 2–4 cities — where 400M+ people have been left behind by the digital mobility revolution.
                    </motion.p>
                    <motion.div variants={fadeInUp} className={styles.metaGrid}>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>My Role</span>
                            <span className={styles.metaValue}>Product Designer (UX/UI)</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Timeline</span>
                            <span className={styles.metaValue}>2023 — Present</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Team</span>
                            <span className={styles.metaValue}>Design, Engineering, Ops</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Platform</span>
                            <span className={styles.metaValue}>Android (Rider & Driver)</span>
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
                        <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.HOME)} alt="Myrik Home Screen" />
                    </div>
                    <div className={`${styles.heroMockup} ${styles.mockupFront}`}>
                        <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.SPLASH_NEW)} alt="Myrik Splash Screen" />
                    </div>
                </motion.div>
            </section>

            <div className={styles.contentWrapper}>

                {/* ===== 01. PROJECT OVERVIEW ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Overview</span>
                        <h2 className={styles.sectionTitle}>The Brief</h2>
                    </div>
                    <div className={styles.contentRow}>
                        <div>
                            <p className={styles.sectionText}>
                                <strong>Myrik</strong> is an EV ride-hailing startup founded in 2023 under <em>Arohana Technologies Pvt Ltd</em>, Mumbai. I joined as the sole product designer to shape the entire rider and delivery experience — from first-time onboarding to daily commute habits.
                            </p>
                            <p className={styles.sectionText}>
                                The challenge was clear: <strong>design a mobility experience for people who've never used a ride-hailing app before</strong>, in towns where auto-rickshaws run without meters, routes are informal, and smartphone literacy varies wildly.
                            </p>
                        </div>
                        <div className={styles.highlightCard}>
                            <Target className={styles.cardIcon} size={28} />
                            <h3 className={styles.cardTitle}>Design Goals</h3>
                            <ul className={styles.swotList}>
                                <li><strong>Simplicity First</strong> — Zero learning curve for first-time smartphone users</li>
                                <li><strong>Trust by Default</strong> — Transparent pricing, visible driver identity</li>
                                <li><strong>Affordability Centric</strong> — Design for ₹10 rides, not ₹300 cabs</li>
                                <li><strong>Multi-Modal</strong> — Same platform for people + parcels</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ===== 02. PROBLEM — USER-CENTRIC ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Problem</span>
                        <h2 className={styles.sectionTitle}>What Users Actually Face Every Day</h2>
                        <p className={styles.sectionText}>
                            Before diving into solutions, I needed to understand the lived reality of commuters in Tier-3 and Tier-4 towns. The problems aren't abstract market gaps — they're daily frustrations affecting real people.
                        </p>
                    </div>
                    
                    <div className={styles.swotGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        <div className={styles.swotItem} style={{ borderLeft: '3px solid #f87171', borderBottom: 'none' }}>
                            <AlertTriangle color="#f87171" size={24} style={{marginBottom: '12px'}} />
                            <h3 className={styles.cardTitle} style={{fontSize: '1.1rem'}}>The Haggling Trap</h3>
                            <p className={styles.sectionText} style={{fontSize: '0.9rem', marginBottom: 0}}>
                                <em>"Every morning I argue with auto drivers about the fare. Some days they refuse to go to my college."</em> — Priya, 22, nursing student in Muzaffarpur. No fixed pricing means anxiety on every commute.
                            </p>
                        </div>
                        <div className={styles.swotItem} style={{ borderLeft: '3px solid #facc15', borderBottom: 'none' }}>
                            <Clock color="#facc15" size={24} style={{marginBottom: '12px'}} />
                            <h3 className={styles.cardTitle} style={{fontSize: '1.1rem'}}>The Waiting Game</h3>
                            <p className={styles.sectionText} style={{fontSize: '0.9rem', marginBottom: 0}}>
                                <em>"I stand at the crossing for 30 minutes hoping a shared auto passes by."</em> — Rajesh, 34, government clerk. No real-time visibility means wasted hours every week.
                            </p>
                        </div>
                        <div className={styles.swotItem} style={{ borderLeft: '3px solid var(--color-accent)', borderBottom: 'none' }}>
                            <DollarSign color="var(--color-accent)" size={24} style={{marginBottom: '12px'}} />
                            <h3 className={styles.cardTitle} style={{fontSize: '1.1rem'}}>The Cost Burden</h3>
                            <p className={styles.sectionText} style={{fontSize: '0.9rem', marginBottom: 0}}>
                                <em>"₹60 for 3km? That's my lunch money."</em> — Ankit, 19, college student. For families earning ₹15,000/month, existing transport eats 15–20% of their income.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== 03. RESEARCH & INSIGHTS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Research</span>
                        <h2 className={styles.sectionTitle}>Understanding the Ground Reality</h2>
                        <p className={styles.sectionText}>
                            I conducted field research across three small towns to deeply understand how people actually move and what barriers prevent adoption of digital solutions.
                        </p>
                    </div>

                    <div className={styles.grid3Col}>
                        <div className={styles.statCard}>
                            <Users size={28} color="var(--color-accent)" style={{marginBottom: '16px'}} />
                            <div className={styles.statValue} style={{ fontSize: '2rem' }}>25+</div>
                            <div className={styles.statLabel}>User Interviews Conducted</div>
                        </div>
                        <div className={styles.statCard}>
                            <MapPin size={28} color="var(--color-highlight)" style={{marginBottom: '16px'}} />
                            <div className={styles.statValue} style={{ fontSize: '2rem' }}>3</div>
                            <div className={styles.statLabel}>Town Field Visits</div>
                        </div>
                        <div className={styles.statCard}>
                            <Eye size={28} color="var(--color-highlight)" style={{marginBottom: '16px'}} />
                            <div className={styles.statValue} style={{ fontSize: '2rem' }}>40hrs</div>
                            <div className={styles.statLabel}>Shadowing Riders & Drivers</div>
                        </div>
                    </div>

                    <div className={styles.contentRow} style={{ marginTop: '48px' }}>
                        <div>
                            <h3 className={styles.cardTitle}>Research Methods</h3>
                            <ul className={styles.swotList}>
                                <li><strong>Contextual Inquiry</strong> — Spent mornings at auto stands observing how commuters find rides, negotiate fares, and deal with refusals</li>
                                <li><strong>Driver Shadowing</strong> — Rode alongside 8 e-rickshaw drivers to understand route decisions, earning patterns, and pain points</li>
                                <li><strong>Diary Studies</strong> — 12 daily commuters logged their transport experiences for 2 weeks via WhatsApp voice notes</li>
                                <li><strong>Merchant Interviews</strong> — Spoke with 10 local shop owners about their delivery challenges and costs</li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles.quoteBlock}>
                                <p className={styles.quoteText}>"I don't trust apps. Last time I booked online, the driver called me and said 'come to the main road.' I ended up walking 15 minutes."</p>
                                <span className={styles.quoteAuthor}>— Meena, 45, homemaker, Bhagalpur</span>
                            </div>
                            <div className={styles.quoteBlock} style={{ marginTop: '16px' }}>
                                <p className={styles.quoteText}>"My customers call me and say 'send someone with the order.' But I have no delivery boy. I lose sales every day."</p>
                                <span className={styles.quoteAuthor}>— Vikram, pharmacy owner, Gaya</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 04. KEY INSIGHTS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Insights</span>
                        <h2 className={styles.sectionTitle}>What the Research Revealed</h2>
                        <p className={styles.sectionText}>
                            Synthesizing hundreds of data points, I distilled four critical insights that shaped every design decision going forward.
                        </p>
                    </div>

                    <div className={styles.insightsGrid}>
                        <div className={styles.insightCard}>
                            <div className={styles.insightNumber}>01</div>
                            <div className={styles.insightContent}>
                                <h4 className={styles.insightLabel}>Observation</h4>
                                <p className={styles.sectionText} style={{ marginBottom: '12px', fontSize: '0.9rem' }}>Users don't distrust technology — they distrust unfamiliar interfaces. Most use WhatsApp and YouTube daily.</p>
                                <h4 className={styles.insightLabel}>Insight</h4>
                                <p className={styles.sectionText} style={{ marginBottom: '12px', fontSize: '0.9rem' }}><strong>Design literacy exists, but only for patterns they already know.</strong></p>
                                <h4 className={styles.insightLabel}>Design Implication</h4>
                                <p className={styles.sectionText} style={{ marginBottom: 0, fontSize: '0.9rem' }}>Use familiar patterns — large buttons, OTP-based login (like WhatsApp), visual-first navigation over text labels.</p>
                            </div>
                        </div>

                        <div className={styles.insightCard}>
                            <div className={styles.insightNumber}>02</div>
                            <div className={styles.insightContent}>
                                <h4 className={styles.insightLabel}>Observation</h4>
                                <p className={styles.sectionText} style={{ marginBottom: '12px', fontSize: '0.9rem' }}>The biggest fear isn't price — it's uncertainty. "Will the driver actually come? How much will it really cost?"</p>
                                <h4 className={styles.insightLabel}>Insight</h4>
                                <p className={styles.sectionText} style={{ marginBottom: '12px', fontSize: '0.9rem' }}><strong>Trust = transparency. Show everything upfront, no surprises.</strong></p>
                                <h4 className={styles.insightLabel}>Design Implication</h4>
                                <p className={styles.sectionText} style={{ marginBottom: 0, fontSize: '0.9rem' }}>Fixed pricing displayed before booking. Real-time driver tracking. Driver photo and vehicle details visible immediately.</p>
                            </div>
                        </div>

                        <div className={styles.insightCard}>
                            <div className={styles.insightNumber}>03</div>
                            <div className={styles.insightContent}>
                                <h4 className={styles.insightLabel}>Observation</h4>
                                <p className={styles.sectionText} style={{ marginBottom: '12px', fontSize: '0.9rem' }}>Many commuters ride the same route daily — school, market, hospital. They want predictability, not on-demand flexibility.</p>
                                <h4 className={styles.insightLabel}>Insight</h4>
                                <p className={styles.sectionText} style={{ marginBottom: '12px', fontSize: '0.9rem' }}><strong>Subscription beats on-demand for habitual riders in small towns.</strong></p>
                                <h4 className={styles.insightLabel}>Design Implication</h4>
                                <p className={styles.sectionText} style={{ marginBottom: 0, fontSize: '0.9rem' }}>Monthly booking feature as a first-class citizen — not buried in settings. One-tap daily commute with zero daily decision-making.</p>
                            </div>
                        </div>

                        <div className={styles.insightCard}>
                            <div className={styles.insightNumber}>04</div>
                            <div className={styles.insightContent}>
                                <h4 className={styles.insightLabel}>Observation</h4>
                                <p className={styles.sectionText} style={{ marginBottom: '12px', fontSize: '0.9rem' }}>Local merchants desperately need delivery infrastructure but can't afford dedicated delivery staff or aggregator commissions.</p>
                                <h4 className={styles.insightLabel}>Insight</h4>
                                <p className={styles.sectionText} style={{ marginBottom: '12px', fontSize: '0.9rem' }}><strong>The same fleet that moves people can move goods — "utility stacking" is the unlock.</strong></p>
                                <h4 className={styles.insightLabel}>Design Implication</h4>
                                <p className={styles.sectionText} style={{ marginBottom: 0, fontSize: '0.9rem' }}>Design a unified platform where ride-hailing and delivery share the same driver network, vehicle fleet, and dispatch engine.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 05. SOLUTION OVERVIEW ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Solution</span>
                        <h2 className={styles.sectionTitle}>What We Built</h2>
                        <p className={styles.sectionText}>
                            A mobile-first EV ride-hailing platform designed ground-up for non-metro India. Rides start at <strong>₹10</strong>. The same fleet handles passengers, bulk orders, and monthly subscriptions — creating a self-reinforcing ecosystem.
                        </p>
                    </div>

                    <div className={styles.infographicFlow}>
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><Zap size={24} /></div>
                            <div className={styles.flowLabel}>Rider App</div>
                            <div className={styles.flowDesc}>Book, track, pay via UPI</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox} style={{ background: 'var(--color-accent)', color: 'var(--color-bg-primary)' }}><Activity size={24} /></div>
                            <div className={styles.flowLabel}>Myrik Engine</div>
                            <div className={styles.flowDesc}>AI dispatch, geo-fencing, dynamic pricing</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><Navigation size={24} /></div>
                            <div className={styles.flowLabel}>Driver App</div>
                            <div className={styles.flowDesc}>Earnings, navigation, ride requests</div>
                        </div>
                    </div>

                    {/* Ecosystem Diagram */}
                    <div className={styles.ecosystemDiagram} style={{ marginTop: '48px' }}>
                        <div className={styles.ecoTopRow}>
                            <div className={styles.ecoNode}>
                                <div className={styles.ecoNodeIcon}><Users size={28} /></div>
                                <h4>Daily Commuters</h4>
                                <p>Affordable rides from ₹10 with monthly subscription options</p>
                            </div>
                            <div className={styles.ecoNode}>
                                <div className={styles.ecoNodeIcon}><Package size={28} /></div>
                                <h4>Local Merchants</h4>
                                <p>On-demand bulk orders & parcel delivery at fraction of costs</p>
                            </div>
                        </div>
                        
                        <div className={styles.ecoCenter}>
                            <Zap size={28} />
                            Myrik Mobility Platform
                            <span>One Fleet — Many Services</span>
                        </div>

                        <div className={styles.ecoTopRow}>
                            <div className={styles.ecoNode}>
                                <div className={styles.ecoNodeIcon}><Truck size={28} /></div>
                                <h4>E-Rickshaw Drivers</h4>
                                <p>Maximized earnings via pooled rides + delivery tasks</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 06. USER JOURNEY — ONBOARDING ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>User Journey</span>
                        <h2 className={styles.sectionTitle}>Designing for First-Time Users</h2>
                        <p className={styles.sectionText}>
                            Every screen in the onboarding flow was designed with one question: <strong>"Would Meena, the homemaker who's never used Uber, understand this?"</strong> Each step earns trust before asking for commitment.
                        </p>
                    </div>

                    <div className={styles.deliveryMockupGallery}>
                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.ONBOARDING)} alt="Step 1: Welcome" />
                            </div>
                            <div className={styles.deliveryPhoneLabel}>01. WELCOME</div>
                            <p className={styles.flowDesc} style={{ maxWidth: '160px' }}>
                                <strong>Why:</strong> Establish the value prop in one glance. Regional language support builds immediate familiarity.
                            </p>
                        </div>

                        <div className={styles.flowArrow} style={{ marginTop: '145px' }} />

                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.LOGIN)} alt="Step 2: Phone Login" />
                            </div>
                            <div className={styles.deliveryPhoneLabel}>02. PHONE LOGIN</div>
                            <p className={styles.flowDesc} style={{ maxWidth: '160px' }}>
                                <strong>Why:</strong> Phone-only login — no email, no social login. Single input field reduces cognitive load for first-time users.
                            </p>
                        </div>

                        <div className={styles.flowArrow} style={{ marginTop: '145px' }} />

                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.VERIFICATION)} alt="Step 3: OTP" />
                            </div>
                            <div className={styles.deliveryPhoneLabel}>03. OTP VERIFY</div>
                            <p className={styles.flowDesc} style={{ maxWidth: '160px' }}>
                                <strong>Why:</strong> Auto-read OTP reduces friction. Users see this pattern daily in UPI apps — familiarity breeds trust.
                            </p>
                        </div>

                        <div className={styles.flowArrow} style={{ marginTop: '145px' }} />

                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.PERMISSIONS)} alt="Step 4: Permissions" />
                            </div>
                            <div className={styles.deliveryPhoneLabel}>04. PERMISSIONS</div>
                            <p className={styles.flowDesc} style={{ maxWidth: '160px' }}>
                                <strong>Why:</strong> Explain <em>why</em> we need location before requesting it. Transparent reasoning prevents the knee-jerk "Deny" response.
                            </p>
                        </div>

                        <div className={styles.flowArrow} style={{ marginTop: '145px' }} />

                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.HOME_MAP)} alt="Step 5: Ready to Ride" />
                            </div>
                            <div className={styles.deliveryPhoneLabel}>05. READY TO RIDE</div>
                            <p className={styles.flowDesc} style={{ maxWidth: '160px' }}>
                                <strong>Why:</strong> Instant map view with nearby drivers creates a sense of possibility. The "book" CTA is unmissable.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== 06B. CORE BOOKING FLOW ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Core Flow</span>
                        <h2 className={styles.sectionTitle}>The Ride Booking Experience</h2>
                        <p className={styles.sectionText}>
                            Three screens. Under 30 seconds. That was our target for the complete booking flow. Every interaction was stripped to its essential purpose.
                        </p>
                    </div>

                    <div className={styles.flexEqual} style={{ marginTop: '0' }}>
                        <div className={styles.boxCard} style={{ margin: 0, height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 className={styles.boxTitle}>Design Rationale</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}><strong>Fixed Pricing Upfront:</strong> Eliminates the #1 anxiety — "how much will this cost?" No surge, no surprises. Price visible before confirming.</li>
                                <li className={styles.listItem}><strong>Pooled Ride Default:</strong> Shared rides are the default (not an opt-in), matching how e-rickshaws already operate. This keeps costs at ₹10–25.</li>
                                <li className={styles.listItem}><strong>Real-Time Tracking:</strong> Once matched, the driver's live location is visible. This addresses the trust gap directly — users can see the driver approaching.</li>
                            </ul>
                        </div>
                        <div className={styles.mockupSideBySide} style={{ alignItems: 'center' }}>
                            <div className={styles.heroMockup} style={{ position: 'relative', width: '150px', height: '320px', transform: 'none', animation: 'none', border: '5px solid #1a1a1a', background: '#0a0a0a', margin: 0 }}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.BOOKING)} alt="Booking Screen" />
                                <div style={{ position: 'absolute', bottom: '-22px', left: 0, width: '100%', textAlign: 'center', fontSize: '8px', color: 'var(--color-text-muted)' }}>1. BOOKING</div>
                            </div>
                            <div className={styles.heroMockup} style={{ position: 'relative', width: '150px', height: '320px', transform: 'none', animation: 'none', border: '5px solid var(--color-accent)', background: '#111', margin: 0 }}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.SEARCHING)} alt="Searching State" />
                                <div style={{ position: 'absolute', bottom: '-22px', left: 0, width: '100%', textAlign: 'center', fontSize: '8px', color: 'var(--color-accent)', fontWeight: 'bold' }}>2. MATCHING</div>
                            </div>
                            <div className={styles.heroMockup} style={{ position: 'relative', width: '150px', height: '320px', transform: 'none', animation: 'none', border: '5px solid #1a1a1a', background: '#0a0a0a', margin: 0 }}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.TRACKING)} alt="Tracking Screen" />
                                <div style={{ position: 'absolute', bottom: '-22px', left: 0, width: '100%', textAlign: 'center', fontSize: '8px', color: 'var(--color-text-muted)' }}>3. TRACKING</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 07. DESIGN DECISIONS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Design Decisions</span>
                        <h2 className={styles.sectionTitle}>The "Why" Behind Every Choice</h2>
                        <p className={styles.sectionText}>
                            Good design isn't about making things look pretty — it's about making the right trade-offs. Here are the key design decisions and the reasoning behind them.
                        </p>
                    </div>

                    <div className={styles.grid3Col} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        <div className={styles.designDecisionCard}>
                            <div className={styles.ddIcon}><Smartphone size={22} /></div>
                            <h4 className={styles.ddTitle}>Mobile-First, Low-Bandwidth Optimized</h4>
                            <p className={styles.ddDesc}><strong>Decision:</strong> Designed for Android-only launch with minimal data usage.</p>
                            <p className={styles.ddReason}><strong>Why:</strong> 92% of our target users are on Android. Many use 2G/3G networks. Every screen loads under 1 second by using system fonts, compressed assets, and minimal animations on lower-end devices.</p>
                        </div>

                        <div className={styles.designDecisionCard}>
                            <div className={styles.ddIcon}><Layers size={22} /></div>
                            <h4 className={styles.ddTitle}>Card-Based UI Over Complex Navigation</h4>
                            <p className={styles.ddDesc}><strong>Decision:</strong> Single-screen home with card-based actions instead of tab navigation.</p>
                            <p className={styles.ddReason}><strong>Why:</strong> Card patterns are universally understood — swipe, tap, done. Complex hamburger menus or bottom tabs create hidden functionality that first-time users never discover.</p>
                        </div>

                        <div className={styles.designDecisionCard}>
                            <div className={styles.ddIcon}><Shield size={22} /></div>
                            <h4 className={styles.ddTitle}>UPI-First Payment Architecture</h4>
                            <p className={styles.ddDesc}><strong>Decision:</strong> UPI as the primary payment method, with cash as fallback.</p>
                            <p className={styles.ddReason}><strong>Why:</strong> UPI penetration in Tier-3 India exceeds 65% thanks to PhonePe/GPay. Credit cards are virtually non-existent. Supporting UPI means supporting the payment method users already trust.</p>
                        </div>

                        <div className={styles.designDecisionCard}>
                            <div className={styles.ddIcon}><Compass size={22} /></div>
                            <h4 className={styles.ddTitle}>Visual-First, Text-Minimal Interface</h4>
                            <p className={styles.ddDesc}><strong>Decision:</strong> Icons, maps, and color coding over text-heavy UI.</p>
                            <p className={styles.ddReason}><strong>Why:</strong> In multilingual regions, visual communication transcends language barriers. A green dot on a map communicates "driver is here" faster than any text label — in any language.</p>
                        </div>
                    </div>
                </section>

                {/* ===== 08. DELIVERY EXPERIENCE ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Delivery</span>
                        <h2 className={styles.sectionTitle}>Extending the Platform — Hyperlocal Delivery</h2>
                        <p className={styles.sectionText}>
                            The most powerful design insight was that people and parcels can share the same infrastructure. I designed a delivery flow that merchants and individuals could use with the exact same fleet.
                        </p>
                    </div>

                    <div className={styles.infographicFlow}>
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><Package size={20} /></div>
                            <div className={styles.flowLabel}>Request</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox} style={{ background: 'var(--color-accent)', color: '#fff' }}><Users size={20} /></div>
                            <div className={styles.flowLabel}>Match</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><MapPin size={20} /></div>
                            <div className={styles.flowLabel}>Pickup</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><Truck size={20} /></div>
                            <div className={styles.flowLabel}>Deliver</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><CheckCircle size={20} /></div>
                            <div className={styles.flowLabel}>Confirm</div>
                        </div>
                    </div>

                    <div className={styles.highlightCard} style={{ marginTop: '32px' }}>
                        <h3 className={styles.cardTitle}>Who Uses This</h3>
                        <div className={styles.grid3Col} style={{ marginTop: '16px' }}>
                            <div className={styles.statCard} style={{ textAlign: 'left', padding: '20px' }}>
                                <strong style={{ color: 'var(--color-text-primary)' }}>Pharmacies</strong>
                                <p className={styles.sectionText} style={{ fontSize: '0.85rem', marginBottom: 0, marginTop: '4px' }}>Medicine delivery within 45 minutes, no dedicated staff needed</p>
                            </div>
                            <div className={styles.statCard} style={{ textAlign: 'left', padding: '20px' }}>
                                <strong style={{ color: 'var(--color-text-primary)' }}>Wholesale Distributors</strong>
                                <p className={styles.sectionText} style={{ fontSize: '0.85rem', marginBottom: 0, marginTop: '4px' }}>Bulk orders from warehouse to retail shops</p>
                            </div>
                            <div className={styles.statCard} style={{ textAlign: 'left', padding: '20px' }}>
                                <strong style={{ color: 'var(--color-text-primary)' }}>Schools & Offices</strong>
                                <p className={styles.sectionText} style={{ fontSize: '0.85rem', marginBottom: 0, marginTop: '4px' }}>Monthly booking for recurring group transport</p>
                            </div>
                        </div>
                    </div>

                    {/* Delivery App Mockups */}
                    <div className={styles.deliveryMockupGallery}>
                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.DELIVERY_WELCOME)} alt="Delivery Welcome" />
                            </div>
                            <span className={styles.deliveryPhoneLabel}>Welcome</span>
                        </div>
                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.DELIVERY_PICKUP)} alt="Pickup & Drop" />
                            </div>
                            <span className={styles.deliveryPhoneLabel}>Book</span>
                        </div>
                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.DELIVERY_SELECT_RIDE)} alt="Select Ride" />
                            </div>
                            <span className={styles.deliveryPhoneLabel}>Match</span>
                        </div>
                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.DELIVERY_TRACKING)} alt="Tracking" />
                            </div>
                            <span className={styles.deliveryPhoneLabel}>Track</span>
                        </div>
                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.DELIVERY_ORDERS)} alt="Order History" />
                            </div>
                            <span className={styles.deliveryPhoneLabel}>History</span>
                        </div>
                    </div>
                </section>

                {/* ===== 09. ITERATIONS & CHALLENGES ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Iterations</span>
                        <h2 className={styles.sectionTitle}>What Changed Along the Way</h2>
                        <p className={styles.sectionText}>
                            No design ships perfectly on the first try. Here are the key iterations that significantly improved the experience.
                        </p>
                    </div>

                    {/* Iteration 1: Splash Screen */}
                    <div className={styles.iterationBlock}>
                        <h3 className={styles.cardTitle}>Iteration 1: Splash Screen Evolution</h3>
                        <p className={styles.sectionText}>
                            The original splash screen was visually heavy with detailed illustrations. User testing revealed it took too long to load on 2G networks and confused users about what the app does.
                        </p>
                        <div className={styles.iterationCompare}>
                            <div className={styles.iterationSide}>
                                <div className={styles.iterationLabel} style={{ color: '#f87171' }}>BEFORE</div>
                                <div className={styles.deliveryPhone} style={{ width: '160px', height: '340px' }}>
                                    <img src={getOptimizedUrl(IMAGES.PROJECTS.MYRIK.SCREENS.SPLASH_ORIGINAL)} alt="Original Splash Screen" />
                                </div>
                                <p className={styles.flowDesc}>Heavy illustration, slow load, unclear messaging</p>
                            </div>
                            <div className={styles.iterationArrow}>
                                <ArrowRight size={24} color="var(--color-accent)" />
                            </div>
                            <div className={styles.iterationSide}>
                                <div className={styles.iterationLabel} style={{ color: 'var(--color-highlight)' }}>AFTER</div>
                                <div className={styles.deliveryPhone} style={{ width: '160px', height: '340px' }}>
                                    <img src={getOptimizedUrl("/images/myrik/screens/splash_new.png")} alt="Refined Splash Screen" />
                                </div>
                                <p className={styles.flowDesc}>Clean branding, instant load, clear value prop</p>
                            </div>
                        </div>
                    </div>

                    {/* Iteration 2 */}
                    <div className={styles.iterationBlock} style={{ marginTop: '24px' }}>
                        <h3 className={styles.cardTitle}>Iteration 2: Simplifying Permissions</h3>
                        <p className={styles.sectionText}>
                            In early testing, 40% of users denied location permission because the system dialog appeared without context. We added a pre-permission screen that explains <em>why</em> location is needed using simple illustrations. Permission grant rate improved from 60% to 92%.
                        </p>
                    </div>

                    {/* Iteration 3 */}
                    <div className={styles.iterationBlock} style={{ marginTop: '48px' }}>
                        <h3 className={styles.cardTitle}>Iteration 3: Booking Confirmation Redesign</h3>
                        <p className={styles.sectionText}>
                            The first version of the booking screen showed price, distance, and ETA in a dense table format. Users with lower literacy found this overwhelming. We switched to a visual card format — large price, animation for "finding driver," and a simple map showing the route. Booking completion rate increased by 35%.
                        </p>
                    </div>
                </section>

                {/* ===== 10. IMPACT & RESULTS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Impact</span>
                        <h2 className={styles.sectionTitle}>Measuring Design Impact</h2>
                        <p className={styles.sectionText}>
                            Design success isn't just about aesthetics — it's about outcomes. Here's how the design decisions translated into measurable results.
                        </p>
                    </div>

                    <div className={styles.impactGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>₹10</div>
                            <div className={styles.statLabel}>Rides Starting Price</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>92%</div>
                            <div className={styles.statLabel}>Permission Grant Rate (up from 60%)</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>35%</div>
                            <div className={styles.statLabel}>Booking Completion Improvement</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>&lt;30s</div>
                            <div className={styles.statLabel}>Average Booking Time</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>100%</div>
                            <div className={styles.statLabel}>Electric Vehicle Fleet</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>20–45m</div>
                            <div className={styles.statLabel}>Delivery Time in Underserved Zones</div>
                        </div>
                    </div>

                    <div className={styles.highlightCard} style={{ marginTop: '32px' }}>
                        <h3 className={styles.cardTitle}>Competitive Context</h3>
                        <div className={styles.tableContainer} style={{ marginTop: '16px', border: 'none' }}>
                            <table className={styles.dataTable}>
                                <thead>
                                    <tr><th>Platform</th><th>Focus</th><th>Fleet</th><th>Pricing</th><th>Myrik's Edge</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>Uber/Ola</strong></td><td>Tier 1</td><td>Cars, Autos</td><td>Premium</td><td>Capital efficiency in Tier-3</td></tr>
                                    <tr><td><strong>Rapido</strong></td><td>Tier 1–2</td><td>Bikes</td><td>Budget</td><td>Shared rides = cheaper per seat</td></tr>
                                    <tr><td><strong>Namma Yatri</strong></td><td>Metros</td><td>Autos</td><td>Subscription</td><td>Multi-channel revenue model</td></tr>
                                    <tr className={styles.myrikHighlight}><td><strong>Myrik</strong></td><td>Tier 2–4</td><td>E-Rickshaws</td><td>₹10 micro</td><td>Digitalizing the informal sector</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ===== 11. LEARNINGS & NEXT STEPS ===== */}
                <section className={styles.section} style={{ borderBottom: 'none' }}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Reflections</span>
                        <h2 className={styles.sectionTitle}>What I Learned & What's Next</h2>
                    </div>

                    <div>
                        <h3 className={styles.cardTitle}>Key Learnings</h3>
                        <div className={styles.learningsContainer}>
                            <div className={styles.learningItem}>
                                <Lightbulb size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                <p className={styles.sectionText} style={{ marginBottom: 0 }}>
                                    <strong>Designing for Bharat ≠ dumbing down.</strong> It means respecting user context. People in small towns are smart — they just operate in different constraints (bandwidth, literacy, trust).
                                </p>
                            </div>
                            <div className={styles.learningItem}>
                                <Lightbulb size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                <p className={styles.sectionText} style={{ marginBottom: 0 }}>
                                    <strong>Field research is non-negotiable.</strong> Every desk-based assumption I had was wrong. The real insights came from standing at auto stands at 7 AM watching people struggle.
                                </p>
                            </div>
                            <div className={styles.learningItem}>
                                <Lightbulb size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                <p className={styles.sectionText} style={{ marginBottom: 0 }}>
                                    <strong>Trust is the product.</strong> The biggest design challenge wasn't UI — it was designing for trust in a market where digital platforms have a poor reputation.
                                </p>
                            </div>
                            <div className={styles.learningItem}>
                                <Lightbulb size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                <p className={styles.sectionText} style={{ marginBottom: 0 }}>
                                    <strong>Utility stacking creates defensibility.</strong> The decision to combine rides + delivery on one platform wasn't just good UX — it created network effects that are hard to replicate.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '48px' }}>
                        <h3 className={styles.cardTitle}>What's Next</h3>
                        <div className={styles.grid3Col} style={{ marginTop: '20px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            <div className={styles.designDecisionCard}>
                                <div className={styles.ddIcon}><Compass size={20} /></div>
                                <h4 className={styles.ddTitle} style={{ fontSize: '1rem' }}>Hindi-First Localization</h4>
                                <p className={styles.ddReason}>Full app translation and voice-guided navigation for lower-literacy users</p>
                            </div>
                            <div className={styles.designDecisionCard}>
                                <div className={styles.ddIcon}><Navigation size={20} /></div>
                                <h4 className={styles.ddTitle} style={{ fontSize: '1rem' }}>Driver App Redesign</h4>
                                <p className={styles.ddReason}>Earnings dashboard, incentive gamification, and route optimization</p>
                            </div>
                            <div className={styles.designDecisionCard}>
                                <div className={styles.ddIcon}><Eye size={20} /></div>
                                <h4 className={styles.ddTitle} style={{ fontSize: '1rem' }}>Accessibility Audit</h4>
                                <p className={styles.ddReason}>Larger touch targets, high-contrast mode for outdoor visibility, screen reader support</p>
                            </div>
                            <div className={styles.designDecisionCard}>
                                <div className={styles.ddIcon}><Smartphone size={20} /></div>
                                <h4 className={styles.ddTitle} style={{ fontSize: '1rem' }}>Offline Mode</h4>
                                <p className={styles.ddReason}>Ride booking via SMS fallback for areas with intermittent connectivity</p>
                            </div>
                            <div className={styles.designDecisionCard}>
                                <div className={styles.ddIcon}><Shield size={20} /></div>
                                <h4 className={styles.ddTitle} style={{ fontSize: '1rem' }}>Women Safety Features</h4>
                                <p className={styles.ddReason}>SOS button, trusted contacts sharing, driver verification badges</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
