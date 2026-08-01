"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetUrl } from "../../../lib/assetUrl";
import Button from "../../ui/Button/Button";
import styles from "./AboutPreview.module.css";
import profileData from "../../../data/profile.json";

export default function AboutPreview() {
    const [profile, setProfile] = useState(null);
    const [stats, setStats] = useState([
        { value: "2+", label: "Years Experience" },
        { value: "10+", label: "Projects Completed" },
        { value: "5+", label: "Happy Clients" },
    ]);

    useEffect(() => {
        setProfile(profileData);
    }, []);

    if (!profile) return null; // or a skeleton

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Image Side */}
                    <motion.div
                        className={styles.imageColumn}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageBg}></div>
                            <div className={styles.imageFrame}>
                                <Image
                                    src={getAssetUrl(profile.image || "/images/profile.jpg")}
                                    alt={profile.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className={styles.image}
                                    unoptimized
                                />
                            </div>
                            {/* Floating badge */}
                            <motion.div
                                className={styles.floatingBadge}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            >
                                <span className={styles.badgeIcon}>🎨</span>
                                <span>{profile.role || "Design Enthusiast"}</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className={styles.contentColumn}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className={styles.label}>About Me</span>
                        <h2 className={styles.title}>
                            Passionate about creating
                            <span className={styles.highlight}> impactful</span> digital experiences
                        </h2>
                        <p className={styles.description}>
                            {profile.bio1 || "I'm a UI/UX designer based in Bangalore, India, with a passion for creating beautiful and functional digital products."}
                        </p>
                        <p className={styles.description}>
                            {profile.bio2 || "When I'm not pushing pixels, you'll find me exploring new coffee shops, sketching ideas, or diving into the latest design trends."}
                        </p>

                        {/* Stats */}
                        <div className={styles.stats}>
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className={styles.stat}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <span className={styles.statValue}>{stat.value}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Button href="/about">Learn More About Me</Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
