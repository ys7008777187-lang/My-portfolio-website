"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./AboutPreview.module.css";
import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button/Button";

const values = [
    {
        number: "01",
        title: "User-First",
        description: "Every pixel serves a purpose. Design begins with empathy and ends with clarity."
    },
    {
        number: "02",
        title: "Craft & Detail",
        description: "The magic is in the micro-interactions, the spacing, the rhythm of the layout."
    },
    {
        number: "03",
        title: "Bold Simplicity",
        description: "Strip away the noise. The best interfaces feel effortless and inevitable."
    },
];

export default function AboutPreview() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.container}>
                {/* Big Statement */}
                <motion.div
                    className={styles.statement}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={styles.label}>Philosophy</span>
                    <h2 className={styles.bigQuote}>
                        I don't just design <span className={styles.accent}>interfaces</span> —
                        <br />
                        I craft <span className={styles.green}>experiences</span> that
                        <br />
                        people remember.
                    </h2>
                </motion.div>

                {/* Animated Divider */}
                <div className={styles.dividerWrap}>
                    <motion.div className={styles.divider} style={{ width: lineWidth }} />
                </div>

                {/* Values */}
                <div className={styles.valuesGrid}>
                    {values.map((item, i) => (
                        <motion.div
                            key={item.number}
                            className={styles.valueCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.08 }}
                        >
                            <span className={styles.valueNumber}>{item.number}</span>
                            <h3 className={styles.valueTitle}>{item.title}</h3>
                            <p className={styles.valueDesc}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className={styles.ctaRow}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                >
                    <Button href="/about">
                        More About Me
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
