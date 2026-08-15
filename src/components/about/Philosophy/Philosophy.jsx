"use client";
import { motion } from "framer-motion";
import ScrollVaporText from "../../ui/ScrollVaporText/ScrollVaporText";
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
            <ScrollVaporText text="Design Philosophy" as="h2" className={styles.heading} />
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
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.desc}>{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
