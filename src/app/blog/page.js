"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import ContactCTA from "../../components/home/ContactCTA/ContactCTA";
import postsData from "../../data/posts.json";
import { getAssetUrl } from "../../lib/assetUrl";

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setBlogPosts(postsData);
        setIsLoading(false);
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className={styles.issueBanner}>
                        <span className={styles.issueLabel}>ISSUE</span>
                        <span className={styles.issueNum}>#03</span>
                        <span className={styles.issueSep}>—</span>
                        <span className={styles.issueTitle}>THOUGHTS & INSIGHTS</span>
                    </div>
                    <h1 className={styles.title}>Blog</h1>
                    <div className={styles.badge}>Thoughts & Insights</div>
                    <p className={styles.subtitle}>Writing about design, technology, and the creative process.</p>
                </motion.div>

                {isLoading ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>
                ) : (
                    <div className={styles.grid}>
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                className={styles.cardWrapper}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link href={`/blog/${post.id}`} className={styles.card}>
                                    <div className={styles.imageWrapper} style={{ backgroundColor: post.imageColor || 'var(--color-bg-secondary)' }}>
                                        {post.image ? (
                                            <Image
                                                src={getAssetUrl(post.image)}
                                                alt={post.title}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                className={styles.image}
                                            />
                                        ) : (
                                            <div className={styles.imagePlaceholder}>
                                                {post.icon || '📝'}
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles.meta}>
                                            <span>{post.date}</span>
                                            {post.readTime && (
                                                <>
                                                    <span>•</span>
                                                    <span>{post.readTime}</span>
                                                </>
                                            )}
                                        </div>
                                        <h2 className={styles.postTitle}>{post.title}</h2>
                                        <p className={styles.excerpt}>{post.excerpt}</p>
                                        <div className={styles.tags}>
                                            {post.tags?.map(tag => (
                                                <span key={tag} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
            <ContactCTA />
        </main>
    );
}
