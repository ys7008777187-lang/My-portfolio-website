"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, X, ChevronDown } from "lucide-react";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import CreativeBook from "../../../components/ui/CreativeBook/CreativeBook";
import { getAssetUrl } from "../../../lib/assetUrl";
import styles from "./page.module.css";

const graphicsProjects = [
    {
        id: "political-posts",
        title: "Political Posts",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/political-posts/GANDHI FAMILY.png",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/political-posts/1.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/political-posts/2.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/political-posts/3.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/political-posts/4.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/political-posts/5.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/political-posts/GANDHI FAMILY.png"
        ],
        isNew: true,
        tagline: "VISUAL PROPAGANDA, REDESIGNED!",
        description: "Political Posts & Campaign Creatives"
    },
    {
        id: "the-nexus-point-issue-3",
        title: "The Nexus Point: Issue 3",
        category: "Chitranga",
        icon: "📖",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/0.png",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/0.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/1.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/2.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/3.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/4.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/5.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/6.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/7.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/8.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/9.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/10.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/11.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/12.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/13.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/14.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/15.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/16.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/17.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/18.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/19.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/20.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/21.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/22.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-3/23.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/Back Cover (2).png"
        ],
        isCarouselBook: true,
        isComic: true,
        isNew: true,
        hidePageInfo: true,
        tagline: "THE SAGA CONTINUES!",
        description: "Issue 3 of The Nexus Point Chitranga"
    },
    {
        id: "the-nexus-point-issue-2",
        title: "The Nexus Point: Issue 2",
        category: "Chitranga",
        icon: "📖",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/Cover.png",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/Cover.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/1.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/2.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/3.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/4.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/5.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/6.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/7.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/8.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/9.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/10.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/11.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/12.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/13.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/14.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/15.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/16.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/17.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/18.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/19.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/20.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point-issue-2/Back Cover (2).png"
        ],
        isCarouselBook: true,
        isComic: true,
        tagline: "THE PLOT THICKENS!",
        description: "Issue 2 of The Nexus Point Chitranga"
    },
    {
        id: "the-nexus-point-book",
        title: "The Nexus Point: Issue 1",
        category: "Chitranga",
        icon: "📖",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/0.png",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/0.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/1.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/2.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/3.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/4.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/6.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/7.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/8.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/9.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/10.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/11.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/12.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/13.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/14.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/15.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/16.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/17.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/18.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/19.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/20.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/21.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/23.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/24.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/25.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/26.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/28.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/29.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/30.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/31.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/32.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/33.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/34.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/the-nexus-point/Back Cover (2).png"
        ],
        isCarouselBook: true,
        isComic: true,
        tagline: "WHERE IT ALL BEGAN!",
        description: "An interactive Chitranga / comic presentation"
    },
    {
        id: "fifth-layer-book",
        title: "Fifth Layer Foundation",
        category: "Visual Storytelling",
        icon: "📖",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fifth-layer/frame 1.png",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fifth-layer/frame 1.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fifth-layer/frame 2.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fifth-layer/frame 3.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fifth-layer/frame 4.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fifth-layer/frame 5.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fifth-layer/frame 6.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fifth-layer/frame 7.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fifth-layer/frame 8.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fifth-layer/frame 9.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fifth-layer/frame 10.png"
        ],
        isCarouselBook: true,
        tagline: "STORIES THAT INSPIRE!",
        description: "An interactive editorial story book presentation"
    },
    {
        id: "comic-magazine-book",
        title: "Comic Magazine",
        category: "Visual Storytelling",
        icon: "📖",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/cover.png",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/cover.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 1.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 2.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 3.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 4.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 5.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 6.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 7.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 8.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 9.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 10.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/page 11.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/page 12.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 13.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/Page 14.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/page15.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/comic-magazine/back-cover.png"
        ],
        isCarouselBook: true,
        tagline: "PAGE AFTER PAGE OF FUN!",
        description: "An interactive comic book presentation"
    },
    {
        id: "fashion-campaign",
        title: "Fashion",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fashion-1.jpg",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fashion-1.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/fashion-2.jpg"
        ],
        tagline: "STYLE MEETS DESIGN!",
        description: "Fashion Promotional Campaign Graphics"
    },
    {
        id: "og0",
        title: "White Lotus",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Frame 18.jpg",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Hoarding.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Frame 18.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Hoarding 2.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Whatsapp.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Performance AD.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Instagram 1.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Instagram 2.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Instagram 3.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Instagram 4.jpg"
        ],
        tagline: "BLOOMING CREATIVITY!",
        description: "Original artwork: White Lotus Gallery"
    },
    {
        id: "og1",
        title: "Packaging Design",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/10154603.jpg",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/10154603.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/9938169.jpg"
        ],
        tagline: "WRAP IT RIGHT!",
        description: "Original artwork: Packaging Design Gallery"
    },
    {
        id: "og2",
        title: "Branding",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/10818.jpg",
        tagline: "IDENTITY CRAFTED!",
        description: "Original artwork: Branding"
    },
    {
        id: "og5",
        title: "Aaduri",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Aaduri.jpg",
        tagline: "ELEGANCE IN DETAIL!",
        description: "Original artwork: Aaduri"
    },
    {
        id: "og6",
        title: "Artwork",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Artwork.jpg",
        tagline: "PURE EXPRESSION!",
        description: "Original artwork: Artwork"
    },
    {
        id: "og7",
        title: "Baisakhi Posters",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Baisakhi Creatives.jpg",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Baisakhi Creatives.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Baishaki poster.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Baishaki Postet.jpg"
        ],
        tagline: "FESTIVE VIBES!",
        description: "Original artwork: Baisakhi Posters Collection"
    },
    {
        id: "og10",
        title: "Coffee Table Book",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Coffee Table book-01.jpg",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Coffee Table book-01.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Coffee Table book-02.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Coffee Table book-03.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Coffee Table book-04.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Coffee Table book-05.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/coffee-table-back-cover.png"
        ],
        isCarouselBook: true,
        bookFormat: "landscape",
        tagline: "READ IN STYLE!",
        description: "Original artwork: Coffee Table Book (Multiple Pages)"
    },
    {
        id: "og18",
        title: "Hoarding",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Hoarding.jpg",
        tagline: "LARGER THAN LIFE!",
        description: "Original artwork: Hoarding"
    },
    {
        id: "og16",
        title: "Galleria Furniture 2",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Galleria Furniture 2.jpeg",
        tagline: "DESIGNED TO IMPRESS!",
        description: "Original artwork: Galleria Furniture 2"
    },
    {
        id: "og23",
        title: "IPL Posters",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/KING.png",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/KING.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/RCB.png",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/A4 - 2.jpg"
        ],
        tagline: "GAME ON!",
        description: "Original artwork: IPL Posters Gallery"
    },
    {
        id: "og24",
        title: "Naga Creatives",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/Naga Creatives (1005 x 1920).png",
        tagline: "CULTURAL FIRE!",
        description: "Original artwork: Naga Creatives"
    },
    {
        id: "og27",
        title: "The Park",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/The park.jpeg",
        tagline: "NATURE CAPTURED!",
        description: "Original artwork: The Park"
    },
    {
        id: "og29",
        title: "World Health Day",
        category: "Artwork",
        icon: "🎨",
        image: "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/World Health Day.jpg",
        images: [
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/World Health Day.jpg",
            "https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev/public/images/artworks/WHD.jpg"
        ],
        tagline: "HEALTH IS WEALTH!",
        description: "Original artwork: World Health Day Collection"
    }
];

/* ── Accent colors cycle ── */
const panelColors = [
    "#FFB86C", "#6C8CFF", "#FF6B9D", "#00E5A8",
    "#8BE9FD", "#BD93F9", "#F1FA8C", "#FF79C6",
    "#50FA7B", "#FF5555", "#6C8CFF", "#FFB86C",
    "#00E5A8", "#BD93F9", "#FF6B9D", "#8BE9FD",
    "#F1FA8C", "#FF79C6", "#50FA7B", "#FF5555",
];

/* ── Animations ── */
const panelVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.06,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function GraphicsPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [hasScrolledGallery, setHasScrolledGallery] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");

    useEffect(() => {
        if (selectedProject) setHasScrolledGallery(false);
    }, [selectedProject]);

    const categories = ["all", "Chitranga", "Visual Storytelling", "Artwork"];
    const filteredProjects = activeFilter === "all"
        ? graphicsProjects
        : graphicsProjects.filter(p => p.category === activeFilter);

    return (
        <main className={styles.main}>
            {/* ═══ COMIC TOP STRIP ═══ */}
            <div className={styles.topStrip}>
                <span className={styles.stripLeft}>MEANWHILE, IN THE DESIGN MULTIVERSE...</span>
                <span className={styles.stripCenter}>
                    A COLLECTION OF <strong>CREATIVE ADVENTURES</strong>
                </span>
            </div>

            <div className={styles.container}>
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={18} />
                        <span>Back to Work</span>
                    </Link>
                </motion.div>

                {/* ═══ COMIC HERO HEADER ═══ */}
                <motion.div
                    className={styles.comicHeader}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                >
                    <div className={styles.headerLeft}>
                        <span className={styles.headerLabel}>VISUAL CREATIONS</span>
                        <h1 className={styles.comicTitle}>
                            GRAPHICS <span className={styles.ampersand}>&</span> ARTWORK
                        </h1>
                        <p className={styles.comicSubtitle}>
                            Logos, branding, illustrations, comics, and artistic compositions — each piece crafted with passion and precision.
                        </p>
                    </div>
                    <div className={styles.headerRight}>
                        <div className={styles.speechBubble}>
                            <span>EVERY PIXEL TELLS A STORY!</span>
                        </div>
                    </div>
                </motion.div>

                {/* ═══ FILTER TABS ═══ */}
                <motion.div
                    className={styles.filterBar}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ""}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat === "all" ? "All Works" : cat}
                        </button>
                    ))}
                </motion.div>

                {/* ═══ COMIC PANEL GRID ═══ */}
                <motion.div
                    className={styles.panelGrid}
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => {
                            const color = panelColors[index % panelColors.length];
                            return (
                                <motion.article
                                    key={project.id}
                                    className={styles.panel}
                                    style={{ "--panel-color": color }}
                                    custom={index}
                                    variants={panelVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                                    layout
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Issue badge */}
                                    <div className={styles.issueBadge} style={{ backgroundColor: color }}>
                                        <span className={styles.issueLabel}>ISSUE</span>
                                        <span className={styles.issueNum}>#{String(index + 1).padStart(2, "0")}</span>
                                    </div>

                                    {/* Tagline bubble */}
                                    {project.tagline && (
                                        <div className={styles.taglineBubble}>
                                            <span>{project.tagline}</span>
                                        </div>
                                    )}

                                    {/* NEW badge */}
                                    {project.isNew && (
                                        <span className={styles.newBadge}>NEW</span>
                                    )}

                                    {/* Image */}
                                    <div className={styles.panelImageWrap}>
                                        <Image
                                            src={getAssetUrl(project.image)}
                                            alt={project.title}
                                            fill
                                            unoptimized
                                            style={{ objectFit: "cover" }}
                                            className={styles.panelImage}
                                        />
                                        <div className={styles.panelOverlay} />

                                        {/* Hover view button */}
                                        <motion.div
                                            className={styles.viewBtn}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <ArrowUpRight size={22} />
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className={styles.panelContent}>
                                        <h3 className={styles.panelTitle}>{project.title}</h3>
                                        <span className={styles.panelCategory} style={{ color }}>
                                            {project.category}
                                        </span>
                                        <p className={styles.panelDesc}>{project.description}</p>
                                    </div>

                                    {/* Bottom speed-line accent */}
                                    <div className={styles.panelAccentBar} style={{ background: color }} />
                                </motion.article>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* ═══ BOTTOM QUOTE ═══ */}
                <div className={styles.bottomQuote}>
                    <span>DESIGN IS NOT JUST WHAT IT LOOKS LIKE...</span>
                    <strong>IT&apos;S HOW IT WORKS!</strong>
                </div>
            </div>

            {/* ═══ LIGHTBOX ═══ */}
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
                            transition={{ type: "spring", damping: 22, stiffness: 350 }}
                        >
                            <button className={styles.lightboxClose} onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>

                            {!selectedProject.hidePageInfo && (
                                <div className={styles.lightboxHeader}>
                                    <h2>{selectedProject.title}</h2>
                                    {selectedProject.description && <p>{selectedProject.description}</p>}
                                </div>
                            )}

                            <div className={styles.lightboxBody}>
                                {selectedProject.isCarouselBook ? (
                                    <CreativeBook
                                        images={selectedProject.images}
                                        title={selectedProject.title}
                                        isComic={selectedProject.isComic}
                                        bookFormat={selectedProject.bookFormat || "square"}
                                        hidePageInfo={selectedProject.hidePageInfo}
                                    />
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
                                                        src={getAssetUrl(imgSrc)}
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
                                            src={getAssetUrl(selectedProject.image)}
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
