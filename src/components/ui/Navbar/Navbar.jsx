"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import { Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useRef } from "react";

const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/work", label: "WORK" },
    { href: "/about", label: "ABOUT" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
];

function NavItem({ link, isActive }) {
    const ref = useRef(null);
    return (
        <li ref={ref} className={styles.navItemWrapper}>
            <Link 
                href={link.href} 
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
            >
                <span>{link.label}</span>
                {isActive && (
                    <motion.div 
                        className={styles.activeUnderline} 
                        layoutId="activeNavUnderline"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                )}
            </Link>
        </li>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolling up or down
            if (currentScrollY > lastScrollY && currentScrollY > 120) {
                setIsVisible(false); // Scrolling down & past threshold -> Hide
            } else {
                setIsVisible(true); // Scrolling up or at top -> Show
            }

            setIsScrolled(currentScrollY > 40);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${!isVisible ? styles.hidden : ""}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <nav className={styles.nav}>
                {/* Comic Starburst Logo (YS) */}
                <Link href="/" className={styles.logoBadge} aria-label="Yash Srivastava Home">
                    <div className={styles.starburstBorder}>
                        <span className={styles.logoText}>YS</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                        return (
                            <NavItem key={link.href} link={link} isActive={isActive} />
                        );
                    })}
                </ul>

                {/* Actions: LET'S CONNECT Speech Bubble CTA & Theme Toggle */}
                <div className={styles.actions}>
                    {/* Comic Speech Bubble CTA */}
                    <Link href="/contact" className={styles.connectBubble}>
                        <span className={styles.bubbleText}>LET&apos;S CONNECT</span>
                        <div className={styles.bubbleBurst}>
                            <Sparkles size={13} className={styles.sparkleIcon} />
                        </div>
                        <div className={styles.bubbleTail} />
                    </Link>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={styles.mobileLinks}>
                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 + index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`}
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 + navLinks.length * 0.05 }}
                            >
                                <Link
                                    href="/contact"
                                    className={styles.mobileCta}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    LET&apos;S CONNECT
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
