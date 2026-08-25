"use client";
import { motion } from "framer-motion";
import styles from "./Philosophy.module.css";

const principles = [
    { title: "User-First", desc: "Empathy is the foundation of great design." },
    { title: "Accessibility", desc: "Design should be inclusive and usable by everyone." },
    { title: "Purposeful Motion", desc: "Animation should guide, not distract." },
    { title: "Collaboration", desc: "Great products are built by great teams." }
];

export default function Philosophy() {
    return (
        <section className={styles.section}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className={styles.label}>Principles</span>
                <h2 className={styles.sectionTitle}>Design Philosophy</h2>
                <p className={styles.subtitle}>Core mindsets guiding every product decision and interaction</p>
            </motion.div>
            <div className={styles.grid}>
                {principles.map((item, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.06, duration: 0.35 }}
                    >
                        <span className={styles.number}>0{index + 1}</span>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.desc}>{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
