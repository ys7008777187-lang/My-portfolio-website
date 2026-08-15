"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Education.module.css";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";
import educationDataRaw from "../../../data/education.json";

export default function Education() {
    const [educationData, setEducationData] = useState([]);

    useEffect(() => {
        setEducationData(educationDataRaw);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.label}>Education</span>
                    <h2 className={styles.title}>Academic Background</h2>
                </motion.div>

                <div className={styles.grid}>
                    {educationData.map((edu, index) => {
                        // Dynamic color mapping based on university name (from reference)
                        const themeColor = edu.institution.includes('DIT') ? '#eab308' : '#22c55e';
                        
                        return (
                            <motion.div
                                key={edu.institution}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                            >
                                {/* Left Image Block */}
                                <div className={styles.imageBlock} style={{ '--theme-color': themeColor }}>
                                    {edu.image ? (
                                        <Image
                                            src={edu.image}
                                            alt={edu.institution}
                                            fill
                                            className={styles.uniImage}
                                        />
                                    ) : (
                                        <div className={styles.iconWrapper}>
                                            <GraduationCap size={48} color="#000" strokeWidth={1.5} />
                                        </div>
                                    )}
                                </div>

                                {/* Right Content Block */}
                                <div className={styles.content}>
                                    <h3 className={styles.institution}>{edu.institution}</h3>
                                    <p className={styles.degree} style={{ color: themeColor }}>{edu.degree}</p>
                                    
                                    <div className={styles.meta}>
                                        <span className={styles.metaItem}>
                                            <Calendar size={14} className={styles.metaIcon} />
                                            {edu.duration}
                                        </span>
                                        <span className={styles.metaDot}>•</span>
                                        <span className={styles.metaItem}>
                                            <MapPin size={14} className={styles.metaIcon} />
                                            {edu.location}
                                        </span>
                                    </div>

                                    {edu.coursework && edu.coursework.length > 0 && (
                                        <div className={styles.coursework}>
                                            <div className={styles.courseworkHeader}>
                                                <div className={styles.courseworkLabel}>
                                                    <BookOpen size={14} />
                                                    RELEVANT COURSEWORK
                                                </div>
                                            </div>
                                            <div className={styles.courses}>
                                                {edu.coursework.map(course => (
                                                    <span key={course} className={styles.course}>
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
