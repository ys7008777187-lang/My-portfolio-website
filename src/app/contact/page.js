"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { textVariants } from "../../lib/animationPresets";
import styles from "./page.module.css";
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
    const [formState, setFormState] = useState("idle"); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "9997c1dd-5b7c-433e-8b57-5fbc315f3bf5",
                    from_name: formData.name,
                    email: formData.email,
                    subject: `Portfolio Contact: ${formData.reason}`,
                    message: formData.message,
                    reason: formData.reason,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setFormState("success");
                setFormData({ name: "", email: "", reason: "", message: "" });
            } else {
                setFormState("error");
            }
        } catch (error) {
            setFormState("error");
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.info}
                        variants={textVariants.headerEntrance}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className={styles.issueBanner}>
                            <span className={styles.issueLabel}>ISSUE</span>
                            <span className={styles.issueNum}>#04</span>
                            <span className={styles.issueSep}>—</span>
                            <span className={styles.issueTitle}>LET'S CONNECT</span>
                        </div>
                        <h1 className={styles.title}>
                            Let's start a project together.
                        </h1>
                        <p className={styles.subtitle}>
                            Interested in working together? I'm currently open for freelance projects and full-time opportunities.
                        </p>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <MapPin className={styles.icon} />
                                <div className={styles.detailText}>
                                    <span className={styles.label}>Location</span>
                                    <span className={styles.value}>Bangalore, India</span>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <Mail className={styles.icon} />
                                <div className={styles.detailText}>
                                    <span className={styles.label}>Email</span>
                                    <a href="mailto:Yashsrivastava7008@gmail.com" className={styles.value}>Yashsrivastava7008@gmail.com</a>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <Phone className={styles.icon} />
                                <div className={styles.detailText}>
                                    <span className={styles.label}>Phone</span>
                                    <a href="tel:+917008777187" className={styles.value}>+91 7008777187</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className={styles.form}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        onSubmit={handleSubmit}
                    >
                        {formState === "success" ? (
                            <div className={styles.successMessage}>
                                <CheckCircle size={48} className={styles.successIcon} />
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. I'll get back to you soon.</p>
                                <button
                                    type="button"
                                    className={styles.submitBtn}
                                    onClick={() => setFormState("idle")}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.formLabel}>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={styles.input}
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.formLabel}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={styles.input}
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="reason" className={styles.formLabel}>Reason for Contact</label>
                                    <select
                                        id="reason"
                                        name="reason"
                                        className={styles.input}
                                        value={formData.reason}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Freelancing Project">Freelancing Project</option>
                                        <option value="Full-time Job">Full-time Job</option>
                                        <option value="Opportunity">Opportunity</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.formLabel}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className={styles.input}
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {formState === "error" && (
                                    <div className={styles.errorMessage}>
                                        <AlertCircle size={20} />
                                        <span>Something went wrong. Please try again.</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={formState === "loading"}
                                >
                                    {formState === "loading" ? (
                                        <>
                                            <Loader2 size={20} className={styles.spinner} />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </>
                        )}
                    </motion.form>
                </div>
            </div>
        </main>
    );
}
