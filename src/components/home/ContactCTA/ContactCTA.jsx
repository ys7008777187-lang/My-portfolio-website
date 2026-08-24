"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles, 
  Linkedin, 
  MessageCircle, 
  FileText, 
  Send,
  Zap,
  Clock
} from "lucide-react";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "yashsrivastava7008@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className={styles.section} id="contact">
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
            <span className={styles.sectionNumber}>05.</span>
            <span className={styles.headerBadge}>ISSUE #05 • THE FINALE</span>
          </div>
          <h2 className={styles.title}>WHAT'S NEXT?</h2>
          <p className={styles.subtitle}>
            THE STORY ENDS HERE, BUT THE COLLABORATION BEGINS.
          </p>
        </motion.div>

        {/* ═══ MAIN 2-PANEL COMIC CONTAINER ═══ */}
        <motion.div 
          className={styles.comicGrid}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* ─── LEFT PANEL: THE STORY PITCH & SFX ─── */}
          <div className={`${styles.comicPanel} ${styles.leftPanel}`}>
            <div className={styles.panelTape} />
            
            {/* Comic SFX Hook */}
            <div className={styles.sfxHeaderRow}>
              <div className={styles.theEndWrapper}>
                <span className={styles.theEndText}>THE END</span>
                <span className={styles.strikeLine} />
              </div>
              
              <div className={styles.burstContainer}>
                <div className={styles.starBurst} />
                <span className={styles.burstText}>NO!</span>
              </div>
            </div>

            <div className={styles.headlineBlock}>
              <h3 className={styles.mainHeadline}>
                LET'S BUILD <br />
                <span className={styles.highlightYellow}>THE NEXT STORY</span> TOGETHER.
              </h3>
              <p className={styles.descriptionText}>
                Have a bold product vision, a 0-to-1 startup, or a complex interface that needs high-craft UI/UX and rapid prototyping? I'm always excited to team up on high-impact projects.
              </p>
            </div>

            {/* Status & Availability Chips */}
            <div className={styles.statusChipsRow}>
              <div className={styles.statusChip}>
                <span className={styles.statusDot} />
                <span>Available for Freelance & Full-time Roles</span>
              </div>
              <div className={styles.locationChip}>
                <MapPin size={13} className={styles.chipIcon} />
                <span>Bangalore, India (UTC+5:30)</span>
              </div>
              <div className={styles.responseTimeChip}>
                <Clock size={13} className={styles.chipIcon} />
                <span>Avg. Response: &lt; 24 hrs</span>
              </div>
            </div>
          </div>

          {/* ─── RIGHT PANEL: DIRECT ACTIONS & CHANNELS ─── */}
          <div className={`${styles.comicPanel} ${styles.rightPanel}`}>
            {/* Comic Speech Bubble */}
            <div className={styles.speechBubble}>
              <Sparkles size={14} className={styles.bubbleSparkle} />
              <span>&ldquo;Let&apos;s turn caffeine and complex requirements into unforgettable UI!&rdquo;</span>
              <div className={styles.bubbleTail} />
            </div>

            {/* Fast Email Copy Box */}
            <div className={styles.emailBox}>
              <div className={styles.emailHeader}>
                <Mail size={15} className={styles.emailIcon} />
                <span className={styles.emailLabel}>DIRECT TRANSMISSION</span>
              </div>
              <div className={styles.emailRow}>
                <a href={`mailto:${emailAddress}`} className={styles.emailText}>
                  {emailAddress}
                </a>
                <button 
                  type="button"
                  onClick={handleCopyEmail} 
                  className={`${styles.copyBtn} ${copied ? styles.copiedBtn : ""}`}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Primary Action Button (Links to Contact Form) */}
            <Link href="/contact" className={styles.primaryCtaBtn}>
              <span className={styles.ctaBtnText}>START A PROJECT / SEND MESSAGE</span>
              <ArrowRight size={18} className={styles.ctaArrow} strokeWidth={2.5} />
            </Link>

            {/* Direct Connect Quick Links */}
            <div className={styles.quickLinksGrid}>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialPill}
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://wa.me/917032690291" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialPill}
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:yashsrivastava7008@gmail.com" 
                className={styles.socialPill}
              >
                <Send size={14} />
                <span>Quick Mail</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

