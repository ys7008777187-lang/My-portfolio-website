"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Zap, Users, DollarSign, Target, Shield, Search, Smartphone, Star,
    ArrowRight, MessageSquare, Briefcase, CheckCircle, Layers, Eye,
    Lightbulb, AlertTriangle, Lock, BarChart2, Bookmark, Bell,
    Settings, UserCheck, CreditCard, FileText, Filter, Award,
    TrendingUp, Heart, Send, Calendar, Globe, Compass
} from 'lucide-react';
import { getAssetUrl } from "../../lib/assetUrl";
import styles from "./WorqCaseStudy.module.css";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const PhoneMockup = ({ src, alt }) => (
    <div className={styles.phoneMockup}>
        <img src={getAssetUrl(src)} alt={alt} />
    </div>
);

export default function WorqCaseStudy() {
    return (
        <div className={styles.container}>

            {/* ===== 1. HERO / COVER ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroGrid} />
                <motion.div initial="hidden" animate="visible" variants={stagger} className={styles.heroContent}>
                    <motion.span variants={fadeInUp} className={styles.badge}>UX Case Study</motion.span>
                    <motion.div variants={fadeInUp} className={styles.heroBrand}>WORQ</motion.div>
                    <motion.p variants={fadeInUp} className={styles.heroTagline}>Social Freelance Network</motion.p>
                    <motion.div variants={fadeInUp} className={styles.heroFlow}>
                        <span className={styles.heroFlowStep}>Discover</span>
                        <ArrowRight size={16} className={styles.heroFlowArrow} />
                        <span className={styles.heroFlowStep}>Connect</span>
                        <ArrowRight size={16} className={styles.heroFlowArrow} />
                        <span className={styles.heroFlowStep}>Hire</span>
                        <ArrowRight size={16} className={styles.heroFlowArrow} />
                        <span className={styles.heroFlowStep}>Get Paid</span>
                    </motion.div>
                    <motion.div variants={fadeInUp} className={styles.metaGrid}>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>My Role</span>
                            <span className={styles.metaValue}>Product Designer (UX/UI)</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Platform</span>
                            <span className={styles.metaValue}>Android & iOS</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Type</span>
                            <span className={styles.metaValue}>Social + Marketplace + Fintech</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={styles.heroMockupStack}
                >
                    <PhoneMockup src="/images/worq/Feed_or_Landing_screen.jpeg" alt="WORQ Feed" />
                    <PhoneMockup src="/images/worq/Networking_profiles_.jpeg" alt="WORQ Network" />
                    <PhoneMockup src="/images/worq/Wallet.jpeg" alt="WORQ Wallet" />
                </motion.div>
            </section>

            <div className={styles.contentWrapper}>

                {/* ===== 2. OVERVIEW ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Overview</span>
                        <h2 className={styles.sectionTitle}>What is WORQ?</h2>
                        <p className={styles.sectionText}>
                            WORQ is a hybrid platform that combines <strong>social networking</strong>, a <strong>freelance marketplace</strong>, and <strong>secure escrow-based payments</strong> into a single ecosystem. It allows freelancers, clients, and CEOs to connect, showcase work, hire talent, and collaborate — all in one place.
                        </p>
                    </div>
                    <div className={styles.grid4Col}>
                        {[
                            { icon: <Heart size={22} />, title: "Social Media", desc: "Content sharing, stories, and community engagement" },
                            { icon: <Briefcase size={22} />, title: "Freelance Marketplace", desc: "Hiring, services, and portfolio-driven profiles" },
                            { icon: <Users size={22} />, title: "Networking", desc: "Swipe-based professional discovery and connections" },
                            { icon: <CreditCard size={22} />, title: "Fintech", desc: "Integrated wallet with escrow-secured payments" },
                        ].map((item, i) => (
                            <div key={i} className={styles.featureCard}>
                                <div className={styles.featureIcon}>{item.icon}</div>
                                <div className={styles.featureTitle}>{item.title}</div>
                                <div className={styles.featureDesc}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== 3. PROBLEM STATEMENT ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Problem</span>
                        <h2 className={styles.sectionTitle}>Why the Current System is Broken</h2>
                        <p className={styles.sectionText}>
                            Freelancers and clients today are forced to juggle multiple disconnected platforms — one for discovery, another for communication, and yet another for payments. This fragmentation leads to inefficiency, mistrust, and lost opportunities.
                        </p>
                    </div>
                    <div className={styles.grid2Col}>
                        {[
                            { icon: <Layers size={20} />, title: "Disconnected Platforms", desc: "Freelancers use 4–5 different apps to find work, communicate, and get paid. Context is lost at every handoff." },
                            { icon: <AlertTriangle size={20} />, title: "Lack of Payment Trust", desc: "No built-in escrow means freelancers risk non-payment. Clients risk paying for incomplete work." },
                            { icon: <Search size={20} />, title: "Poor Talent Discovery", desc: "Finding the right freelancer requires hours of searching through irrelevant profiles on oversaturated platforms." },
                            { icon: <Zap size={20} />, title: "Inefficient Networking", desc: "Professional networking is slow, shallow, and rarely converts into actual working relationships." },
                        ].map((item, i) => (
                            <div key={i} className={styles.problemCard}>
                                <div className={styles.problemIcon}>{item.icon}</div>
                                <h4 className={styles.cardTitle} style={{ fontSize: '1.05rem' }}>{item.title}</h4>
                                <p className={styles.sectionText} style={{ fontSize: '0.9rem', marginBottom: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== 4. SOLUTION ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Solution</span>
                        <h2 className={styles.sectionTitle}>How WORQ Solves This</h2>
                        <p className={styles.sectionText}>
                            WORQ eliminates fragmentation by unifying discovery, collaboration, and payment into a single intuitive product built around trust and speed.
                        </p>
                    </div>
                    <div className={styles.grid2Col}>
                        {[
                            { icon: <Compass size={20} />, title: "Swipe-Based Discovery", desc: "Tinder-style swiping for faster, more engaging talent discovery based on skills, budget, and availability." },
                            { icon: <Eye size={20} />, title: "Social Feed for Visibility", desc: "A built-in content system where freelancers showcase projects, blogs, and thoughts to build credibility." },
                            { icon: <Calendar size={20} />, title: "Integrated Booking", desc: "Direct booking system within the app — from profile view to confirmed project in under 2 minutes." },
                            { icon: <Lock size={20} />, title: "Escrow Payments", desc: "Client funds are locked in escrow until work is approved. Both parties are protected by default." },
                        ].map((item, i) => (
                            <div key={i} className={styles.solutionCard}>
                                <div className={styles.solutionIcon}>{item.icon}</div>
                                <h4 className={styles.cardTitle} style={{ fontSize: '1.05rem' }}>{item.title}</h4>
                                <p className={styles.sectionText} style={{ fontSize: '0.9rem', marginBottom: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.infographicFlow} style={{ marginTop: '48px' }}>
                        {[
                            { icon: <Search size={20} />, label: "Discover" },
                            { icon: <Users size={20} />, label: "Connect" },
                            { icon: <MessageSquare size={20} />, label: "Chat" },
                            { icon: <Calendar size={20} />, label: "Book" },
                            { icon: <Lock size={20} />, label: "Escrow" },
                            { icon: <CheckCircle size={20} />, label: "Deliver" },
                            { icon: <Star size={20} />, label: "Review" },
                        ].map((item, i, arr) => (
                            <React.Fragment key={i}>
                                <div className={styles.flowNode}>
                                    <div className={styles.flowIconBox}>{item.icon}</div>
                                    <div className={styles.flowLabel}>{item.label}</div>
                                </div>
                                {i < arr.length - 1 && <div className={styles.flowArrow} />}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                {/* ===== 5. INFORMATION ARCHITECTURE ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Architecture</span>
                        <h2 className={styles.sectionTitle}>Information Architecture</h2>
                        <p className={styles.sectionText}>
                            The complete structural skeleton of WORQ — organized into 11 core modules that power every user interaction.
                        </p>
                    </div>
                    <div className={styles.iaTree}>
                        {[
                            { icon: <Zap size={18} />, title: "Onboarding", items: ["Get Started", "Role Selection", "Skills Selection", "Create Account", "Add Photo"] },
                            { icon: <Eye size={18} />, title: "Feed", items: ["Feed Home", "Post Detail", "Create Post", "Stories", "Trending"] },
                            { icon: <Compass size={18} />, title: "Network", items: ["Swipe Discovery", "Filters", "Profile Preview", "Full Profile"] },
                            { icon: <MessageSquare size={18} />, title: "Chat", items: ["Chat List", "Conversation", "Attachments", "Briefs"] },
                            { icon: <UserCheck size={18} />, title: "Profile", items: ["About", "Skills", "Portfolio", "Achievements", "Reviews", "Pricing"] },
                            { icon: <Briefcase size={18} />, title: "Work System", items: ["Active Projects", "Pending Requests", "Completed", "Contracts"] },
                            { icon: <CreditCard size={18} />, title: "Payments", items: ["Wallet", "Escrow Status", "Transactions", "Withdraw / Add"] },
                            { icon: <Bookmark size={18} />, title: "Saved", items: ["Saved Posts", "Saved Freelancers", "Saved Projects"] },
                            { icon: <Bell size={18} />, title: "Notifications", items: ["Mentions", "Messages", "Requests", "Payments"] },
                            { icon: <Settings size={18} />, title: "Settings", items: ["Account", "Privacy", "Notifications", "Appearance", "Support"] },
                        ].map((node, i) => (
                            <div key={i} className={styles.iaNode}>
                                <div className={styles.iaNodeHeader}>
                                    <div className={styles.iaNodeIcon}>{node.icon}</div>
                                    <div className={styles.iaNodeTitle}>{node.title}</div>
                                </div>
                                <ul className={styles.iaNodeList}>
                                    {node.items.map((item, j) => <li key={j}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== 6. PERSONAS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Personas</span>
                        <h2 className={styles.sectionTitle}>Who Uses WORQ?</h2>
                    </div>
                    <div className={styles.grid3Col}>
                        <div className={styles.personaCard}>
                            <div className={styles.personaAvatar} style={{ background: 'rgba(99,102,241,0.15)' }}>🧑‍🎨</div>
                            <div className={styles.personaName}>Arjun, 26</div>
                            <div className={styles.personaRole}>Freelance UI/UX Designer</div>
                            <div className={styles.personaSection}>
                                <div className={styles.personaSectionTitle}>Goals</div>
                                <ul className={styles.personaList}>
                                    <li>Get consistent client work</li>
                                    <li>Showcase portfolio publicly</li>
                                    <li>Build professional reputation</li>
                                </ul>
                            </div>
                            <div className={styles.personaSection}>
                                <div className={styles.personaSectionTitle}>Pain Points</div>
                                <ul className={styles.personaList}>
                                    <li>Low visibility on existing platforms</li>
                                    <li>Payment delays and trust issues</li>
                                    <li>Inconsistent income flow</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.personaCard}>
                            <div className={styles.personaAvatar} style={{ background: 'rgba(52,211,153,0.15)' }}>👩‍💼</div>
                            <div className={styles.personaName}>Priya, 34</div>
                            <div className={styles.personaRole}>Startup CEO</div>
                            <div className={styles.personaSection}>
                                <div className={styles.personaSectionTitle}>Goals</div>
                                <ul className={styles.personaList}>
                                    <li>Hire quality talent quickly</li>
                                    <li>Minimize hiring risk</li>
                                    <li>Scale team on-demand</li>
                                </ul>
                            </div>
                            <div className={styles.personaSection}>
                                <div className={styles.personaSectionTitle}>Pain Points</div>
                                <ul className={styles.personaList}>
                                    <li>Hard to find vetted freelancers</li>
                                    <li>No payment security guarantees</li>
                                    <li>Too many platforms to manage</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.personaCard}>
                            <div className={styles.personaAvatar} style={{ background: 'rgba(251,191,36,0.15)' }}>🧑‍💻</div>
                            <div className={styles.personaName}>Ravi, 22</div>
                            <div className={styles.personaRole}>Passive Browser / Student</div>
                            <div className={styles.personaSection}>
                                <div className={styles.personaSectionTitle}>Goals</div>
                                <ul className={styles.personaList}>
                                    <li>Get inspired by quality work</li>
                                    <li>Build connections early</li>
                                    <li>Eventually start freelancing</li>
                                </ul>
                            </div>
                            <div className={styles.personaSection}>
                                <div className={styles.personaSectionTitle}>Pain Points</div>
                                <ul className={styles.personaList}>
                                    <li>Overwhelming platforms</li>
                                    <li>No clear entry point</li>
                                    <li>Lack of mentorship access</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 7. USER JOURNEYS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Journeys</span>
                        <h2 className={styles.sectionTitle}>User Journeys</h2>
                        <p className={styles.sectionText}>Mapping the emotional arc at every touchpoint — from sign-up to payment.</p>
                    </div>

                    {/* Journey 1 */}
                    <div className={styles.journeyCard}>
                        <div className={styles.journeyTitle}>🎯 New Freelancer → First Client</div>
                        <div className={styles.journeyEmotion}>Emotion: Uncertain → Hopeful → Confident</div>
                        <div className={styles.journeySteps}>
                            {["Sign Up", "Select Freelancer", "Add Skills", "Upload Portfolio", "Post Content", "Swipe Network", "Get Connection", "Chat", "Get Booked", "Complete Work", "Get Paid", "Receive Review"].map((step, i, arr) => (
                                <React.Fragment key={i}>
                                    <span className={step === "Get Booked" ? styles.journeyStepHighlight : styles.journeyStep}>{step}</span>
                                    {i < arr.length - 1 && <ArrowRight size={12} className={styles.journeyArrow} />}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className={styles.journeyCritical}>
                            <AlertTriangle size={16} /> Critical moment: First booking must feel effortless
                        </div>
                    </div>

                    {/* Journey 2 */}
                    <div className={styles.journeyCard}>
                        <div className={styles.journeyTitle}>🎯 Startup CEO → Fast Hiring</div>
                        <div className={styles.journeyEmotion}>Emotion: Urgent → Evaluative → Trust-building</div>
                        <div className={styles.journeySteps}>
                            {["Sign Up", "Select Client", "Browse Network", "Apply Filters", "Swipe Profiles", "View Portfolio", "Connect", "Chat", "Book Freelancer", "Pay (Escrow)", "Receive Work", "Release Payment", "Leave Review"].map((step, i, arr) => (
                                <React.Fragment key={i}>
                                    <span className={step === "Pay (Escrow)" ? styles.journeyStepHighlight : styles.journeyStep}>{step}</span>
                                    {i < arr.length - 1 && <ArrowRight size={12} className={styles.journeyArrow} />}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className={styles.journeyCritical}>
                            <AlertTriangle size={16} /> Critical moment: Trust via ratings + escrow
                        </div>
                    </div>

                    {/* Journey 3 */}
                    <div className={styles.journeyCard}>
                        <div className={styles.journeyTitle}>🎯 Passive User → Active Collaborator</div>
                        <div className={styles.journeyEmotion}>Emotion: Browsing → Inspired → Engaged</div>
                        <div className={styles.journeySteps}>
                            {["Scroll Feed", "See Quality Work", "Save Post", "Visit Profile", "Connect", "Collaborate / Hire"].map((step, i, arr) => (
                                <React.Fragment key={i}>
                                    <span className={step === "Collaborate / Hire" ? styles.journeyStepHighlight : styles.journeyStep}>{step}</span>
                                    {i < arr.length - 1 && <ArrowRight size={12} className={styles.journeyArrow} />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== 8. USER FLOWS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>User Flows</span>
                        <h2 className={styles.sectionTitle}>Core Interaction Flows</h2>
                    </div>

                    <h3 className={styles.cardTitle}>Flow 1: Networking → Hiring</h3>
                    <div className={styles.infographicFlow}>
                        {[
                            { icon: <Compass size={18} />, label: "Swipe", desc: "Discover talent" },
                            { icon: <Eye size={18} />, label: "Profile", desc: "View portfolio" },
                            { icon: <UserCheck size={18} />, label: "Connect", desc: "Send request" },
                            { icon: <MessageSquare size={18} />, label: "Chat", desc: "Discuss scope" },
                            { icon: <Calendar size={18} />, label: "Book", desc: "Confirm project" },
                            { icon: <Lock size={18} />, label: "Pay", desc: "Escrow lock" },
                            { icon: <CheckCircle size={18} />, label: "Complete", desc: "Deliver & review" },
                        ].map((item, i, arr) => (
                            <React.Fragment key={i}>
                                <div className={styles.flowNode}>
                                    <div className={styles.flowIconBox}>{item.icon}</div>
                                    <div className={styles.flowLabel}>{item.label}</div>
                                    <div className={styles.flowDesc}>{item.desc}</div>
                                </div>
                                {i < arr.length - 1 && <div className={styles.flowArrow} />}
                            </React.Fragment>
                        ))}
                    </div>

                    <h3 className={styles.cardTitle} style={{ marginTop: '48px' }}>Flow 2: Content Creation Loop</h3>
                    <div className={styles.infographicFlow}>
                        {[
                            { icon: <Eye size={18} />, label: "Feed", desc: "Browse content" },
                            { icon: <Send size={18} />, label: "Create", desc: "Post / Blog" },
                            { icon: <Heart size={18} />, label: "Engage", desc: "Likes & comments" },
                            { icon: <TrendingUp size={18} />, label: "Visibility", desc: "Profile grows" },
                            { icon: <Users size={18} />, label: "Connect", desc: "New followers" },
                        ].map((item, i, arr) => (
                            <React.Fragment key={i}>
                                <div className={styles.flowNode}>
                                    <div className={styles.flowIconBox}>{item.icon}</div>
                                    <div className={styles.flowLabel}>{item.label}</div>
                                    <div className={styles.flowDesc}>{item.desc}</div>
                                </div>
                                {i < arr.length - 1 && <div className={styles.flowArrow} />}
                            </React.Fragment>
                        ))}
                    </div>

                    <h3 className={styles.cardTitle} style={{ marginTop: '48px' }}>Flow 3: Payment & Escrow</h3>
                    <div className={styles.infographicFlow}>
                        {[
                            { icon: <Calendar size={18} />, label: "Book", desc: "Client books" },
                            { icon: <CreditCard size={18} />, label: "Pay", desc: "Funds sent" },
                            { icon: <Lock size={18} />, label: "Escrow", desc: "Amount locked" },
                            { icon: <Briefcase size={18} />, label: "Work", desc: "Freelancer delivers" },
                            { icon: <CheckCircle size={18} />, label: "Approve", desc: "Client reviews" },
                            { icon: <DollarSign size={18} />, label: "Release", desc: "Payment cleared" },
                        ].map((item, i, arr) => (
                            <React.Fragment key={i}>
                                <div className={styles.flowNode}>
                                    <div className={styles.flowIconBox}>{item.icon}</div>
                                    <div className={styles.flowLabel}>{item.label}</div>
                                    <div className={styles.flowDesc}>{item.desc}</div>
                                </div>
                                {i < arr.length - 1 && <div className={styles.flowArrow} />}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                {/* ===== 9. DESIGN WALKTHROUGH ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Design Walkthrough</span>
                        <h2 className={styles.sectionTitle}>Screen-by-Screen Breakdown</h2>
                        <p className={styles.sectionText}>Every screen designed with intent — here's the reasoning behind each decision.</p>
                    </div>

                    {/* Onboarding */}
                    <div className={styles.walkthroughSection}>
                        <div className={styles.walkthroughTitle}>
                            <span className={styles.walkthroughTitleIcon}><Zap size={18} /></span> Onboarding
                        </div>
                        <p className={styles.walkthroughDesc}>Progressive disclosure guides users from role selection to a complete profile in under 2 minutes.</p>
                        <div className={styles.mockupGallery}>
                            {[
                                { src: "/images/worq/Get_started.jpeg", label: "Get Started", desc: "Clear value proposition with instant CTA" },
                                { src: "/images/worq/Select_Profile_type.jpeg", label: "Role Selection", desc: "Freelancer / Client / Hybrid path" },
                                { src: "/images/worq/Select_Skills.jpeg", label: "Skills", desc: "Tag-based skill selection for matching" },
                                { src: "/images/worq/Create_Account.jpeg", label: "Create Account", desc: "Minimal fields, fast registration" },
                                { src: "/images/worq/Add_profile_image.jpeg", label: "Profile Photo", desc: "Trust signal — faces build credibility" },
                                { src: "/images/worq/Add_portfolio.jpeg", label: "Portfolio", desc: "Showcase work immediately" },
                            ].map((item, i) => (
                                <div key={i} className={styles.mockupItem}>
                                    <PhoneMockup src={item.src} alt={item.label} />
                                    <div className={styles.mockupLabel}>{item.label}</div>
                                    <div className={styles.mockupDesc}>{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feed & Social */}
                    <div className={styles.walkthroughSection}>
                        <div className={styles.walkthroughTitle}>
                            <span className={styles.walkthroughTitleIcon}><Eye size={18} /></span> Feed & Social Layer
                        </div>
                        <p className={styles.walkthroughDesc}>The social feed makes every freelancer visible. Quality content drives discovery organically.</p>
                        <div className={styles.mockupGallery}>
                            {[
                                { src: "/images/worq/Feed_or_Landing_screen.jpeg", label: "Feed Home", desc: "Trending content + stories at the top" },
                                { src: "/images/worq/Feed.jpeg", label: "Feed Posts", desc: "Project showcases with engagement metrics" },
                                { src: "/images/worq/Story.jpeg", label: "Stories", desc: "Ephemeral updates for quick visibility" },
                                { src: "/images/worq/Create_Story.jpeg", label: "Create Story", desc: "Easy media upload with overlays" },
                                { src: "/images/worq/Create_post_blog__thoughts.jpeg", label: "Create Post", desc: "Project / Blog / Thought post types" },
                            ].map((item, i) => (
                                <div key={i} className={styles.mockupItem}>
                                    <PhoneMockup src={item.src} alt={item.label} />
                                    <div className={styles.mockupLabel}>{item.label}</div>
                                    <div className={styles.mockupDesc}>{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Network */}
                    <div className={styles.walkthroughSection}>
                        <div className={styles.walkthroughTitle}>
                            <span className={styles.walkthroughTitleIcon}><Compass size={18} /></span> Network & Discovery
                        </div>
                        <p className={styles.walkthroughDesc}>The core USP — swipe-based professional networking that's fast, engaging, and converts.</p>
                        <div className={styles.mockupGallery}>
                            {[
                                { src: "/images/worq/Networking_profiles_.jpeg", label: "Swipe Cards", desc: "Tinder-style discovery by skill & budget" },
                                { src: "/images/worq/Freelancer_profile.jpeg", label: "Full Profile", desc: "Portfolio, reviews, pricing — all visible" },
                            ].map((item, i) => (
                                <div key={i} className={styles.mockupItem}>
                                    <PhoneMockup src={item.src} alt={item.label} />
                                    <div className={styles.mockupLabel}>{item.label}</div>
                                    <div className={styles.mockupDesc}>{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat & Booking */}
                    <div className={styles.walkthroughSection}>
                        <div className={styles.walkthroughTitle}>
                            <span className={styles.walkthroughTitleIcon}><MessageSquare size={18} /></span> Chat, Booking & Reviews
                        </div>
                        <p className={styles.walkthroughDesc}>From conversation to confirmed booking — seamless conversion within minutes.</p>
                        <div className={styles.mockupGallery}>
                            {[
                                { src: "/images/worq/Message.jpeg", label: "Chat List", desc: "All conversations in one place" },
                                { src: "/images/worq/Chat.jpeg", label: "Conversation", desc: "Rich messaging with file attachments" },
                                { src: "/images/worq/Schedule_Booking.jpeg", label: "Schedule", desc: "Calendar-based booking flow" },
                                { src: "/images/worq/Review_and_booking.jpeg", label: "Review & Book", desc: "Confirm scope, rate, and timeline" },
                            ].map((item, i) => (
                                <div key={i} className={styles.mockupItem}>
                                    <PhoneMockup src={item.src} alt={item.label} />
                                    <div className={styles.mockupLabel}>{item.label}</div>
                                    <div className={styles.mockupDesc}>{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wallet & Payments */}
                    <div className={styles.walkthroughSection}>
                        <div className={styles.walkthroughTitle}>
                            <span className={styles.walkthroughTitleIcon}><CreditCard size={18} /></span> Wallet & Payments
                        </div>
                        <p className={styles.walkthroughDesc}>Escrow-protected payments build trust. Both parties know the money is safe.</p>
                        <div className={styles.mockupGallery}>
                            {[
                                { src: "/images/worq/Wallet.jpeg", label: "Wallet", desc: "Balance, escrow status, quick actions" },
                                { src: "/images/worq/Recent_transaction.jpeg", label: "Transactions", desc: "Payment history with status indicators" },
                                { src: "/images/worq/All_trascation.jpeg", label: "All Transactions", desc: "Complete financial audit trail" },
                            ].map((item, i) => (
                                <div key={i} className={styles.mockupItem}>
                                    <PhoneMockup src={item.src} alt={item.label} />
                                    <div className={styles.mockupLabel}>{item.label}</div>
                                    <div className={styles.mockupDesc}>{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Profile, Saved, Notifications, Settings */}
                    <div className={styles.walkthroughSection}>
                        <div className={styles.walkthroughTitle}>
                            <span className={styles.walkthroughTitleIcon}><Settings size={18} /></span> Profile, Saved & Settings
                        </div>
                        <p className={styles.walkthroughDesc}>Supporting screens that complete the ecosystem.</p>
                        <div className={styles.mockupGallery}>
                            {[
                                { src: "/images/worq/User_Profile.jpeg", label: "Profile", desc: "Public identity with achievements" },
                                { src: "/images/worq/Saved.jpeg", label: "Saved", desc: "Bookmarked posts, people, projects" },
                                { src: "/images/worq/Notification.jpeg", label: "Notifications", desc: "Priority-based alert system" },
                                { src: "/images/worq/Settings.jpeg", label: "Settings", desc: "Account, privacy, and preferences" },
                            ].map((item, i) => (
                                <div key={i} className={styles.mockupItem}>
                                    <PhoneMockup src={item.src} alt={item.label} />
                                    <div className={styles.mockupLabel}>{item.label}</div>
                                    <div className={styles.mockupDesc}>{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== 10. KEY FEATURES ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Features</span>
                        <h2 className={styles.sectionTitle}>Key Features</h2>
                    </div>
                    <div className={styles.grid3Col}>
                        {[
                            { icon: <Compass size={22} />, title: "Swipe Discovery", desc: "Match with talent through an intuitive swipe interface filtered by skills, budget, and location." },
                            { icon: <Heart size={22} />, title: "Social Content System", desc: "Projects, blogs, and thoughts — a feed that drives organic discovery and credibility." },
                            { icon: <Briefcase size={22} />, title: "Portfolio Profiles", desc: "Dedicated portfolio sections with achievements, reviews, and availability status." },
                            { icon: <Calendar size={22} />, title: "Booking System", desc: "Calendar-based booking with scope definition, timeline, and budget confirmation." },
                            { icon: <Lock size={22} />, title: "Escrow Wallet", desc: "Funds locked until work approved. Automatic release on client confirmation." },
                            { icon: <Star size={22} />, title: "Ratings & Reviews", desc: "Two-way review system that builds trust and accountability over time." },
                        ].map((item, i) => (
                            <div key={i} className={styles.featureCard}>
                                <div className={styles.featureIcon}>{item.icon}</div>
                                <div className={styles.featureTitle}>{item.title}</div>
                                <div className={styles.featureDesc}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== 11. UX DECISIONS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>UX Decisions</span>
                        <h2 className={styles.sectionTitle}>The "Why" Behind Every Choice</h2>
                    </div>
                    <div className={styles.grid2Col}>
                        {[
                            { title: "Swipe Over Search-First", decision: "Swiping creates faster engagement and serendipitous discovery. Search is available but secondary.", reason: "Users don't always know who they need — swipe surfaces unexpected matches." },
                            { title: "Social + Freelance Hybrid", decision: "Combining content sharing with hiring creates a self-reinforcing visibility loop.", reason: "Great work showcased = more profile visits = more bookings." },
                            { title: "Escrow by Default", decision: "Every payment goes through escrow automatically — not as an opt-in.", reason: "Trust must be systemic, not optional. Both parties are protected from day one." },
                            { title: "Visual Hierarchy in Profiles", decision: "Portfolio images are prioritized over text descriptions in profile views.", reason: "In creative industries, work speaks louder than words. Show, don't tell." },
                        ].map((item, i) => (
                            <div key={i} className={styles.uxDecisionCard}>
                                <div className={styles.uxDecisionTitle}>{item.title}</div>
                                <div className={styles.uxDecisionLabel}>Decision</div>
                                <div className={styles.uxDecisionText}>{item.decision}</div>
                                <div className={styles.uxDecisionLabel}>Why</div>
                                <div className={styles.uxDecisionText}>{item.reason}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== 12. CHALLENGES & IMPROVEMENTS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Gap Analysis</span>
                        <h2 className={styles.sectionTitle}>What's Missing & What We'd Add</h2>
                        <p className={styles.sectionText}>Honest assessment of current gaps and strategic improvements for WORQ v2.</p>
                    </div>

                    <h3 className={styles.cardTitle} style={{ color: '#f87171' }}>⚠️ Current Gaps</h3>
                    <div className={styles.grid3Col} style={{ marginTop: '16px' }}>
                        {[
                            { icon: <Briefcase size={16} />, title: "Project Management", desc: "No clear project lifecycle — milestones, deliverables, and status tracking needed." },
                            { icon: <FileText size={16} />, title: "Contract System", desc: "No formal scope, timeline, or terms agreement before work starts." },
                            { icon: <Search size={16} />, title: "Global Search", desc: "Swipe-only discovery limits users who know exactly what they want." },
                            { icon: <Filter size={16} />, title: "Advanced Filters", desc: "Budget range, experience level, availability, and location filters needed." },
                            { icon: <Shield size={16} />, title: "Dispute Resolution", desc: "Escrow exists but no formal dispute or refund mechanism." },
                            { icon: <Award size={16} />, title: "Verification System", desc: "No badges, work history validation, or identity verification." },
                            { icon: <BarChart2 size={16} />, title: "Analytics Dashboard", desc: "Freelancers can't see profile views, post reach, or conversion rates." },
                            { icon: <Bell size={16} />, title: "Notification Priority", desc: "All notifications have equal weight — payments should be high priority." },
                            { icon: <TrendingUp size={16} />, title: "Profile Completion", desc: "No gamification to encourage users to complete their profiles." },
                        ].map((item, i) => (
                            <div key={i} className={styles.gapCard}>
                                <div className={styles.gapTitle}>{item.icon} {item.title}</div>
                                <div className={styles.gapDesc}>{item.desc}</div>
                            </div>
                        ))}
                    </div>

                    <h3 className={styles.cardTitle} style={{ marginTop: '48px', color: '#34d399' }}>✅ Proposed Improvements</h3>
                    <div className={styles.grid3Col} style={{ marginTop: '16px' }}>
                        {[
                            { title: "Milestones & Contracts", desc: "Structured project management with deliverables, timelines, and formal agreements." },
                            { title: "Verification Badges", desc: "Identity verification, skills tests, and work history validation for trust." },
                            { title: "Onboarding Clarity", desc: "Guided tutorials, profile completion scores, and progressive feature discovery." },
                            { title: "Gig Listings (Fiverr-style)", desc: "Fixed packages with pricing tiers and delivery timelines for quick hiring." },
                            { title: "Dispute Resolution", desc: "Formal raise dispute → admin review → refund/release mechanism." },
                            { title: "Analytics Dashboard", desc: "Profile views, post reach, conversion rates, and earnings trends." },
                        ].map((item, i) => (
                            <div key={i} className={styles.improvementCard}>
                                <div className={styles.gapTitle}><CheckCircle size={16} color="#34d399" /> {item.title}</div>
                                <div className={styles.gapDesc}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== 13. FINAL OUTCOME ===== */}
                <section className={styles.section} style={{ borderBottom: 'none' }}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Outcome</span>
                        <h2 className={styles.sectionTitle}>Potential Impact</h2>
                        <p className={styles.sectionText}>
                            WORQ isn't just an app — it's a new way for professionals to discover, trust, and work together. Here's the projected impact of this unified platform.
                        </p>
                    </div>

                    <div className={styles.outcomeGrid}>
                        {[
                            { icon: <Zap size={22} />, title: "Faster Hiring", desc: "Swipe-to-hire reduces the talent discovery cycle from days to minutes." },
                            { icon: <Eye size={22} />, title: "Increased Visibility", desc: "Social feed ensures every freelancer has a platform to be seen and discovered." },
                            { icon: <Shield size={22} />, title: "Secure Payments", desc: "Escrow eliminates payment anxiety for both freelancers and clients." },
                            { icon: <Users size={22} />, title: "Strong Community", desc: "Content + networking creates a self-sustaining professional ecosystem." },
                        ].map((item, i) => (
                            <div key={i} className={styles.outcomeCard}>
                                <div className={styles.outcomeIcon}>{item.icon}</div>
                                <div>
                                    <div className={styles.outcomeTitle}>{item.title}</div>
                                    <div className={styles.outcomeDesc}>{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.quoteBlock} style={{ marginTop: '48px' }}>
                        <p className={styles.quoteText}>
                            "WORQ = LinkedIn + Fiverr + Tinder + Escrow Wallet — unified into one platform where Swipe → Connect → Hire → Pay is the core loop."
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
