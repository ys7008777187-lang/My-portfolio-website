"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Smartphone, Store, Shield, Clock, AlertTriangle,
    Bell, Zap, CreditCard, Activity, Layers,
    MapPin, Compass, RefreshCw, Check, ChevronRight,
    BarChart3, Settings, ShoppingBag, Users, Wallet,
    Brain, CalendarClock, TrendingUp, Award, Sparkles
} from 'lucide-react';
import { getOptimizedUrl } from "../../lib/assetUrl";
import styles from "./CampusBitesCaseStudy.module.css";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STORE DASHBOARD TAB DATA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const storeTabs = [
    { id: "dashboard", label: "Dashboard", src: "/images/campusbites/Store Dashboard.png", desc: "Real-time kanban view of all incoming orders with live status updates" },
    { id: "orders", label: "Orders", src: "/images/campusbites/Store Order.png", desc: "Manage individual orders — mark as preparing, ready, or completed" },
    { id: "menu", label: "Menu", src: "/images/campusbites/Menu Store Dashboard.png", desc: "Toggle item availability instantly during peak hours" },
    { id: "payments", label: "Payments", src: "/images/campusbites/Payements Store Dashboard.png", desc: "Track settled and pending transactions with detailed breakdowns" },
    { id: "analytics", label: "Analytics", src: "/images/campusbites/Analytics Store Dashboard.png", desc: "Revenue trends, peak hours heatmap, and performance metrics" },
    { id: "settings", label: "Settings", src: "/images/campusbites/Stote setting dashboard.png", desc: "Configure operating hours, notifications, and store preferences" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ADMIN DASHBOARD TAB DATA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const adminTabs = [
    { id: "overview", label: "Overview", src: "/images/campusbites/Admin Dashboard.png", desc: "System-wide metrics, alerts, and platform health at a glance" },
    { id: "stores", label: "Stores", src: "/images/campusbites/Admin activate , deactivate store.png", desc: "Activate, suspend, or manage vendor accounts with one toggle" },
    { id: "orders", label: "Orders", src: "/images/campusbites/All order.png", desc: "Global table view of all orders across every food court" },
    { id: "fees", label: "Platform Fees", src: "/images/campusbites/Platform fees.png", desc: "Set and adjust per-order platform commission fees" },
    { id: "requests", label: "Requests", src: "/images/campusbites/Credential Request.png", desc: "Handle store credential recovery and onboarding requests" },
    { id: "settings", label: "Settings", src: "/images/campusbites/Setting.png", desc: "Platform-level configuration and notification preferences" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   INTERACTIVE TAB COMPONENT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function DashboardTabs({ tabs, defaultTab }) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);
    const current = tabs.find(t => t.id === activeTab);

    return (
        <div className={styles.dashboardTabsWrapper}>
            <div className={styles.ipadMockup}>
                <div className={styles.ipadScreen}>
                    <div className={styles.tabBarInside}>
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={activeTab === tab.id ? styles.tabButtonInsideActive : styles.tabButtonInside}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.tabContentInside}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.id}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                            >
                                <div className={styles.tabScreenInside}>
                                    <img src={getOptimizedUrl(current.src)} alt={current.label} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                >
                    <div className={styles.tabScreenLabel}>{current.label}</div>
                    <div className={styles.tabScreenDesc}>{current.desc}</div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN COMPONENT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function CampusBitesCaseStudy() {
    return (
        <div className={styles.container}>

            {/* ===================================================================
                1. HERO SECTION — Layered device composition
               =================================================================== */}
            <section className={styles.hero}>
                <div className={styles.heroBgGradient} />
                <div className={styles.heroBlob1} />
                <div className={styles.heroBlob2} />
                <div className={styles.heroBlob3} />

                <motion.div
                    initial="hidden" animate="visible" variants={stagger}
                    className={styles.heroContent}
                >
                    <motion.div variants={fadeInUp} className={styles.heroBadge}>
                        <Sparkles size={14} /> Product Case Study
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
                        Skip the Queue.<br />
                        <span className={styles.heroTitleAccent}>Order Smart.</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
                        A real-time campus food ordering system that eliminates crowd, wait time, and chaos — connecting students, vendors, and administrators seamlessly.
                    </motion.p>

                    <motion.div variants={fadeInUp} className={styles.heroMeta}>
                        <div className={styles.heroMetaItem}>
                            <span className={styles.heroMetaLabel}>Role</span>
                            <span className={styles.heroMetaValue}>Product Designer</span>
                        </div>
                        <div className={styles.heroMetaItem}>
                            <span className={styles.heroMetaLabel}>Platform</span>
                            <span className={styles.heroMetaValue}>Mobile + Web</span>
                        </div>
                        <div className={styles.heroMetaItem}>
                            <span className={styles.heroMetaLabel}>Focus</span>
                            <span className={styles.heroMetaValue}>Queue Elimination</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Three Devices */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                    className={styles.heroDeviceStack}
                >
                    {/* Floating micro-cards */}
                    <div className={styles.floatingCard} style={{ top: '15%', left: '3%' }}>
                        <div className={styles.floatingCardIcon} style={{ background: 'rgba(255,122,0,0.1)', color: '#FF7A00' }}>
                            <Bell size={16} />
                        </div>
                        Order Ready! 🎉
                    </div>
                    <div className={styles.floatingCard} style={{ top: '8%', right: '8%' }}>
                        <div className={styles.floatingCardIcon} style={{ background: 'rgba(52,199,89,0.1)', color: '#34c759' }}>
                            <Shield size={16} />
                        </div>
                        Token: 4821
                    </div>
                    <div className={styles.floatingCard} style={{ bottom: '10%', left: '15%' }}>
                        <div className={styles.floatingCardIcon} style={{ background: 'rgba(90,100,240,0.1)', color: '#5a64f0' }}>
                            <ShoppingBag size={16} />
                        </div>
                        +3 New Orders
                    </div>

                    {/* Laptop — Admin Dashboard */}
                    <div className={styles.deviceLaptop}>
                        <img src={getOptimizedUrl("/images/campusbites/Admin Dashboard.png")} alt="Admin Dashboard" />
                    </div>

                    {/* Tablet — Store Dashboard */}
                    <div className={styles.deviceTablet}>
                        <img src={getOptimizedUrl("/images/campusbites/Store Dashboard.png")} alt="Store Dashboard" />
                    </div>

                    {/* Phone — User App */}
                    <div className={styles.devicePhone}>
                        <img src={getOptimizedUrl("/images/campusbites/Food cout listing .png")} alt="Mobile App" />
                    </div>
                </motion.div>
            </section>

            <div className={styles.contentWrapper}>

                {/* ===================================================================
                    2. PROBLEM STATEMENT
                   =================================================================== */}
                <section className={styles.section}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={stagger} className={styles.sectionHeader}
                    >
                        <motion.span variants={fadeInUp} className={styles.sectionBadge}>Problem</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                            Operational Chaos at Peak Hours
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.sectionText}>
                            Campus food courts face a breaking point during lunch and break times. The physical limitation of space combined with high demand creates cascading problems.
                        </motion.p>
                    </motion.div>

                    <div className={styles.grid2Col}>
                        {[
                            { icon: <Clock size={22} />, title: "10–30 Min Queues", desc: "Students waste valuable break time standing in lines, leading to frustration and missed classes." },
                            { icon: <AlertTriangle size={22} />, title: "Abandoned Orders", desc: "Without upfront payment enforcement, vendors face revenue loss from fake or forgotten orders." },
                            { icon: <Layers size={22} />, title: "No Order Tracking", desc: "Shouting order numbers and chaotic handoffs lead to wrong pickups and wasted food." },
                            { icon: <Activity size={22} />, title: "Crowd Density", desc: "Peak-hour crowding creates a stressful environment reducing throughput for everyone." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={styles.problemCard}
                            >
                                <div className={styles.problemIcon}>{item.icon}</div>
                                <div className={styles.problemTitle}>{item.title}</div>
                                <div className={styles.problemDesc}>{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===================================================================
                    3. SOLUTION
                   =================================================================== */}
                <section className={styles.section}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={stagger} className={styles.sectionHeader}
                    >
                        <motion.span variants={fadeInUp} className={styles.sectionBadge}>Solution</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                            Token-Based Remote Ordering
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.sectionText}>
                            Campus Bites shifts the entire food ordering lifecycle to digital — order remotely, pay upfront, and pick up only when food is ready.
                        </motion.p>
                    </motion.div>

                    <div className={styles.grid3Col}>
                        {[
                            { icon: <Smartphone size={26} />, title: "Remote Ordering", desc: "Order directly from the classroom, library, or office — skip the walk." },
                            { icon: <Shield size={26} />, title: "OTP Verification", desc: "Every order generates a unique 4-digit token for secure, fraud-proof pickup." },
                            { icon: <Bell size={26} />, title: "Live Notifications", desc: "Real-time push alerts when your food is being prepared and when it's ready." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.5 }}
                                className={styles.solutionCard}
                            >
                                <div className={styles.solutionIcon}>{item.icon}</div>
                                <div className={styles.solutionTitle}>{item.title}</div>
                                <div className={styles.solutionDesc}>{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===================================================================
                    4. FLOW VISUALIZATION
                   =================================================================== */}
                <section className={styles.section}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={stagger} className={styles.sectionHeader}
                    >
                        <motion.span variants={fadeInUp} className={styles.sectionBadge}>System Flow</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                            End-to-End Connection
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.sectionText}>
                            A seamless pipeline connecting users, stores, and admin in real-time.
                        </motion.p>
                    </motion.div>

                    <div className={styles.flowContainer}>
                        {[
                            { icon: <Smartphone size={24} />, label: "Order Placed", sub: "User App" },
                            { icon: <Store size={24} />, label: "Received", sub: "Store Dashboard" },
                            { icon: <RefreshCw size={24} />, label: "Preparing", sub: "Kitchen" },
                            { icon: <Bell size={24} />, label: "Ready", sub: "Notification" },
                            { icon: <Shield size={24} />, label: "OTP Pickup", sub: "Verification" },
                            { icon: <BarChart3 size={24} />, label: "Logged", sub: "Admin Panel" },
                        ].map((item, i, arr) => (
                            <React.Fragment key={i}>
                                <motion.div
                                    className={styles.flowNode}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                >
                                    <div className={styles.flowNodeCircle}>{item.icon}</div>
                                    <div className={styles.flowNodeLabel}>{item.label}</div>
                                    <div className={styles.flowNodeSub}>{item.sub}</div>
                                </motion.div>
                                {i < arr.length - 1 && <div className={styles.flowConnector} />}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                {/* ===================================================================
                    5. MOBILE APP SHOWCASE
                   =================================================================== */}
                <section className={styles.section}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={stagger} className={styles.sectionHeader}
                    >
                        <motion.span variants={fadeInUp} className={styles.sectionBadge}>📱 Mobile App</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                            Seamless Student Experience
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.sectionText}>
                            A compact, high-contrast interface designed for speed — from browsing food courts to picking up your meal in under 2 taps.
                        </motion.p>
                    </motion.div>

                    <div className={styles.mobileShowcase}>
                        {[
                            { src: "/images/campusbites/Food cout listing .png", label: "Food Courts", annotation: "Location-aware" },
                            { src: "/images/campusbites/Store and food listing.png", label: "Store & Menu", annotation: "Dynamic pricing" },
                            { src: "/images/campusbites/View Cart.png", label: "Cart", annotation: "Quick checkout" },
                            { src: "/images/campusbites/Payment .png", label: "Checkout", annotation: "UPI or Pay on Pickup" },
                            { src: "/images/campusbites/Token Number.png", label: "Token", annotation: "Live tracking" },
                            { src: "/images/campusbites/Otp.png", label: "OTP Pickup", annotation: "Token-based pickup" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className={styles.mobileScreen}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                            >
                                <div className={styles.phoneMockup}>
                                    <img src={getOptimizedUrl(item.src)} alt={item.label} />
                                </div>
                                <div className={styles.phoneLabel}>{item.label}</div>
                                <div className={styles.phoneAnnotation}>
                                    <ChevronRight size={14} /> {item.annotation}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===================================================================
                    6. STORE DASHBOARD — Interactive Tabs
                   =================================================================== */}
                <section className={styles.dashboardSection}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={stagger} className={styles.sectionHeader}
                    >
                        <motion.span variants={fadeInUp} className={styles.sectionBadge}>📲 Store Dashboard</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                            Vendor Control Center
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.sectionText}>
                            A tablet-first dashboard replacing chaos with a structured workflow for kitchen staff. Click through the tabs to explore.
                        </motion.p>
                    </motion.div>

                    <DashboardTabs tabs={storeTabs} defaultTab="dashboard" />
                </section>

                {/* ===================================================================
                    7. ADMIN DASHBOARD — Interactive Tabs
                   =================================================================== */}
                <section className={styles.dashboardSection}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={stagger} className={styles.sectionHeader}
                    >
                        <motion.span variants={fadeInUp} className={styles.sectionBadge}>🧑‍💼 Admin Dashboard</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                            Platform Governance
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.sectionText}>
                            Enterprise-grade tools to manage vendors, control fees, and monitor system health across all food courts.
                        </motion.p>
                    </motion.div>

                    <DashboardTabs tabs={adminTabs} defaultTab="overview" />
                </section>

                {/* ===================================================================
                    8. EDGE CASES
                   =================================================================== */}
                <section className={styles.section}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={stagger} className={styles.sectionHeader}
                    >
                        <motion.span variants={fadeInUp} className={styles.sectionBadge}>Architecture</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                            Edge Cases Handled
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.sectionText}>
                            Every failure scenario has a designed recovery path — no breakdowns.
                        </motion.p>
                    </motion.div>

                    <div className={styles.edgeCaseGrid}>
                        {[
                            { icon: <AlertTriangle size={18} />, title: "Abandoned Orders", desc: "Auto-mark as 'Not Picked' after window expires. Apply 2× penalty fee to compensate the vendor." },
                            { icon: <Store size={18} />, title: "Store Closes Mid-Order", desc: "Block new orders immediately but allow the vendor to fulfill all existing active orders." },
                            { icon: <CreditCard size={18} />, title: "Payment Failure", desc: "Order held in 'Pending' — kitchen is NOT notified until payment webhook succeeds." },
                            { icon: <Zap size={18} />, title: "Network Loss", desc: "Dashboard queues status updates locally via service worker, syncs on reconnect." },
                            { icon: <Shield size={18} />, title: "OTP Misuse", desc: "Token expires after the pickup window. Regeneration requires admin approval." },
                            { icon: <RefreshCw size={18} />, title: "Duplicate Orders", desc: "Unique order ID system with idempotent payment processing prevents double charges." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className={styles.edgeCaseCard}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                            >
                                <div className={styles.edgeCaseTitle}>
                                    <span style={{ color: '#FF7A00' }}>{item.icon}</span>
                                    {item.title}
                                </div>
                                <div className={styles.edgeCaseDesc}>{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===================================================================
                    9. BUSINESS IMPACT
                   =================================================================== */}
                <section className={styles.section}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={stagger} className={styles.sectionHeader}
                    >
                        <motion.span variants={fadeInUp} className={styles.sectionBadge}>Outcome</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                            Business Impact
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.sectionText}>
                            Campus Bites transforms chaotic food courts into a structured, accountable ecosystem.
                        </motion.p>
                    </motion.div>

                    <div className={styles.impactGrid}>
                        <motion.div className={styles.impactCol}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
                            <div className={styles.impactHeader}>
                                <Users size={20} /> For Students
                            </div>
                            <ul className={styles.impactList}>
                                {["Zero waiting time", "Predictable pickups", "Better campus experience"].map((text, i) => (
                                    <li key={i}><span className={styles.impactCheck}><Check size={12} /></span> {text}</li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div className={styles.impactCol}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <div className={styles.impactHeader}>
                                <Store size={20} /> For Vendors
                            </div>
                            <ul className={styles.impactList}>
                                {["Organized workflow", "Reduced kitchen chaos", "Guaranteed payments"].map((text, i) => (
                                    <li key={i}><span className={styles.impactCheck}><Check size={12} /></span> {text}</li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div className={styles.impactCol}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <div className={styles.impactHeader}>
                                <Shield size={20} /> For Admins
                            </div>
                            <ul className={styles.impactList}>
                                {["Revenue via platform fees", "Full ecosystem control", "Scalable architecture"].map((text, i) => (
                                    <li key={i}><span className={styles.impactCheck}><Check size={12} /></span> {text}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* ===================================================================
                    10. FUTURE ENHANCEMENTS
                   =================================================================== */}
                <section className={styles.section} style={{ borderBottom: 'none' }}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={stagger} className={styles.sectionHeader}
                    >
                        <motion.span variants={fadeInUp} className={styles.sectionBadge}>What's Next</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                            Future Enhancements
                        </motion.h2>
                    </motion.div>

                    <div className={styles.futureGrid}>
                        {[
                            { icon: <Brain size={22} />, title: "AI Queue Prediction" },
                            { icon: <CalendarClock size={22} />, title: "Time-Slot Ordering" },
                            { icon: <TrendingUp size={22} />, title: "Dynamic Rush Pricing" },
                            { icon: <Award size={22} />, title: "Loyalty & Rewards" },
                            { icon: <MapPin size={22} />, title: "Multi-Campus Expansion" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className={styles.futureCard}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                            >
                                <div className={styles.futureIcon}>{item.icon}</div>
                                <div className={styles.futureTitle}>{item.title}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>

            {/* ===================================================================
                11. CONCLUSION
               =================================================================== */}
            <section className={styles.conclusionSection}>
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={stagger}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <motion.h2 variants={fadeInUp} className={styles.conclusionTitle}>
                        From Chaos to <span style={{ color: '#FF7A00' }}>Clarity</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className={styles.conclusionText}>
                        Campus Bites transforms food courts into a structured, digital-first system — removing queues, enforcing accountability, enabling real-time coordination, and providing full administrative control.
                    </motion.p>
                </motion.div>
            </section>

        </div>
    );
}
