"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetUrl } from "../../../lib/assetUrl";
import styles from "./Profile.module.css";
import { MapPin, Mail, Briefcase } from "lucide-react";
import profileData from "../../../data/profile.json";

export default function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setProfile(profileData);
    }, []);

    if (!profile) return null;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Image */}
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.imageBg}></div>
                        <div className={styles.imageFrame}>
                            <Image
                                src={getAssetUrl(profile.image || "/images/profile.jpg")}
                                alt={profile.name}
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                                unoptimized
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className={styles.label}>About Me</span>
                        <h1 className={styles.name}>{profile.name}</h1>
                        <p className={styles.role}>
                            <span className={styles.highlight}>{profile.role}</span>
                        </p>

                        <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <MapPin size={18} />
                                <span>{profile.location}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <Briefcase size={18} />
                                <span>{profile.workingAt}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <Mail size={18} />
                                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                            </div>
                        </div>

                        <p className={styles.bio}>
                            {profile.bio1}
                        </p>
                        <p className={styles.bio}>
                            {profile.bio2}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
