"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        type: "spring",
        bounce: 0.4,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      } 
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <span className={styles.sectionNumber}>5.</span>
          <h2 className={styles.title}>WHAT'S NEXT?</h2>
          <div className={styles.badgeWrapper}>
            <span className={styles.subtitleBadge}>The story ends here, but the conversation begins.</span>
          </div>
        </motion.div>

        <motion.div 
          className={styles.cardContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className={styles.card}>
            <div className={styles.storyText}>
              <motion.div variants={itemVariants} className={styles.theEndContainer}>
                <h3 className={styles.theEnd}>THE END</h3>
                <span className={styles.strike}></span>
              </motion.div>
              
              <motion.div variants={itemVariants} className={styles.sfxContainer}>
                <div className={styles.burst}></div>
                <h4 className={styles.no}>NO.</h4>
              </motion.div>
              
              <motion.h4 variants={itemVariants} className={styles.letsBuild}>
                LET'S BUILD
              </motion.h4>
              
              <motion.h4 variants={itemVariants} className={styles.nextStory}>
                THE NEXT STORY
              </motion.h4>
              
              <motion.h4 variants={itemVariants} className={styles.together}>
                TOGETHER.
              </motion.h4>
            </div>

            <motion.div variants={itemVariants} className={styles.ctaWrapper}>
              <Link href="/contact" className={styles.ctaButton}>
                <span className={styles.btnText}>GET IN TOUCH</span> 
                <ArrowRight className={styles.btnIcon} size={24} strokeWidth={3} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
