"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./Button.module.css";

export default function Button({
    href,
    children,
    variant = "primary",
    className = "",
    onClick
}) {
    const Component = href ? Link : "button";
    const props = href ? { href } : { onClick };

    return (
        <Component
            {...props}
            className={`${styles.button} ${styles[variant]} ${className}`}
        >
            <span className={styles.content}>{children}</span>
            <span className={styles.iconWrapper}>
                <ArrowRight className={styles.icon} size={20} />
            </span>
        </Component>
    );
}
