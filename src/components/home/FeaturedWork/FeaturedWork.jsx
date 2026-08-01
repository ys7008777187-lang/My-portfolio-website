"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetUrl } from "../../../lib/assetUrl";
import Link from "next/link";
import Button from "../../ui/Button/Button";
import styles from "./FeaturedWork.module.css";
import { ArrowUpRight } from "lucide-react";
import projectsData from "../../../data/projects.json";

export default function FeaturedWork() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const loadProjects = () => {
            const validProjects = Array.isArray(projectsData) ? projectsData.filter(p => p.status === 'Published').slice(0, 3) : [];

            const formattedProjects = validProjects.map(p => ({
                id: p.id,
                title: p.title,
                category: p.category,
                description: p.category + " project", // Fallback description
                image: getAssetUrl(p.image || '/images/placeholder.jpg'),
                color: '#1E3A5F',
                tags: [p.category, "Design"], // Fallback tags
                externalUrl: p.link
            }));
            setProjects(formattedProjects);
        };

        loadProjects();
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
                    <div className={styles.headerLeft}>
                        <span className={styles.label}>Selected Work</span>
                        <h2 className={styles.title}>Featured Projects</h2>
                    </div>
                    <Button href="/work" variant="secondary">View All</Button>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                            {project.externalUrl ? (
                                <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    <div
                                        className={styles.imageWrapper}
                                        style={{ backgroundColor: project.color }}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            unoptimized
                                            style={{ objectFit: "cover" }}
                                            className={styles.image}
                                        />
                                        <div className={styles.overlay}>
                                            <motion.div
                                                className={styles.viewButton}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <ArrowUpRight size={24} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className={styles.content}>
                                        <span className={styles.category}>{project.category}</span>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.description}>{project.description}</p>

                                        <div className={styles.tags}>
                                            {project.tags.map(tag => (
                                                <span key={tag} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <Link href={`/work/${project.id}`} className={styles.link}>
                                    <div
                                        className={styles.imageWrapper}
                                        style={{ backgroundColor: project.color }}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            unoptimized
                                            style={{ objectFit: "cover" }}
                                            className={styles.image}
                                        />
                                        <div className={styles.overlay}>
                                            <motion.div
                                                className={styles.viewButton}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <ArrowUpRight size={24} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className={styles.content}>
                                        <span className={styles.category}>{project.category}</span>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.description}>{project.description}</p>

                                        <div className={styles.tags}>
                                            {project.tags.map(tag => (
                                                <span key={tag} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
