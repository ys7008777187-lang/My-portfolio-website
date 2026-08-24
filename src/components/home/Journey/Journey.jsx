"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Journey.module.css";
import { 
  Compass, 
  Utensils, 
  CreditCard, 
  QrCode, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Pause,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Zap,
  Layers,
  Car,
  Package,
  MapPin,
  ShieldCheck,
  Smartphone
} from "lucide-react";
import { getOptimizedUrl } from "../../../lib/assetUrl";

const projectsData = [
  {
    id: "campus-bites",
    title: "CAMPUS BITES",
    category: "Food Delivery UX",
    badge: "CAMPUS BITES • UX CASE STUDY",
    caseStudyUrl: "/work/8",
    icon: Utensils,
    screens: [
      {
        stepNumber: "01",
        tabLabel: "Discovery",
        icon: Compass,
        screenTitle: "FOOD COURT & OUTLET HUB",
        phase: "STEP 1: DISCOVERY & SELECTION",
        tagline: "Explore all campus food courts with real-time wait times and live open status.",
        image: "/images/campusbites/Food cout listing .png",
        annotation: {
          title: "Real-Time Wait Times",
          text: "Dynamic preparation estimates prevent students from arriving during peak congestion.",
          position: "top"
        },
        features: [
          { title: "Live Outlet Availability", desc: "Instantly see which food court counters are open." },
          { title: "Smart Dietary Filters", desc: "Filter by Vegetarian, Quick Bites, and Student Budget." },
          { title: "Queue-Load Indicators", desc: "Color-coded rush indicators for every food counter." }
        ],
        tags: ["Campus Hub", "Live Wait Times", "Dietary Tags"]
      },
      {
        stepNumber: "02",
        tabLabel: "Menu & Customize",
        icon: Utensils,
        screenTitle: "INTERACTIVE MENU & CUSTOMIZATION",
        phase: "STEP 2: MENU EXPLORATION",
        tagline: "High-contrast visual menu with rapid variant selection and instant stock updates.",
        image: "/images/campusbites/Store and food listing.png",
        annotation: {
          title: "Live Inventory Sync",
          text: "Sold-out items grey out automatically to eliminate ordering disappointment.",
          position: "middle"
        },
        features: [
          { title: "1-Tap Variant Selection", desc: "Choose sizes, spice levels, and combos in seconds." },
          { title: "Live Counter Sync", desc: "Menu syncs directly with vendor POS tablets." },
          { title: "Sticky Cart Drawer", desc: "Real-time item count and subtotal preview." }
        ],
        tags: ["Dynamic Menu", "1-Tap Add", "Combos & Add-ons"]
      },
      {
        stepNumber: "03",
        tabLabel: "Instant Checkout",
        icon: CreditCard,
        screenTitle: "FRICTIONLESS DIGITAL PAYMENT",
        phase: "STEP 3: CHECKOUT & WALLET",
        tagline: "Zero-contact digital payment integrating Student ID wallet, UPI, and split billing.",
        image: "/images/campusbites/View Cart.png",
        annotation: {
          title: "Lecture-Break Scheduler",
          text: "Pre-order 15 minutes before classes end for immediate collection.",
          position: "bottom"
        },
        features: [
          { title: "Student Campus Wallet", desc: "Instant tap payment with zero gateway drop-offs." },
          { title: "Pickup Time Slots", desc: "Schedule pickup for immediate or future class breaks." },
          { title: "Automated Digital Invoice", desc: "Itemized receipts stored directly in user history." }
        ],
        tags: ["Student Wallet", "UPI / Cards", "Pickup Scheduling"]
      },
      {
        stepNumber: "04",
        tabLabel: "Live Token",
        icon: QrCode,
        screenTitle: "DIGITAL TOKEN & QUEUE-FREE PICKUP",
        phase: "STEP 4: LIVE TRACKING & PICKUP",
        tagline: "Say goodbye to crowded physical queues with real-time digital token callouts.",
        image: "/images/campusbites/Token Number.png",
        annotation: {
          title: "Scan & Grab Token",
          text: "Unique animated token verified at counter in under 3 seconds.",
          position: "middle"
        },
        features: [
          { title: "High-Contrast Token", desc: "Large readable token number for counter collection." },
          { title: "3-Stage Live Status", desc: "Received → Preparing → Ready for Pickup updates." },
          { title: "Haptic Ready Alerts", desc: "Vibration and push notification the moment food is plated." }
        ],
        tags: ["100% Queue-Free", "QR Token", "Haptic Alerts"]
      }
    ]
  },
  {
    id: "bhaiyaa",
    title: "BHAIYAA SUPER APP",
    category: "Super App Ecosystem",
    badge: "BHAIYAA • MULTI-SERVICE UI/UX",
    caseStudyUrl: "/work/3",
    icon: Package,
    screens: [
      {
        stepNumber: "01",
        tabLabel: "Home Hub",
        icon: Compass,
        screenTitle: "INTEGRATED COMMUNITY DASHBOARD",
        phase: "STEP 1: SUPER APP HUB",
        tagline: "All-in-one super app uniting neighborhood utilities, hyperlocal deliveries, and instant rides.",
        image: "/images/bhaiyaa/new_screen_1.jpg",
        annotation: {
          title: "Unified Hub",
          text: "Access 10+ everyday services in one tap without cognitive overload.",
          position: "top"
        },
        features: [
          { title: "Multi-Service Grid", desc: "Dynamic widgets adapt to morning & evening commute habits." },
          { title: "Contextual Action Feed", desc: "Live service notifications and active booking updates." },
          { title: "1-Tap Emergency SOS", desc: "Instant emergency trigger with trusted contact notification." }
        ],
        tags: ["Super App", "Multi-Service", "Community Hub"]
      },
      {
        stepNumber: "02",
        tabLabel: "Services",
        icon: Layers,
        screenTitle: "HYPERLOCAL ON-DEMAND BOOKING",
        phase: "STEP 2: SERVICE BOOKING",
        tagline: "Book verified local home services and trusted handymen with upfront transparent pricing.",
        image: "/images/bhaiyaa/new_screen_2.jpg",
        annotation: {
          title: "Verified Partners",
          text: "Strict background audits and rating badges protect homeowners.",
          position: "middle"
        },
        features: [
          { title: "Price Transparency", desc: "Fixed rate cards eliminate awkward counter-negotiations." },
          { title: "Verified Profiles", desc: "Browse customer reviews and past service photos." },
          { title: "Real-Time Slot Booking", desc: "Select exact arrival windows down to 30-minute slots." }
        ],
        tags: ["Transparent Rates", "Verified Pros", "Slot Booking"]
      },
      {
        stepNumber: "03",
        tabLabel: "Community",
        icon: MapPin,
        screenTitle: "NEIGHBORHOOD SOCIAL & RIDE SHARE",
        phase: "STEP 3: LOCAL CONNECT",
        tagline: "Carpool with trusted verified neighbors and share community event updates safely.",
        image: "/images/bhaiyaa/new_screen_3.jpg",
        annotation: {
          title: "Safe Local Rides",
          text: "Neighborhood badges ensure verified carpool groups.",
          position: "bottom"
        },
        features: [
          { title: "Community Carpooling", desc: "Share rides along daily office and campus commute routes." },
          { title: "Local Notice Board", desc: "Stay updated on neighborhood announcements and alerts." },
          { title: "Group Chat Moderation", desc: "Verified-resident exclusive forums and discussions." }
        ],
        tags: ["Carpooling", "Verified Neighbors", "Local Connect"]
      },
      {
        stepNumber: "04",
        tabLabel: "Tracking",
        icon: QrCode,
        screenTitle: "LIVE ORDER & DISPATCH TIMELINE",
        phase: "STEP 4: TRACKING & DISPATCH",
        tagline: "Unified tracking dashboard for deliveries, service workers, and ride arrivals.",
        image: "/images/bhaiyaa/new_screen_4.jpg",
        annotation: {
          title: "Live Timeline",
          text: "End-to-end milestone tracker with OTP security handshake.",
          position: "middle"
        },
        features: [
          { title: "Real-Time GPS Tracking", desc: "Watch service provider arrival on live map view." },
          { title: "OTP Handshake Security", desc: "Ensure services begin and complete with verified pins." },
          { title: "In-App VoIP & Chat", desc: "Masked private phone calls protect user personal numbers." }
        ],
        tags: ["Live GPS", "OTP Security", "Private VoIP"]
      }
    ]
  },
  {
    id: "myrik",
    title: "MYRIK EV MOBILITY",
    category: "EV Mobility UX",
    badge: "MYRIK • ON-DEMAND EV PLATFORM",
    caseStudyUrl: "/work/2",
    icon: Car,
    screens: [
      {
        stepNumber: "01",
        tabLabel: "Ride Map",
        icon: Compass,
        screenTitle: "TIER 2/3 EV RIDE DISCOVERY",
        phase: "STEP 1: LOCATION & BOOKING",
        tagline: "Card-based spatial interface designed for Bharat with minimal cognitive friction.",
        image: "/images/myrik/screens/home.png",
        annotation: {
          title: "Simplified Map UI",
          text: "Large touch targets tailored for emerging smartphone users.",
          position: "top"
        },
        features: [
          { title: "Location-First Pin Drop", desc: "Accurate landmark-based pickups for unmapped alleys." },
          { title: "Dynamic Fare Calculator", desc: "Instant transparent fare breakdown before booking." },
          { title: "Bilingual UI Support", desc: "Hindi & English voice-assisted navigation options." }
        ],
        tags: ["EV Mobility", "Design for Bharat", "Bilingual UI"]
      },
      {
        stepNumber: "02",
        tabLabel: "Upfront Fare",
        icon: CreditCard,
        screenTitle: "TRANSPARENT UPFRONT FARES",
        phase: "STEP 2: FARE & FLEET SELECTION",
        tagline: "Zero-surge pricing with clear EV cost savings breakdowns before booking.",
        image: "/images/myrik/screens/booking.png",
        annotation: {
          title: "Zero-Surge Guarantee",
          text: "Fixed predictable fares build long-term commuter trust.",
          position: "middle"
        },
        features: [
          { title: "Green Eco-Savings Meter", desc: "Visual CO2 emission reduction tally per ride." },
          { title: "Fixed Price Lock", desc: "Fare never increases regardless of peak traffic." },
          { title: "Flexible Cash & UPI", desc: "Supports digital QR and cash payments seamlessly." }
        ],
        tags: ["Zero-Surge", "CO2 Meter", "Cash & UPI"]
      },
      {
        stepNumber: "03",
        tabLabel: "Matching",
        icon: Zap,
        screenTitle: "RAPID DRIVER MATCHING",
        phase: "STEP 3: SMART DISPATCH",
        tagline: "Fast nearest-driver dispatch algorithm reducing average wait times by 40%.",
        image: "/images/myrik/screens/searching.png",
        annotation: {
          title: "Rapid Dispatch",
          text: "Algorithmic clustering pairs nearest EV drivers in seconds.",
          position: "bottom"
        },
        features: [
          { title: "Pulse Matching Radar", desc: "Visual feedback keeping users engaged during search." },
          { title: "ETA Confidence Score", desc: "High-accuracy pickup countdown timer." },
          { title: "Cancel Without Penalty", desc: "Zero cancellation fees within 2 minutes." }
        ],
        tags: ["40% Faster", "Live Radar", "Zero Penalty"]
      },
      {
        stepNumber: "04",
        tabLabel: "Live Route",
        icon: QrCode,
        screenTitle: "LIVE GPS ROUTE & SAFETY",
        phase: "STEP 4: ACTIVE RIDE & SAFETY",
        tagline: "Turn-by-turn route visualization with 1-tap live location sharing for family.",
        image: "/images/myrik/screens/tracking.png",
        annotation: {
          title: "Safety Shield",
          text: "Live route sharing and 24/7 SOS helpline integration.",
          position: "middle"
        },
        features: [
          { title: "Live Turn-by-Turn GPS", desc: "High-frequency position updates along verified route." },
          { title: "Emergency Safety Shield", desc: "1-tap SMS location broadcast to emergency contacts." },
          { title: "Direct Driver Chat", desc: "Quick canned audio messages for pickup coordination." }
        ],
        tags: ["Safety Shield", "Live GPS", "Family Sharing"]
      }
    ]
  }
];

export default function Journey() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(1);

  const activeProject = projectsData[activeProjectIndex];
  const prototypePages = activeProject.screens;

  const selectProject = (idx) => {
    setActiveProjectIndex(idx);
    setActiveStep(0);
    setDirection(1);
  };

  const goToStep = useCallback((newIndex) => {
    setDirection(newIndex > activeStep ? 1 : -1);
    setActiveStep(newIndex);
  }, [activeStep]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveStep((prev) => (prev + 1) % prototypePages.length);
  }, [prototypePages.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveStep((prev) => (prev - 1 + prototypePages.length) % prototypePages.length);
  }, [prototypePages.length]);

  // Optional Auto-play
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, handleNext]);

  const current = prototypePages[activeStep];

  const pageVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.97
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (dir) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.25, ease: "easeIn" }
    })
  };

  return (
    <section className={styles.section} id="journey">
      <div className={styles.container}>
        {/* ═══ SECTION HEADER ═══ */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.headerTop}>
            <span className={styles.sectionNumber}>04.</span>
            <span className={styles.headerBadge}>{activeProject.badge}</span>
          </div>
          <h2 className={styles.title}>4-PAGE INTERACTIVE PROTOTYPES</h2>
          <p className={styles.subtitle}>
            Switch projects below and click through the 4-step mobile UI flows.
          </p>
        </motion.div>

        {/* ═══ MAIN PROTOTYPE CONTAINER CARD ═══ */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Bar: Project Switcher Tabs */}
          <div className={styles.projectSwitcher}>
            {projectsData.map((proj, idx) => {
              const ProjIcon = proj.icon;
              const isSelected = activeProjectIndex === idx;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => selectProject(idx)}
                  className={`${styles.projTab} ${isSelected ? styles.projTabActive : ""}`}
                >
                  <ProjIcon size={14} className={styles.projTabIcon} />
                  <span>{proj.title}</span>
                </button>
              );
            })}
          </div>

          {/* Step Navigation Tabs */}
          <div className={styles.stepTabs}>
            {prototypePages.map((page, index) => {
              const Icon = page.icon;
              const isActive = activeStep === index;
              return (
                <button
                  key={page.stepNumber}
                  className={`${styles.stepTab} ${isActive ? styles.stepTabActive : ""}`}
                  onClick={() => goToStep(index)}
                  type="button"
                >
                  <span className={styles.stepTabNum}>{page.stepNumber}</span>
                  <Icon size={13} className={styles.stepTabIcon} />
                  <span className={styles.stepTabLabel}>{page.tabLabel}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className={styles.stepTabIndicator}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Card Content: 2-Column Responsive Layout */}
          <div className={styles.cardContent}>
            {/* ─── LEFT COLUMN: UX Insights & Features ─── */}
            <div className={styles.leftColumn}>
              <div className={styles.stepMetaRow}>
                <span className={styles.phaseBadge}>{current.phase}</span>
                <div className={styles.roleTag}>{activeProject.category}</div>
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`${activeProject.id}-${activeStep}`}
                  custom={direction}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={styles.textDetails}
                >
                  <h3 className={styles.projectTitle}>{current.screenTitle}</h3>
                  <p className={styles.projectDesc}>{current.tagline}</p>

                  <div className={styles.featuresList}>
                    {current.features.map((feat, idx) => (
                      <div key={idx} className={styles.featureItem}>
                        <CheckCircle2 size={15} className={styles.featureCheck} />
                        <div>
                          <strong className={styles.featureTitle}>{feat.title}: </strong>
                          <span className={styles.featureDesc}>{feat.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pills / Tags */}
                  <div className={styles.tagsRow}>
                    {current.tags.map((tag, idx) => (
                      <span key={idx} className={styles.tagPill}>
                        <Zap size={11} className={styles.tagIcon} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Actions & Controls */}
              <div className={styles.controlBar}>
                <div className={styles.navButtons}>
                  <button 
                    onClick={handlePrev} 
                    className={styles.ctrlBtn}
                    aria-label="Previous Screen"
                  >
                    <ChevronLeft size={16} />
                    <span>Prev</span>
                  </button>
                  <button 
                    onClick={handleNext} 
                    className={`${styles.ctrlBtn} ${styles.ctrlBtnPrimary}`}
                    aria-label="Next Screen"
                  >
                    <span>Next Step</span>
                    <ChevronRight size={16} />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`${styles.ctrlBtn} ${isPlaying ? styles.ctrlBtnActive : ""}`}
                    title={isPlaying ? "Pause Flow" : "Auto-Play Flow"}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  </button>
                </div>

                <Link href={activeProject.caseStudyUrl} className={styles.caseStudyLink}>
                  <span>Full Case Study</span>
                  <ExternalLink size={13} />
                </Link>
              </div>
            </div>

            {/* ─── RIGHT COLUMN: Miniature Interactive Phone Device Frame ─── */}
            <div className={styles.rightColumn}>
              <div className={styles.phoneMockupContainer}>
                <div className={styles.phoneFrame} onClick={handleNext} title="Click to advance to next prototype screen">
                  {/* Miniature Dynamic Island Notch */}
                  <div className={styles.dynamicIsland}>
                    <div className={styles.cameraLens} />
                    <div className={styles.speaker} />
                  </div>

                  {/* Active Screen View — 100% uncropped */}
                  <div className={styles.screenViewport}>
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={`${activeProject.id}-${activeStep}`}
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className={styles.screenImageWrapper}
                      >
                        <Image
                          src={getOptimizedUrl(current.image, { thumbnail: true })}
                          alt={`${activeProject.title} - ${current.screenTitle}`}
                          fill
                          sizes="(max-width: 768px) 180px, 220px"
                          className={styles.screenImage}
                          priority={true}
                          unoptimized
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Miniature Interactive Hotspot Indicator */}
                  <div className={styles.tapIndicator}>
                    <span className={styles.tapText}>Tap Next →</span>
                  </div>

                  {/* Phone Home Indicator Bar */}
                  <div className={styles.homeBar} />
                </div>

                {/* Floating UX Annotation */}
                <motion.div
                  key={`anno-${activeProject.id}-${activeStep}`}
                  className={`${styles.floatingAnnotation} ${styles[current.annotation.position]}`}
                  initial={{ opacity: 0, x: 15, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className={styles.annoHeader}>
                    <Sparkles size={12} className={styles.annoSparkle} />
                    <strong>{current.annotation.title}</strong>
                  </div>
                  <p className={styles.annoBody}>{current.annotation.text}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


