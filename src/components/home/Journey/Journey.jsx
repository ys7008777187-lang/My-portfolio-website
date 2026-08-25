"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { textVariants } from "../../../lib/animationPresets";
import {
  Clock,
  Filter,
  BarChart3,
  MapPin,
  ShoppingCart,
  CreditCard,
  Bell,
  Users,
  Package,
  Car,
  Shield,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  ArrowRight,
  Zap,
  Smartphone,
  Utensils,
  Search,
  Navigation,
  CheckCircle2,
  Sliders,
  Layers,
  Award
} from "lucide-react";
import { getOptimizedUrl } from "../../../lib/assetUrl";
import styles from "./Journey.module.css";

const projects = [
  {
    id: 8,
    name: "CAMPUS BITES",
    icon: Utensils,
    meta: "PRODUCT DESIGN · UX · MOBILE",
    role: "Product Designer",
    contribution: "Research · UX · UI · Prototyping",
    timeline: "6 Weeks",
    platform: "Mobile (iOS / Android)",
    steps: [
      {
        stepNum: 1,
        stepLabel: "DISCOVERY",
        stepSub: "Find what you need",
        tag: "STEP 1: DISCOVERY",
        title: "FOOD COURT & OUTLET HUB",
        problem: "Students waste critical break time navigating crowded campus food outlets with zero queue visibility.",
        solution: "A real-time campus food discovery experience designed around live counter availability, queue visibility, and faster meal decisions.",
        description: "Explore all campus food courts with real-time wait times and live open status.",
        features: [
          {
            icon: Clock,
            title: "Live Outlet Availability",
            description: "Instantly see which food court counters are open."
          },
          {
            icon: Filter,
            title: "Smart Dietary Filters",
            description: "Filter by Vegetarian, Quick Bites, and Student Budget."
          },
          {
            icon: BarChart3,
            title: "Queue-Load Indicators",
            description: "Color-coded rush indicators for every food counter."
          }
        ],
        tags: [
          { icon: MapPin, text: "Campus Hub", color: "#FFCC00" },
          { icon: BarChart3, text: "Live Wait Times", color: "#34C759" },
          { icon: Filter, text: "Dietary Tags", color: "#32ADE6" }
        ],
        image: "/images/campusbites/Food cout listing .png",
        callout: {
          title: "REAL-TIME WAIT TIMES",
          desc: "Dynamic preparation estimates prevent students from arriving during peak congestion."
        }
      },
      {
        stepNum: 2,
        stepLabel: "MENU & CUSTOMIZE",
        stepSub: "Choose your meal",
        tag: "STEP 2: MENU & CUSTOMIZE",
        title: "INTERACTIVE MENU & CUSTOMIZATION",
        problem: "Unclear menu variants, hidden add-on costs, and outdated sold-out listings trigger ordering friction.",
        solution: "High-contrast visual menu cards with instant 1-tap customization, live inventory sync, and upfront price transparency.",
        description: "High-contrast visual menu with rapid variant selection and instant stock updates.",
        features: [
          {
            icon: Smartphone,
            title: "Visual Menu Cards",
            description: "High-quality food images with instant transparent pricing."
          },
          {
            icon: Sliders,
            title: "1-Tap Variant Selection",
            description: "Choose sizes, spice levels, and combos in seconds."
          },
          {
            icon: ShoppingCart,
            title: "Sticky Smart Cart",
            description: "Real-time item count and subtotal preview."
          }
        ],
        tags: [
          { icon: Search, text: "Dynamic Menu", color: "#FFCC00" },
          { icon: Zap, text: "1-Tap Add", color: "#34C759" },
          { icon: ShoppingCart, text: "Smart Cart", color: "#32ADE6" }
        ],
        image: "/images/campusbites/Store and food listing.png",
        callout: {
          title: "LIVE INVENTORY SYNC",
          desc: "Sold-out items grey out automatically to eliminate ordering disappointment."
        }
      },
      {
        stepNum: 3,
        stepLabel: "INSTANT CHECKOUT",
        stepSub: "Quick & easy checkout",
        tag: "STEP 3: INSTANT CHECKOUT",
        title: "FRICTIONLESS DIGITAL PAYMENT",
        problem: "Payment gateway drop-offs and slow individual billing cause congestion at food checkout counters.",
        solution: "1-tap Campus Student Wallet, instant UPI integration, and automated smart bill splitting that cuts checkout to under 30 seconds.",
        description: "Zero-contact digital payment integrating Student ID wallet, UPI, and split billing.",
        features: [
          {
            icon: CreditCard,
            title: "Student Campus Wallet",
            description: "Instant tap payment with zero gateway drop-offs."
          },
          {
            icon: Clock,
            title: "Lecture-Break Scheduler",
            description: "Pre-order 15 minutes before classes end for immediate collection."
          },
          {
            icon: Users,
            title: "Smart Bill Splitting",
            description: "Split food bills between friends seamlessly."
          }
        ],
        tags: [
          { icon: CreditCard, text: "Student Wallet", color: "#FFCC00" },
          { icon: Zap, text: "UPI / Cards", color: "#34C759" },
          { icon: Clock, text: "Break Scheduler", color: "#32ADE6" }
        ],
        image: "/images/campusbites/View Cart.png",
        callout: {
          title: "30-SECOND CHECKOUT",
          desc: "Pre-order 15 minutes before classes end for zero-friction immediate collection."
        }
      },
      {
        stepNum: 4,
        stepLabel: "LIVE TOKEN",
        stepSub: "Track your order live",
        tag: "STEP 4: LIVE TOKEN",
        title: "DIGITAL TOKEN & QUEUE-FREE PICKUP",
        problem: "Physical counter crowding and missed verbal token callouts create chaos and delayed pickups.",
        solution: "Digital animated token tracking with 3-stage live preparation milestones and haptic ready alerts.",
        description: "Say goodbye to crowded physical queues with real-time digital token callouts.",
        features: [
          {
            icon: Navigation,
            title: "High-Contrast Token Display",
            description: "Large readable token verified at counter in under 3 seconds."
          },
          {
            icon: Bell,
            title: "3-Stage Live Status",
            description: "Received → Preparing → Ready for Pickup updates."
          },
          {
            icon: Zap,
            title: "Haptic Ready Alerts",
            description: "Vibration and push notification the moment food is plated."
          }
        ],
        tags: [
          { icon: Smartphone, text: "100% Queue-Free", color: "#FFCC00" },
          { icon: Bell, text: "QR Token", color: "#34C759" },
          { icon: Zap, text: "Haptic Alerts", color: "#32ADE6" }
        ],
        image: "/images/campusbites/Token Number.png",
        callout: {
          title: "SCAN & GRAB TOKEN",
          desc: "Unique animated token verified at counter in under 3 seconds with zero queues."
        }
      }
    ]
  },
  {
    id: 3,
    name: "BHAIYAA SUPER APP",
    icon: Package,
    meta: "SUPER APP · PRODUCT SYSTEM · UX/UI",
    role: "Lead Product Designer",
    contribution: "System Architecture · UX Strategy · UI Design",
    timeline: "10 Weeks",
    platform: "Multi-Platform Mobile",
    steps: [
      {
        stepNum: 1,
        stepLabel: "HOME HUB",
        stepSub: "Unified dashboard",
        tag: "STEP 1: SUPER APP HUB",
        title: "INTEGRATED COMMUNITY DASHBOARD",
        problem: "Fragmented neighborhood services force users to switch between 4+ disconnected apps with inconsistent trust.",
        solution: "A unified hyperlocal super app integrating commerce, community trust, and door-to-door delivery in a single cohesive design system.",
        description: "All-in-one super app uniting neighborhood utilities, hyperlocal deliveries, and instant rides.",
        features: [
          {
            icon: Layers,
            title: "Multi-Service Grid",
            description: "Dynamic widgets adapt to morning & evening commute habits."
          },
          {
            icon: Bell,
            title: "Contextual Action Feed",
            description: "Live service notifications and active booking updates."
          },
          {
            icon: Shield,
            title: "1-Tap Emergency SOS",
            description: "Instant emergency trigger with trusted contact notification."
          }
        ],
        tags: [
          { icon: Layers, text: "Super App", color: "#FFCC00" },
          { icon: Users, text: "Multi-Service", color: "#34C759" },
          { icon: MapPin, text: "Community Hub", color: "#32ADE6" }
        ],
        image: "/images/bhaiyaa/new_screen_1.jpg",
        callout: {
          title: "UNIFIED HUB",
          desc: "Access 10+ everyday services in one tap without cognitive overload."
        }
      },
      {
        stepNum: 2,
        stepLabel: "SERVICES",
        stepSub: "On-demand booking",
        tag: "STEP 2: SERVICE BOOKING",
        title: "HYPERLOCAL ON-DEMAND BOOKING",
        problem: "Unregulated service fees and unverified worker profiles lead to safety doubts and price disputes.",
        solution: "Transparent upfront fixed rate cards with verified background-checked technician badges and exact slot booking.",
        description: "Book verified local home services and trusted handymen with upfront transparent pricing.",
        features: [
          {
            icon: Award,
            title: "Price Transparency",
            description: "Fixed rate cards eliminate awkward counter-negotiations."
          },
          {
            icon: Shield,
            title: "Verified Profiles",
            description: "Browse customer reviews and verified past service photos."
          },
          {
            icon: Clock,
            title: "Real-Time Slot Booking",
            description: "Select exact arrival windows down to 30-minute slots."
          }
        ],
        tags: [
          { icon: Award, text: "Fixed Rates", color: "#FFCC00" },
          { icon: Shield, text: "Verified Pros", color: "#34C759" },
          { icon: Clock, text: "Slot Booking", color: "#32ADE6" }
        ],
        image: "/images/bhaiyaa/new_screen_2.jpg",
        callout: {
          title: "VERIFIED PARTNERS",
          desc: "Strict background audits and rating badges protect homeowners."
        }
      },
      {
        stepNum: 3,
        stepLabel: "COMMUNITY",
        stepSub: "Local connect",
        tag: "STEP 3: LOCAL CONNECT",
        title: "NEIGHBORHOOD SOCIAL & RIDE SHARE",
        problem: "Isolated neighborhood communities lack a verified, safe platform to carpool or share urgent local alerts.",
        solution: "Resident-verified community forum with daily commute carpooling and moderated hyper-local updates.",
        description: "Carpool with trusted verified neighbors and share community event updates safely.",
        features: [
          {
            icon: Car,
            title: "Community Carpooling",
            description: "Share rides along daily office and campus commute routes."
          },
          {
            icon: Bell,
            title: "Local Notice Board",
            description: "Stay updated on neighborhood announcements and alerts."
          },
          {
            icon: Users,
            title: "Group Chat Moderation",
            description: "Verified-resident exclusive forums and discussions."
          }
        ],
        tags: [
          { icon: Car, text: "Carpooling", color: "#FFCC00" },
          { icon: Shield, text: "Verified Neighbors", color: "#34C759" },
          { icon: Users, text: "Local Connect", color: "#32ADE6" }
        ],
        image: "/images/bhaiyaa/new_screen_3.jpg",
        callout: {
          title: "SAFE LOCAL RIDES",
          desc: "Neighborhood badges ensure verified carpool groups and trusted journeys."
        }
      },
      {
        stepNum: 4,
        stepLabel: "TRACKING",
        stepSub: "Live timeline",
        tag: "STEP 4: TRACKING & DISPATCH",
        title: "LIVE ORDER & DISPATCH TIMELINE",
        problem: "Opaque delivery arrivals and unmasked phone numbers compromise user privacy and ETA certainty.",
        solution: "Live GPS timeline with OTP security verification handshakes and in-app masked VoIP calls.",
        description: "Unified tracking dashboard for deliveries, service workers, and ride arrivals.",
        features: [
          {
            icon: MapPin,
            title: "Real-Time GPS Tracking",
            description: "Watch service provider arrival on live map view."
          },
          {
            icon: Shield,
            title: "OTP Handshake Security",
            description: "Ensure services begin and complete with verified PINs."
          },
          {
            icon: Smartphone,
            title: "In-App Masked Calls",
            description: "Masked private phone calls protect user personal numbers."
          }
        ],
        tags: [
          { icon: MapPin, text: "Live GPS", color: "#FFCC00" },
          { icon: Shield, text: "OTP Security", color: "#34C759" },
          { icon: Smartphone, text: "Private VoIP", color: "#32ADE6" }
        ],
        image: "/images/bhaiyaa/new_screen_4.jpg",
        callout: {
          title: "LIVE TIMELINE",
          desc: "End-to-end milestone tracker with OTP security handshake for guaranteed safety."
        }
      }
    ]
  },
  {
    id: 2,
    name: "MYRIK EV MOBILITY",
    icon: Car,
    meta: "MOBILITY · UX RESEARCH · MOBILE",
    role: "Product Designer & Researcher",
    contribution: "User Research · Spatial UI · Interaction Design",
    timeline: "8 Weeks",
    platform: "Mobile App",
    steps: [
      {
        stepNum: 1,
        stepLabel: "RIDE MAP",
        stepSub: "Spatial discovery",
        tag: "STEP 1: DISCOVERY",
        title: "TIER 2/3 EV RIDE DISCOVERY",
        problem: "Unpredictable dynamic pricing and poor range transparency create commuter anxiety in tier-2 EV adoption.",
        solution: "A transparent, map-first EV booking platform with landmark-based pin drops and bilingual voice assistance.",
        description: "Card-based spatial interface designed for Bharat with minimal cognitive friction.",
        features: [
          {
            icon: MapPin,
            title: "Location-First Pin Drop",
            description: "Accurate landmark-based pickups for unmapped alleys."
          },
          {
            icon: CreditCard,
            title: "Dynamic Fare Calculator",
            description: "Instant transparent fare breakdown before booking."
          },
          {
            icon: Smartphone,
            title: "Bilingual UI Support",
            description: "Hindi & English voice-assisted navigation options."
          }
        ],
        tags: [
          { icon: MapPin, text: "EV Mobility", color: "#FFCC00" },
          { icon: Users, text: "Design for Bharat", color: "#34C759" },
          { icon: Smartphone, text: "Bilingual UI", color: "#32ADE6" }
        ],
        image: "/images/myrik/screens/home.png",
        callout: {
          title: "SIMPLIFIED MAP UI",
          desc: "Large touch targets tailored for emerging smartphone users across India."
        }
      },
      {
        stepNum: 2,
        stepLabel: "UPFRONT FARE",
        stepSub: "Zero-surge fares",
        tag: "STEP 2: FARE ESTIMATE",
        title: "TRANSPARENT UPFRONT FARES",
        problem: "Surge multipliers during peak commute times alienate price-sensitive tier-2 daily commuters.",
        solution: "Fixed upfront pricing locks that never increase mid-trip, paired with tangible CO2 carbon-saving meters.",
        description: "Zero-surge pricing with clear EV cost savings breakdowns before booking.",
        features: [
          {
            icon: Zap,
            title: "Green Eco-Savings Meter",
            description: "Visual CO2 emission reduction tally per ride."
          },
          {
            icon: Shield,
            title: "Fixed Price Lock",
            description: "Fare never increases regardless of peak traffic."
          },
          {
            icon: CreditCard,
            title: "Flexible Cash & UPI",
            description: "Supports digital QR and cash payments seamlessly."
          }
        ],
        tags: [
          { icon: Shield, text: "Zero-Surge", color: "#FFCC00" },
          { icon: Zap, text: "CO2 Meter", color: "#34C759" },
          { icon: CreditCard, text: "Cash & UPI", color: "#32ADE6" }
        ],
        image: "/images/myrik/screens/booking.png",
        callout: {
          title: "ZERO-SURGE GUARANTEE",
          desc: "Fixed predictable fares build long-term commuter trust and transparency."
        }
      },
      {
        stepNum: 3,
        stepLabel: "MATCHING",
        stepSub: "Rapid dispatch",
        tag: "STEP 3: SMART DISPATCH",
        title: "RAPID DRIVER MATCHING",
        problem: "High ride-cancellation rates and endless searching screens cause user drop-offs.",
        solution: "Nearest-driver algorithmic clustering pairing EV drivers in seconds with 0 cancellation penalty within 2 minutes.",
        description: "Fast nearest-driver dispatch algorithm reducing average wait times by 40%.",
        features: [
          {
            icon: Zap,
            title: "Pulse Matching Radar",
            description: "Visual feedback keeping users engaged during search."
          },
          {
            icon: Clock,
            title: "ETA Confidence Score",
            description: "High-accuracy pickup countdown timer."
          },
          {
            icon: Shield,
            title: "Cancel Without Penalty",
            description: "Zero cancellation fees within 2 minutes."
          }
        ],
        tags: [
          { icon: Zap, text: "40% Faster", color: "#FFCC00" },
          { icon: Clock, text: "Live Radar", color: "#34C759" },
          { icon: Shield, text: "Zero Penalty", color: "#32ADE6" }
        ],
        image: "/images/myrik/screens/searching.png",
        callout: {
          title: "RAPID DISPATCH",
          desc: "Algorithmic clustering pairs nearest EV drivers in seconds."
        }
      },
      {
        stepNum: 4,
        stepLabel: "LIVE ROUTE",
        stepSub: "Safety & GPS",
        tag: "STEP 4: LIVE ROUTE",
        title: "LIVE GPS ROUTE & SAFETY",
        problem: "Night-time safety concerns and route deviations are major barriers for women commuters.",
        solution: "Real-time route deviations alerts, automatic family tracking links, and a dedicated 1-tap SOS emergency trigger.",
        description: "Turn-by-turn route visualization with 1-tap live location sharing for family.",
        features: [
          {
            icon: MapPin,
            title: "Live Breadcrumb Route",
            description: "Real-time turn-by-turn navigation with delay alerts."
          },
          {
            icon: Shield,
            title: "1-Tap Family Link",
            description: "Share live vehicle telemetry directly on WhatsApp."
          },
          {
            icon: Zap,
            title: "Emergency SOS Trigger",
            description: "Instant dispatch to local emergency teams if route deviates."
          }
        ],
        tags: [
          { icon: Shield, text: "1-Tap SOS", color: "#FFCC00" },
          { icon: Users, text: "Share Trip", color: "#34C759" },
          { icon: MapPin, text: "Live GPS", color: "#32ADE6" }
        ],
        image: "/images/myrik/screens/tracking.png",
        callout: {
          title: "SAFETY ASSURANCE",
          desc: "Live route monitoring with automatic family link sharing and instant emergency SOS."
        }
      }
    ]
  }
];

export default function Journey() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentProject = projects[activeProjectIdx];
  const currentStep = currentProject.steps[activeStepIdx];

  const handleNext = useCallback(() => {
    setActiveStepIdx((prev) => (prev + 1) % currentProject.steps.length);
  }, [currentProject.steps.length]);

  const handlePrev = useCallback(() => {
    setActiveStepIdx((prev) => (prev - 1 + currentProject.steps.length) % currentProject.steps.length);
  }, [currentProject.steps.length]);

  const handleProjectSwitch = (idx) => {
    setActiveProjectIdx(idx);
    setActiveStepIdx(0);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying, handleNext]);

  return (
    <section className={styles.journeySection} id="journey">
      <div className={styles.container}>
        {/* Top Header */}
        <motion.div 
          className={styles.header}
          variants={textVariants.headerEntrance}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className={styles.headerTop}>
            <span className={styles.sectionNumber}>4.</span>
            <h2 className={styles.mainTitle}>SELECTED PRODUCT WORK</h2>
          </div>
          <p className={styles.subtitle}>
            Explore selected products through interactive flows and case studies.
          </p>
          <p className={styles.summaryLine}>
            Digital products I&apos;ve designed across mobility, food, commerce and community.
          </p>
        </motion.div>

        {/* The Enclosing Comic Showcase Panel Box */}
        <div className={styles.showcaseBox}>
          {/* Project Switcher Bar with Metadata */}
          <div className={styles.projectTabsRow}>
            {projects.map((proj, idx) => {
              const Icon = proj.icon;
              const isActive = activeProjectIdx === idx;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => handleProjectSwitch(idx)}
                  className={`${styles.projectTab} ${isActive ? styles.projectTabActive : ""}`}
                >
                  <div className={styles.tabMainRow}>
                    <Icon size={16} className={styles.tabIcon} />
                    <span className={styles.tabName}>{proj.name}</span>
                  </div>
                  <span className={styles.tabMeta}>{proj.meta}</span>
                </button>
              );
            })}
          </div>

          {/* Thin Divider Line */}
          <div className={styles.horizontalDivider} />

          {/* Stepper Navigation Progress Bar */}
          <div className={styles.stepperBar}>
            {currentProject.steps.map((step, idx) => {
              const isActive = activeStepIdx === idx;
              return (
                <div key={idx} className={styles.stepperItemWrap}>
                  <button
                    type="button"
                    onClick={() => setActiveStepIdx(idx)}
                    className={`${styles.stepperItem} ${isActive ? styles.stepperActive : ""}`}
                  >
                    <div className={styles.stepNumberCircle}>
                      {step.stepNum}
                    </div>
                    <div className={styles.stepTextGroup}>
                      <span className={styles.stepTitleText}>{step.stepLabel}</span>
                      <span className={styles.stepSubText}>{step.stepSub}</span>
                    </div>
                  </button>

                  {idx < currentProject.steps.length - 1 && (
                    <span className={styles.chevronDivider}>&gt;</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Thin Divider Line */}
          <div className={styles.horizontalDivider} />

          {/* Main 2-Column Showcase Area */}
          <div className={styles.showcaseGrid}>
            {/* LEFT COLUMN: UX Highlights & Features */}
            <div className={styles.leftColumn}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeProjectIdx}-${activeStepIdx}-content`}
                  variants={textVariants.stepContentSwitch}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={styles.stepDetailsWrap}
                >
                  {/* Step Pill */}
                  <div className={styles.stepTagPill}>
                    {currentStep.tag}
                  </div>

                  {/* Main Screen Title */}
                  <h3 className={styles.screenHeading}>
                    {currentStep.title}
                  </h3>

                  {/* Project Metadata Strip */}
                  <div className={styles.projectMetaStrip}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>ROLE</span>
                      <span className={styles.metaVal}>{currentProject.role}</span>
                    </div>
                    <div className={styles.metaDivider}>•</div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>CONTRIBUTION</span>
                      <span className={styles.metaVal}>{currentProject.contribution}</span>
                    </div>
                    <div className={styles.metaDivider}>•</div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>TIMELINE</span>
                      <span className={styles.metaVal}>{currentProject.timeline}</span>
                    </div>
                  </div>

                  {/* Outcome-Oriented Problem & Solution Framing */}
                  <div className={styles.problemSolutionBox}>
                    <div className={styles.psBlock}>
                      <span className={styles.psBadgeProblem}>THE PROBLEM</span>
                      <p className={styles.psText}>{currentStep.problem || currentStep.description}</p>
                    </div>
                    <div className={styles.psBlock}>
                      <span className={styles.psBadgeSolution}>THE SOLUTION</span>
                      <p className={styles.psText}>{currentStep.solution || currentStep.description}</p>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className={styles.contentDivider} />

                  {/* 3 Feature Bullets with Yellow Circle Badges */}
                  <div className={styles.featuresList}>
                    {currentStep.features.map((feat, fIdx) => {
                      const FeatIcon = feat.icon;
                      return (
                        <div key={fIdx} className={styles.featureRow}>
                          <div className={styles.yellowIconBadge}>
                            <FeatIcon size={18} strokeWidth={2.4} />
                          </div>
                          <div className={styles.featureCopy}>
                            <h4 className={styles.featureTitle}>{feat.title}</h4>
                            <p className={styles.featureDesc}>{feat.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Tags */}
                  <div className={styles.tagsRow}>
                    {currentStep.tags.map((tag, tIdx) => {
                      const TagIcon = tag.icon;
                      return (
                        <div key={tIdx} className={styles.tagPill}>
                          <TagIcon size={13} style={{ color: tag.color }} />
                          <span>{tag.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Controls Bar */}
              <div className={styles.controlsBar}>
                <div className={styles.navGroup}>
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={activeStepIdx === 0}
                    className={styles.prevButton}
                  >
                    <ChevronLeft size={16} />
                    <span>PREV</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className={styles.nextButton}
                  >
                    <span>NEXT STEP</span>
                    <ChevronRight size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`${styles.playButton} ${isPlaying ? styles.playButtonActive : ""}`}
                    title={isPlaying ? "Pause autoplay" : "Auto play steps"}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  </button>
                </div>

                <Link
                  href={`/work/${currentProject.id}`}
                  className={styles.fullCaseStudyLink}
                >
                  <span>READ FULL CASE STUDY</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Modern Phone Mockup + Floating Comic Callout */}
            <div className={styles.rightColumn}>
              <div className={styles.phoneAndCalloutWrapper}>
                {/* iPhone Mockup Frame */}
                <div
                  className={styles.phoneDevice}
                  onClick={handleNext}
                  title="Click phone to go to next step"
                >
                  {/* Dynamic Island Notch */}
                  <div className={styles.dynamicIslandPill}>
                    <div className={styles.islandCamera} />
                  </div>

                  {/* Screen Viewport */}
                  <div className={styles.phoneScreen}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeProjectIdx}-${activeStepIdx}-phone`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className={styles.screenImageWrapper}
                      >
                        <Image
                          src={getOptimizedUrl(currentStep.image, { thumbnail: true })}
                          alt={currentStep.title}
                          fill
                          priority
                          unoptimized
                          sizes="(max-width: 768px) 260px, 320px"
                          className={styles.screenImg}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Home Indicator Bar */}
                  <div className={styles.homeIndicator} />
                </div>

                {/* Comic Callout Box on the Right */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeProjectIdx}-${activeStepIdx}-callout`}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={styles.comicCalloutCard}
                  >
                    {/* Top Left Sparkle Star */}
                    <svg className={styles.sparkleStar} viewBox="0 0 24 24" width="20" height="20">
                      <path
                        d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                        fill="#FFCC00"
                        stroke="#000"
                        strokeWidth="1.5"
                      />
                    </svg>

                    {/* Top Right Action Mark Lines */}
                    <div className={styles.actionLines}>
                      <span className={styles.actionLine1} />
                      <span className={styles.actionLine2} />
                      <span className={styles.actionLine3} />
                    </div>

                    <h4 className={styles.calloutHeading}>
                      {currentStep.callout.title}
                    </h4>
                    <p className={styles.calloutBody}>
                      {currentStep.callout.desc}
                    </p>

                    {/* Hand-drawn Curly Arrow pointing towards Phone */}
                    <svg
                      className={styles.curlyArrowSvg}
                      viewBox="0 0 80 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M65 8 C 45 42, 25 45, 8 28"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="4 2"
                      />
                      <path
                        d="M14 24 L 6 28 L 12 36"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
