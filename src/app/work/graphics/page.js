"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import styles from "../uiux/page.module.css";

const graphicsProjects = [
    {
        id: "og1",
        title: "10154603",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/10154603.jpg",
        description: "Original artwork: 10154603"
    },
    {
        id: "og2",
        title: "10818",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/10818.jpg",
        description: "Original artwork: 10818"
    },
    {
        id: "og3",
        title: "9938169",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/9938169.jpg",
        description: "Original artwork: 9938169"
    },
    {
        id: "og4",
        title: "A4 - 2",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/A4 - 2.jpg",
        description: "Original artwork: A4 - 2"
    },
    {
        id: "og5",
        title: "Aaduri",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Aaduri.jpg",
        description: "Original artwork: Aaduri"
    },
    {
        id: "og6",
        title: "Artwork",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Artwork.jpg",
        description: "Original artwork: Artwork"
    },
    {
        id: "og7",
        title: "Baisakhi Creatives",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Baisakhi Creatives.jpg",
        description: "Original artwork: Baisakhi Creatives"
    },
    {
        id: "og8",
        title: "Baishaki poster",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Baishaki poster.jpg",
        description: "Original artwork: Baishaki poster"
    },
    {
        id: "og9",
        title: "Baishaki Postet",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Baishaki Postet.jpg",
        description: "Original artwork: Baishaki Postet"
    },
    {
        id: "og10",
        title: "Coffee Table book-01",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Coffee Table book-01.jpg",
        description: "Original artwork: Coffee Table book-01"
    },
    {
        id: "og11",
        title: "Coffee Table book-02",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Coffee Table book-02.jpg",
        description: "Original artwork: Coffee Table book-02"
    },
    {
        id: "og12",
        title: "Coffee Table book-03",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Coffee Table book-03.jpg",
        description: "Original artwork: Coffee Table book-03"
    },
    {
        id: "og13",
        title: "Coffee Table book-04",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Coffee Table book-04.jpg",
        description: "Original artwork: Coffee Table book-04"
    },
    {
        id: "og14",
        title: "Coffee Table book-05",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Coffee Table book-05.jpg",
        description: "Original artwork: Coffee Table book-05"
    },
    {
        id: "og15",
        title: "Frame 18",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Frame 18.jpg",
        description: "Original artwork: Frame 18"
    },
    {
        id: "og16",
        title: "Galleria Furniture 2",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Galleria Furniture 2.jpeg",
        description: "Original artwork: Galleria Furniture 2"
    },
    {
        id: "og17",
        title: "Hoarding 2",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Hoarding 2.jpg",
        description: "Original artwork: Hoarding 2"
    },
    {
        id: "og18",
        title: "Hoarding",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Hoarding.jpg",
        description: "Original artwork: Hoarding"
    },
    {
        id: "og19",
        title: "Instagram 1",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Instagram 1.jpg",
        description: "Original artwork: Instagram 1"
    },
    {
        id: "og20",
        title: "Instagram 2",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Instagram 2.jpg",
        description: "Original artwork: Instagram 2"
    },
    {
        id: "og21",
        title: "Instagram 3",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Instagram 3.jpg",
        description: "Original artwork: Instagram 3"
    },
    {
        id: "og22",
        title: "Instagram 4",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Instagram 4.jpg",
        description: "Original artwork: Instagram 4"
    },
    {
        id: "og23",
        title: "KING",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/KING.png",
        description: "Original artwork: KING"
    },
    {
        id: "og24",
        title: "Naga Creatives (1005 x 1920)",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Naga Creatives (1005 x 1920).png",
        description: "Original artwork: Naga Creatives (1005 x 1920)"
    },
    {
        id: "og25",
        title: "Performance AD",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Performance AD.jpg",
        description: "Original artwork: Performance AD"
    },
    {
        id: "og26",
        title: "RCB",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/RCB.png",
        description: "Original artwork: RCB"
    },
    {
        id: "og27",
        title: "The park",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/The park.jpeg",
        description: "Original artwork: The park"
    },
    {
        id: "og28",
        title: "Whatsapp",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Whatsapp.jpg",
        description: "Original artwork: Whatsapp"
    },
    {
        id: "og29",
        title: "WHD",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/WHD.jpg",
        description: "Original artwork: WHD"
    },
    {
        id: "og30",
        title: "World Health Day",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/World Health Day.jpg",
        description: "Original artwork: World Health Day"
    }
];

export default function GraphicsPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={18} />
                        <span>Back to Work</span>
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <div className={styles.headerBadge}>
                        <span className={styles.badgeDot} style={{ background: '#00E5A8' }} />
                        <span>Visual Creations</span>
                    </div>
                    <h1 className={styles.title}>Graphics & Artwork</h1>
                    <p className={styles.subtitle}>
                        Logos, branding, illustrations, and artistic compositions — crafted with passion and precision.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
                    }}
                >
                    {graphicsProjects.map((project) => (
                        <motion.article
                            key={project.id}
                            className={styles.card}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.97 },
                                visible: {
                                    opacity: 1, y: 0, scale: 1,
                                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                                }
                            }}
                        >
                            <div className={styles.cardLink} onClick={() => setSelectedProject(project)} style={{ cursor: "pointer" }}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        unoptimized
                                        style={{ objectFit: "cover" }}
                                        className={styles.image}
                                    />
                                    <div className={styles.imageOverlay}>
                                        <motion.div
                                            className={styles.viewBtn}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <ArrowUpRight size={22} />
                                        </motion.div>
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <span className={styles.cardCategory}>{project.category}</span>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.cardIcon}>{project.icon}</span>
                                        <span>{project.description}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className={styles.lightboxOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className={styles.lightboxContent}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <button className={styles.lightboxClose} onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                fill
                                unoptimized
                                className={styles.lightboxImage}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ContactCTA />
        </main>
    );
}
