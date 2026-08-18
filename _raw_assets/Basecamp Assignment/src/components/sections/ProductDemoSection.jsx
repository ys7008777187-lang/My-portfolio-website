import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useAnimations';
import videoThumbnail from '../../assets/video-thumbnail.png';
import './ProductDemoSection.css';

const phases = [
  {
    id: 'plan',
    label: '📋 Planning',
    cards: [
      {
        title: 'Q3 Product Roadmap',
        badge: 'On track',
        badgeClass: 'green',
        tasks: [
          { text: 'Define feature scope', done: true },
          { text: 'Assign team leads', done: true },
          { text: 'Set milestones', done: false },
          { text: 'Stakeholder review', done: false },
        ],
      },
      {
        title: 'Marketing Launch',
        badge: 'In progress',
        badgeClass: 'amber',
        tasks: [
          { text: 'Draft campaign brief', done: true },
          { text: 'Design landing page', done: true },
          { text: 'Write email sequences', done: false },
          { text: 'Social media assets', done: false },
        ],
      },
      {
        title: 'Research & Discovery',
        badge: 'New',
        badgeClass: 'blue',
        tasks: [
          { text: 'User interviews (5)', done: true },
          { text: 'Competitive analysis', done: false },
          { text: 'Synthesize findings', done: false },
        ],
      },
    ],
  },
  {
    id: 'collaborate',
    label: '💬 Collaboration',
    cards: [
      {
        title: 'Design System v2',
        badge: 'Active',
        badgeClass: 'green',
        tasks: [
          { text: 'Color token updates', done: true },
          { text: 'Component audit', done: true },
          { text: 'Documentation', done: false },
        ],
      },
      {
        title: 'Sprint Retrospective',
        badge: 'Discussion',
        badgeClass: 'amber',
        tasks: [
          { text: 'What went well?', done: true },
          { text: 'Areas for improvement', done: true },
          { text: 'Action items', done: false },
        ],
      },
      {
        title: 'API Integration',
        badge: 'Review',
        badgeClass: 'blue',
        tasks: [
          { text: 'Endpoint design', done: true },
          { text: 'Authentication flow', done: true },
          { text: 'Error handling', done: true },
          { text: 'Load testing', done: false },
        ],
      },
    ],
    comment: {
      avatar: 'SK',
      name: 'Sarah Kim',
      text: 'Just reviewed the design tokens — the new spacing scale looks great. I\'ve left a few suggestions on the border-radius values.',
      time: '2 hours ago',
    },
  },
  {
    id: 'deliver',
    label: '🚀 Delivery',
    cards: [
      {
        title: 'Product Launch v5',
        badge: 'On track',
        badgeClass: 'green',
        tasks: [
          { text: 'Feature freeze', done: true },
          { text: 'QA sign-off', done: true },
          { text: 'Deploy staging', done: true },
          { text: 'Production release', done: false },
        ],
      },
      {
        title: 'Customer Onboarding',
        badge: 'Ready',
        badgeClass: 'green',
        tasks: [
          { text: 'Welcome email flow', done: true },
          { text: 'Tutorial videos', done: true },
          { text: 'Help docs updated', done: true },
        ],
      },
      {
        title: 'Analytics Dashboard',
        badge: 'In progress',
        badgeClass: 'amber',
        tasks: [
          { text: 'Event tracking', done: true },
          { text: 'Conversion funnels', done: false },
          { text: 'Weekly reports', done: false },
        ],
      },
    ],
  },
];

const cardMotionVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.97,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

const commentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

export default function ProductDemoSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState('walkthrough'); // 'walkthrough' or 'chase'
  const videoRef = useRef(null);
  const currentPhase = phases[activePhase];

  const videoConfig = {
    walkthrough: {
      src: "https://basecamp.com/videos/5/walkthrough.mp4",
      poster: videoThumbnail,
      duration: "3 min"
    },
    chase: {
      src: "https://basecamp.com/videos/meet/chase.mp4",
      poster: "https://basecamp.com/videos/meet/chase.webp",
      duration: "2 min"
    }
  };

  // Auto-advance phases when visible
  useEffect(() => {
    if (!isVisible || isVideoPlaying) return;

    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, isVideoPlaying]);

  const handlePlayVideo = (videoKey = 'walkthrough') => {
    setActiveVideo(videoKey);
    setIsVideoPlaying(true);
    // Give the video element time to mount/update source then play
    setTimeout(() => {
      if (videoRef.current) {
        // If the source changed, we might need to load it
        videoRef.current.load();
        videoRef.current.play().catch(() => {});
        
        // Scroll to the video player for better visibility, especially on mobile
        const videoSection = document.getElementById('video-walkthrough');
        if (videoSection) {
          videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, 150);
  };

  return (
    <section
      className="product-demo section"
      id="product-demo"
      ref={ref}
      aria-labelledby="demo-title"
    >
      <div className="container">
        <motion.div
          className="product-demo__header"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="product-demo__title" id="demo-title">
            See how it all comes together
          </h2>
          <p className="product-demo__subtitle">
            From planning to delivery, Basecamp keeps your projects moving
            without the chaos of switching tools.
          </p>
        </motion.div>

        {/* Phase Tabs */}
        <motion.div
          className="product-demo__phases"
          role="tablist"
          aria-label="Product demo phases"
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {phases.map((phase, i) => (
            <button
              key={phase.id}
              role="tab"
              aria-selected={i === activePhase}
              aria-controls={`demo-panel-${phase.id}`}
              id={`demo-tab-${phase.id}`}
              className={`product-demo__phase-btn ${
                i === activePhase ? 'product-demo__phase-btn--active' : ''
              }`}
              onClick={() => setActivePhase(i)}
            >
              {phase.label}
            </button>
          ))}
        </motion.div>

        {/* Showcase */}
        <motion.div
          className="product-demo__showcase"
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="product-demo__screen">
            <div className="product-demo__screen-header">
              <span className="product-demo__screen-dot product-demo__screen-dot--red" />
              <span className="product-demo__screen-dot product-demo__screen-dot--yellow" />
              <span className="product-demo__screen-dot product-demo__screen-dot--green" />
              <span className="product-demo__screen-url">basecamp.com/acme-co</span>
            </div>

            <div
              className="product-demo__screen-body"
              role="tabpanel"
              id={`demo-panel-${currentPhase.id}`}
              aria-labelledby={`demo-tab-${currentPhase.id}`}
            >
              <AnimatePresence mode="wait">
                <motion.div key={currentPhase.id} className="product-demo__phase-content">
                  <div className="product-demo__cards">
                    {currentPhase.cards.map((card, i) => (
                      <motion.div
                        className="product-demo__card"
                        key={card.title}
                        custom={i}
                        variants={cardMotionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <div className="product-demo__card-header">
                          <span className="product-demo__card-title">{card.title}</span>
                          <span
                            className={`product-demo__card-badge product-demo__card-badge--${card.badgeClass}`}
                          >
                            {card.badge}
                          </span>
                        </div>
                        <div className="product-demo__card-body">
                          {card.tasks.map((task) => (
                            <div className="product-demo__card-row" key={task.text}>
                              <span
                                className={`product-demo__card-check ${
                                  task.done ? 'product-demo__card-check--done' : ''
                                }`}
                              >
                                {task.done && (
                                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path
                                      d="M2 5l2 2 4-4"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
                              </span>
                              <span
                                style={{
                                  textDecoration: task.done ? 'line-through' : 'none',
                                  opacity: task.done ? 0.5 : 1,
                                }}
                              >
                                {task.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Comment bubble */}
                  {currentPhase.comment && (
                    <motion.div
                      className="product-demo__comment"
                      variants={commentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="product-demo__comment-avatar">
                        {currentPhase.comment.avatar}
                      </div>
                      <div className="product-demo__comment-content">
                        <div className="product-demo__comment-name">
                          {currentPhase.comment.name}
                        </div>
                        <div className="product-demo__comment-text">
                          {currentPhase.comment.text}
                        </div>
                        <div className="product-demo__comment-time">
                          {currentPhase.comment.time}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>


        {/* ═══════════════════════════════════════════════
            Bridge / Transition — natural visual pause
            between demo showcase and video walkthrough
            ═══════════════════════════════════════════════ */}
        <motion.div
          className="product-demo__bridge"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="product-demo__bridge-line" aria-hidden="true" />
          <div className="product-demo__bridge-content">
            <div className="product-demo__bridge-stat">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 1l2.39 4.84L17.82 6.5 13.91 10.3l.92 5.36L10 13l-4.83 2.66.92-5.36L2.18 6.5l5.43-.66L10 1z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1" strokeLinejoin="round"/>
              </svg>
              <span>Rated 4.9/5 by 2,400+ teams</span>
            </div>
            <span className="product-demo__bridge-dot" aria-hidden="true">·</span>
            <div className="product-demo__bridge-stat">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8l3 3 7-7" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Setup takes less than 2 minutes</span>
            </div>
            <span className="product-demo__bridge-dot" aria-hidden="true">·</span>
            <div className="product-demo__bridge-stat">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6" stroke="#7C3AED" strokeWidth="1.5"/>
                <path d="M6 8l1.5 1.5L10.5 6" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>No credit card required</span>
            </div>
          </div>
          <div className="product-demo__bridge-line" aria-hidden="true" />
        </motion.div>

        {/* ═══════════════════════════════════════════════
            Redesigned Video Walkthrough Section
            Inspired by Notion + Asana, with premium dark split layout
            ═══════════════════════════════════════════════ */}
        <div className="video-walk" id="video-walkthrough">
          <motion.div
            className="video-walk__inner"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Left: Copy + Highlights */}
            <div className="video-walk__copy">
              <span className="video-walk__eyebrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Product Tour
              </span>

              <h3 className="video-walk__title">
                See Basecamp in action
              </h3>
              <p className="video-walk__subtitle">
                Watch how teams plan projects, collaborate in real-time, and ship work — all from one calm, organized place.
              </p>

              {/* Benefit highlights */}
              <ul className="video-walk__highlights">
                <motion.li
                  className="video-walk__highlight"
                  initial={{ opacity: 0, x: -16 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="video-walk__highlight-icon video-walk__highlight-icon--green">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Project setup in seconds</strong>
                    <span>From idea to organized project in under 60 seconds</span>
                  </div>
                </motion.li>

                <motion.li
                  className="video-walk__highlight"
                  initial={{ opacity: 0, x: -16 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  <div className="video-walk__highlight-icon video-walk__highlight-icon--purple">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8zM7 8V6a2 2 0 012-2h8a2 2 0 012 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Real-time collaboration</strong>
                    <span>Messages, files, and check-ins — all in one thread</span>
                  </div>
                </motion.li>

                <motion.li
                  className="video-walk__highlight"
                  initial={{ opacity: 0, x: -16 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="video-walk__highlight-icon video-walk__highlight-icon--amber">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Ship with confidence</strong>
                    <span>Hill Charts show progress without chasing status updates</span>
                  </div>
                </motion.li>
              </ul>

              <motion.div
                className="video-walk__cta-row"
                initial={{ opacity: 0, y: 12 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.95 }}
              >
                <a href="#pricing" className="video-walk__cta-btn">
                  Start your free trial
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <span className="video-walk__cta-note">No credit card required</span>
              </motion.div>
            </div>

            {/* Right: Video Player */}
            <motion.div
              className="video-walk__player-wrap"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Background glow */}
              <div className="video-walk__glow" aria-hidden="true" />

              <div className="video-walk__player-card">
                {/* Duration badge */}
                {!isVideoPlaying && (
                  <div className="video-walk__duration" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {videoConfig[activeVideo].duration}
                  </div>
                )}

                {!isVideoPlaying ? (
                  <button
                    className="video-walk__trigger"
                    onClick={() => handlePlayVideo('walkthrough')}
                    aria-label={`Play Basecamp ${activeVideo} video`}
                  >
                    <img
                      src={videoConfig[activeVideo].poster}
                      alt={`Basecamp ${activeVideo} video thumbnail`}
                      className="video-walk__poster"
                      loading="lazy"
                    />

                    {/* Animated play button */}
                    <div className="video-walk__play-btn">
                      <div className="video-walk__play-ring" aria-hidden="true" />
                      <div className="video-walk__play-ring video-walk__play-ring--delayed" aria-hidden="true" />
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <circle cx="28" cy="28" r="28" fill="rgba(22, 163, 74, 0.92)" />
                        <path d="M22 17.5l16 10.5-16 10.5V17.5z" fill="white" />
                      </svg>
                    </div>

                    {/* Bottom gradient overlay with CTA text */}
                    <div className="video-walk__poster-overlay">
                      <span className="video-walk__poster-cta">Watch the walkthrough</span>
                    </div>
                  </button>
                ) : (
                  <video
                    ref={videoRef}
                    className="video-walk__video"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src={videoConfig[activeVideo].src}
                      type="video/mp4"
                    />
                    {activeVideo === 'walkthrough' && (
                      <track
                        kind="captions"
                        src="https://basecamp.com/videos/5/walkthrough.vtt"
                        srcLang="en"
                        label="English"
                        default
                      />
                    )}
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Resource Action Cards — Asana-inspired */}
          <motion.div
            className="video-walk__resources"
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Walkthrough Video Card */}
            <button 
              className="video-walk__resource-card video-walk__resource-card--video"
              onClick={() => handlePlayVideo('walkthrough')}
            >
              <div className="video-walk__mini-video-wrapper">
                <img
                  src={videoThumbnail}
                  alt="Walkthrough"
                  className="video-walk__mini-video"
                  loading="lazy"
                />
                <div className="video-walk__mini-play">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="video-walk__mini-video-text">
                <strong>Walkthrough</strong>
                <span>See it in action</span>
              </div>
              <div className="video-walk__resource-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

            {/* Meet Chase Video Card */}
            <button 
              className="video-walk__resource-card video-walk__resource-card--video"
              onClick={() => handlePlayVideo('chase')}
            >
              <div className="video-walk__mini-video-wrapper">
                <video
                  className="video-walk__mini-video"
                  preload="none"
                  poster="https://basecamp.com/videos/meet/chase.webp"
                  playsInline
                >
                  <source src="https://basecamp.com/videos/meet/chase.mp4" type="video/mp4" />
                </video>
                <div className="video-walk__mini-play">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="video-walk__mini-video-text">
                <strong>Meet Chase</strong>
                <span>Head of Support</span>
              </div>
              <div className="video-walk__resource-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

            <a href="#" className="video-walk__resource-card">
              <div className="video-walk__resource-text">
                <strong>Start with a template</strong>
                <span>Get started faster with ready-made setups</span>
              </div>
              <div className="video-walk__resource-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
