"use client";
import { motion } from "framer-motion";
import ScrollVaporText from "../../ui/ScrollVaporText/ScrollVaporText";
import styles from "./Skills.module.css";
import {
    Figma, Code, Search, Palette, Layers, Accessibility,
    BarChart3, Smartphone, Zap
} from "lucide-react";
import skillsData from "../../../data/skills.json";

const iconMap = {
    "Design Tools": Figma,
    "Frontend": Code,
    "Product & Research": Search,
    "UI & Interaction": Palette,
    "Prototyping & Handoff": Layers,
    "Accessibility": Accessibility,
    "Analytics & QA": BarChart3
};

const defaultCategories = [
    "Design Tools",
    "Frontend",
    "Product & Research",
    "UI & Interaction",
    "Prototyping & Handoff",
    "Accessibility",
    "Analytics & QA"
];

const categoryColors = {
    "Design Tools": "#3b82f6", // Blue
    "Frontend": "#f59e0b", // Yellow/Orange
    "Product & Research": "#ef4444", // Red
    "UI & Interaction": "#a855f7", // Purple
    "Prototyping & Handoff": "#22c55e", // Green
    "Accessibility": "#d97706", // Brown/Orange
    "Analytics & QA": "#0ea5e9" // Cyan
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.06, delayChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
};

export default function Skills() {
    // Process static data directly instead of using useEffect to prevent framer-motion rendering issues
    const skillCategories = defaultCategories.map(catTitle => {
        let illustration = null;
        if (catTitle === "Design Tools") {
            illustration = "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/images/skills/design_tools_v2.jpg";
        } else if (catTitle === "Analytics & QA") {
            illustration = "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/images/skills/analytics_v2.jpg";
        }

        return {
            title: catTitle,
            icon: iconMap[catTitle] || Zap,
            skills: skillsData
                .filter(item => item.category === catTitle)
                .map(item => item.name),
            illustration
        };
    }).filter(cat => cat.skills.length > 0);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <span className={styles.label}>Skills & Tools</span>
                    <ScrollVaporText text="What I Work With" as="h2" className={styles.title} />
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skillCategories.map((category, index) => {
                        const themeColor = categoryColors[category.title] || "#ff3b30";
                        return (
                            <motion.div
                                key={category.title}
                                className={styles.card}
                                variants={itemVariants}
                                style={{ '--theme-color': themeColor }}
                            >
                                <div className={styles.cardTop}>
                                    <div className={styles.iconWrapper}>
                                        {/* Pure CSS motion lines around the icon */}
                                        <div className={styles.motionLines}></div>
                                        <category.icon size={28} color="#fff" strokeWidth={1.5} />
                                    </div>
                                    <div className={styles.categoryTitleBg}>
                                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                                    </div>
                                </div>
                                <ul className={styles.skillsList}>
                                    {category.skills.map(skill => (
                                        <li key={skill} className={styles.skillItem}>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                                {category.illustration && (
                                    <div className={styles.illustrationWrapper}>
                                        <img src={category.illustration} alt={`${category.title} illustration`} className={styles.illustration} />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
