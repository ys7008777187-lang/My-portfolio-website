"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, X, ChevronDown } from "lucide-react";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import CreativeBook from "../../../components/ui/CreativeBook/CreativeBook";
import styles from "../uiux/page.module.css";

const graphicsProjects = [
    {
        id: "the-nexus-point-issue-2",
        title: "The Nexus Point: Issue 2",
        category: "Chitranga",
        icon: "📖",
        image: "/images/artworks/the-nexus-point-issue-2/Cover.png",
        images: [
            "/images/artworks/the-nexus-point-issue-2/Cover.png",
            "/images/artworks/the-nexus-point-issue-2/1.png",
            "/images/artworks/the-nexus-point-issue-2/2.png",
            "/images/artworks/the-nexus-point-issue-2/3.png",
            "/images/artworks/the-nexus-point-issue-2/4.png",
            "/images/artworks/the-nexus-point-issue-2/5.png",
            "/images/artworks/the-nexus-point-issue-2/6.png",
            "/images/artworks/the-nexus-point-issue-2/7.png",
            "/images/artworks/the-nexus-point-issue-2/8.png",
            "/images/artworks/the-nexus-point-issue-2/9.png",
            "/images/artworks/the-nexus-point-issue-2/10.png",
            "/images/artworks/the-nexus-point-issue-2/11.png",
            "/images/artworks/the-nexus-point-issue-2/12.png",
            "/images/artworks/the-nexus-point-issue-2/13.png",
            "/images/artworks/the-nexus-point-issue-2/14.png",
            "/images/artworks/the-nexus-point-issue-2/15.png",
            "/images/artworks/the-nexus-point-issue-2/16.png",
            "/images/artworks/the-nexus-point-issue-2/17.png",
            "/images/artworks/the-nexus-point-issue-2/18.png",
            "/images/artworks/the-nexus-point-issue-2/19.png",
            "/images/artworks/the-nexus-point-issue-2/20.png",
            "/images/artworks/the-nexus-point-issue-2/Back Cover (2).png"
        ],
        isCarouselBook: true,
        isComic: true,
        isNew: true,
        description: "Issue 2 of The Nexus Point Chitranga"
    },
    {
        id: "the-nexus-point-book",
        title: "The Nexus Point: Issue 1",
        category: "Chitranga",
        icon: "📖",
        image: "/images/artworks/the-nexus-point/0.png",
        images: [
            "/images/artworks/the-nexus-point/0.png",
            "/images/artworks/the-nexus-point/1.png",
            "/images/artworks/the-nexus-point/2.png",
            "/images/artworks/the-nexus-point/3.png",
            "/images/artworks/the-nexus-point/4.png",
            "/images/artworks/the-nexus-point/6.png",
            "/images/artworks/the-nexus-point/7.png",
            "/images/artworks/the-nexus-point/8.png",
            "/images/artworks/the-nexus-point/9.png",
            "/images/artworks/the-nexus-point/10.png",
            "/images/artworks/the-nexus-point/11.png",
            "/images/artworks/the-nexus-point/12.png",
            "/images/artworks/the-nexus-point/13.png",
            "/images/artworks/the-nexus-point/14.png",
            "/images/artworks/the-nexus-point/15.png",
            "/images/artworks/the-nexus-point/16.png",
            "/images/artworks/the-nexus-point/17.png",
            "/images/artworks/the-nexus-point/18.png",
            "/images/artworks/the-nexus-point/19.png",
            "/images/artworks/the-nexus-point/20.png",
            "/images/artworks/the-nexus-point/21.png",
            "/images/artworks/the-nexus-point/23.png",
            "/images/artworks/the-nexus-point/24.png",
            "/images/artworks/the-nexus-point/25.png",
            "/images/artworks/the-nexus-point/26.png",
            "/images/artworks/the-nexus-point/28.png",
            "/images/artworks/the-nexus-point/29.png",
            "/images/artworks/the-nexus-point/30.png",
            "/images/artworks/the-nexus-point/31.png",
            "/images/artworks/the-nexus-point/32.png",
            "/images/artworks/the-nexus-point/33.png",
            "/images/artworks/the-nexus-point/34.png",
            "/images/artworks/the-nexus-point/Back Cover (2).png"
        ],
        isCarouselBook: true,
        isComic: true,
        description: "An interactive Chitranga / comic presentation"
    },
    {
        id: "fifth-layer-book",
        title: "Fifth Layer Foundation",
        category: "Visual Storytelling",
        icon: "📖",
        image: "/images/artworks/fifth-layer/frame 1.png",
        images: [
            "/images/artworks/fifth-layer/frame 1.png",
            "/images/artworks/fifth-layer/frame 2.png",
            "/images/artworks/fifth-layer/frame 3.png",
            "/images/artworks/fifth-layer/frame 4.png",
            "/images/artworks/fifth-layer/frame 5.png",
            "/images/artworks/fifth-layer/frame 6.png",
            "/images/artworks/fifth-layer/frame 7.png",
            "/images/artworks/fifth-layer/frame 8.png",
            "/images/artworks/fifth-layer/frame 9.png",
            "/images/artworks/fifth-layer/frame 10.png"
        ],
        isCarouselBook: true,
        description: "An interactive editorial story book presentation"
    },
    {
        id: "comic-magazine-book",
        title: "Comic Magazine",
        category: "Visual Storytelling",
        icon: "📖",
        image: "/images/artworks/comic-magazine/cover.png",
        images: [
            "/images/artworks/comic-magazine/cover.png",
            "/images/artworks/comic-magazine/Page 1.png",
            "/images/artworks/comic-magazine/Page 2.png",
            "/images/artworks/comic-magazine/Page 3.png",
            "/images/artworks/comic-magazine/Page 4.png",
            "/images/artworks/comic-magazine/Page 5.png",
            "/images/artworks/comic-magazine/Page 6.png",
            "/images/artworks/comic-magazine/Page 7.png",
            "/images/artworks/comic-magazine/Page 8.png",
            "/images/artworks/comic-magazine/Page 9.png",
            "/images/artworks/comic-magazine/Page 10.png",
            "/images/artworks/comic-magazine/page 11.png",
            "/images/artworks/comic-magazine/page 12.png",
            "/images/artworks/comic-magazine/Page 13.png",
            "/images/artworks/comic-magazine/Page 14.png",
            "/images/artworks/comic-magazine/page15.png",
            "/images/artworks/comic-magazine/back-cover.png"
        ],
        isCarouselBook: true,
        description: "An interactive comic book presentation"
    },
    {
        id: "fashion-campaign",
        title: "Fashion",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/fashion-1.jpg",
        images: [
            "/images/artworks/fashion-1.jpg",
            "/images/artworks/fashion-2.jpg"
        ],
        description: "Fashion Promotional Campaign Graphics"
    },
    {
        id: "og0",
        title: "White Lotus",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Frame 18.jpg",
        images: [
            "/images/artworks/Hoarding.jpg",
            "/images/artworks/Frame 18.jpg",
            "/images/artworks/Hoarding 2.jpg",
            "/images/artworks/Whatsapp.jpg",
            "/images/artworks/Performance AD.jpg",
            "/images/artworks/Instagram 1.jpg",
            "/images/artworks/Instagram 2.jpg",
            "/images/artworks/Instagram 3.jpg",
            "/images/artworks/Instagram 4.jpg"
        ],
        description: "Original artwork: White Lotus Gallery"
    },
    {
        id: "og1",
        title: "Packaging Design",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/10154603.jpg",
        images: [
            "/images/artworks/10154603.jpg",
            "/images/artworks/9938169.jpg"
        ],
        description: "Original artwork: Packaging Design Gallery"
    },
    {
        id: "og2",
        title: "Branding",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/10818.jpg",
        description: "Original artwork: Branding"
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
        title: "Baisakhi Posters",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Baisakhi Creatives.jpg",
        images: [
            "/images/artworks/Baisakhi Creatives.jpg",
            "/images/artworks/Baishaki poster.jpg",
            "/images/artworks/Baishaki Postet.jpg"
        ],
        description: "Original artwork: Baisakhi Posters Collection"
    },
    {
        id: "og10",
        title: "Coffee Table Book",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Coffee Table book-01.jpg",
        images: [
            "/images/artworks/Coffee Table book-01.jpg",
            "/images/artworks/Coffee Table book-02.jpg",
            "/images/artworks/Coffee Table book-03.jpg",
            "/images/artworks/Coffee Table book-04.jpg",
            "/images/artworks/Coffee Table book-05.jpg",
            "/images/artworks/coffee-table-back-cover.png"
        ],
        isCarouselBook: true,
        bookFormat: "landscape",
        description: "Original artwork: Coffee Table Book (Multiple Pages)"
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
        id: "og16",
        title: "Galleria Furniture 2",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/Galleria Furniture 2.jpeg",
        description: "Original artwork: Galleria Furniture 2"
    },
    {
        id: "og23",
        title: "IPL Posters",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/KING.png",
        images: [
            "/images/artworks/KING.png",
            "/images/artworks/RCB.png",
            "/images/artworks/A4 - 2.jpg"
        ],
        description: "Original artwork: IPL Posters Gallery"
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
        id: "og27",
        title: "The park",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/The park.jpeg",
        description: "Original artwork: The park"
    },

    {
        id: "og29",
        title: "World Health Day Posters",
        category: "Artwork",
        icon: "🎨",
        image: "/images/artworks/World Health Day.jpg",
        images: [
            "/images/artworks/World Health Day.jpg",
            "/images/artworks/WHD.jpg"
        ],
        description: "Original artwork: World Health Day Collection"
    }
];

export default function GraphicsPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [hasScrolledGallery, setHasScrolledGallery] = useState(false);

    // Reset scroll indicator when project changes
    useEffect(() => {
        if (selectedProject) setHasScrolledGallery(false);
    }, [selectedProject]);

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
                                    {project.isNew && (
                                        <span className={styles.newBadge}>NEW</span>
                                    )}
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

                            <div className={styles.lightboxHeader}>
                                <h2>{selectedProject.title}</h2>
                                {selectedProject.description && <p>{selectedProject.description}</p>}
                            </div>

                            <div className={styles.lightboxBody}>
                                {selectedProject.isCarouselBook ? (
                                    <CreativeBook images={selectedProject.images} title={selectedProject.title} isComic={selectedProject.isComic} bookFormat={selectedProject.bookFormat || "square"} />
                                ) : selectedProject.images && selectedProject.images.length > 0 ? (
                                    <>
                                        <div 
                                            className={styles.lightboxGallery}
                                            onScroll={(e) => {
                                                if (e.target.scrollTop > 50 && !hasScrolledGallery) {
                                                    setHasScrolledGallery(true);
                                                }
                                            }}
                                        >
                                            {selectedProject.images.map((imgSrc, i) => (
                                                <div key={i} className={styles.lightboxGalleryItem}>
                                                    <Image
                                                        src={imgSrc}
                                                        alt={`${selectedProject.title} ${i + 1}`}
                                                        fill
                                                        unoptimized
                                                        className={styles.lightboxImage}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <AnimatePresence>
                                            {!hasScrolledGallery && selectedProject.images.length > 1 && (
                                                <motion.div 
                                                    className={styles.scrollHint}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                >
                                                    <span>Scroll for more</span>
                                                    <ChevronDown size={20} className={styles.bounceIcon} />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <div className={styles.lightboxSingleItem}>
                                        <Image
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            fill
                                            unoptimized
                                            className={styles.lightboxImage}
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ContactCTA />
        </main>
    );
}
