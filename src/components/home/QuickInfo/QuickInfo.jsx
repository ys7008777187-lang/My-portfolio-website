"use client";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Zap } from "lucide-react";
import styles from "./QuickInfo.module.css";

const infoItems = [
    {
        icon: <Monitor size={32} />,
        title: "UI Design",
        description: "Creating user-centric digital products that solve real problems.",
    },
    {
        icon: <Smartphone size={32} />,
        title: "UX Research",
        description: "Experience across Web, iOS, and Android ecosystems.",
    },
    {
        icon: <Zap size={32} />,
        title: "Interaction & Motion",
        description: "Bringing interfaces to life with purposeful micro-interactions.",
    },
];

export default function QuickInfo() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {infoItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06, duration: 0.35 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.icon}>{item.icon}</div>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
