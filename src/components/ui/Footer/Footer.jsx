"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { Linkedin, Instagram, Facebook, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import Logo from "../Logo/Logo";

const footerLinks = {
    navigation: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/work", label: "Work" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ],
    social: [
        { href: "https://www.linkedin.com/in/yashsrivastavaa035/", label: "LinkedIn", icon: Linkedin },
        { href: "https://www.instagram.com/yash_srivastava_/", label: "Instagram", icon: Instagram },
        { href: "mailto:yashsrivastava7008@gmail.com", label: "Gmail", icon: Mail },
        { href: "https://wa.me/917008777187", label: "WhatsApp", icon: MessageCircle },
    ]
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Top Section */}
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Logo size={32} disableLink hideText />
                            </motion.div>
                            <span className={styles.logoText}>Yash Srivastava</span>
                        </Link>
                        <p className={styles.tagline}>
                            Designing digital experiences that inspire and delight.
                        </p>
                    </div>

                    <div className={styles.linksGrid}>
                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>Navigation</h4>
                            <ul className={styles.linkList}>
                                {footerLinks.navigation.map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className={styles.link}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>Connect</h4>
                            <ul className={styles.linkList}>
                                {footerLinks.social.map(link => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialLink}
                                            aria-label={link.label}
                                        >
                                            <link.icon size={16} />
                                            <span>{link.label}</span>
                                            <ArrowUpRight size={12} className={styles.externalIcon} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>Get in Touch</h4>
                            <a href="mailto:Yashsrivastava7008@gmail.com" className={styles.emailLink}>
                                <Mail size={16} />
                                <span>Yashsrivastava7008@gmail.com</span>
                            </a>
                            <p className={styles.location}>Bangalore, India</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Yash Srivastava. All rights reserved.
                    </p>
                    <p className={styles.credits}>
                        Designed & Built with <span className={styles.heart}>♥</span> using Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
