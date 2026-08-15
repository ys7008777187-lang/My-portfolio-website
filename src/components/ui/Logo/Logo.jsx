"use client";
import styles from "./Logo.module.css";
import Link from "next/link";

export default function Logo({ size = 44, disableLink = false, hideText = false }) {
    const content = (
        <>
            <div
                className={styles.symbolContainer}
                style={{ width: size, height: size }}
            >
                <span className={styles.logoMonogram}>YS</span>
            </div>
            {!hideText && (
                <div className={styles.textContainer}>
                    <span className={styles.firstName}>YASH</span>
                    <span className={styles.lastName}>SRIVASTAVA</span>
                </div>
            )}
        </>
    );

    if (disableLink) {
        return <div className={styles.logo}>{content}</div>;
    }

    return (
        <Link href="/" className={styles.logo}>
            {content}
        </Link>
    );
}
