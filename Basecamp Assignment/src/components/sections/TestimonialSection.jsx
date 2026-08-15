import { useState, useEffect, useRef, useCallback, Fragment } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useAnimations';
import './TestimonialSection.css';

const testimonials = [
  {
    quote: 'You\'ll probably run a better team, just because of the clarity that using Basecamp brings to your workflow.',
    name: 'Melissa Park',
    role: 'Head of Operations',
    company: 'Patagonia',
    initials: 'P',
    stars: 5,
    accent: 'green',
    size: 'large',
  },
  {
    quote: 'Our pace is intense and Basecamp helps us stay organized without burning out.',
    name: 'James Kowalski',
    role: 'CTO',
    company: 'Lattice',
    initials: 'L',
    stars: 5,
    accent: 'lime',
    size: 'large',
  },
  {
    quote: 'We ditched 4 tools overnight. The simplicity is addictive — everyone got it on day one.',
    name: 'Sarah Lin',
    role: 'VP of Product',
    company: 'Shopify',
    initials: 'S',
    stars: 5,
    accent: 'default',
    size: 'small',
  },
  {
    quote: 'Basecamp brought our fully-remote team together in ways we never thought possible.',
    name: 'David Chen',
    role: 'Founder',
    company: 'Wildbit',
    initials: 'W',
    stars: 5,
    accent: 'purple',
    size: 'small',
  },
  {
    quote: 'Finally, a tool that doesn\'t try to do everything. It does the right things, perfectly.',
    name: 'Priya Rao',
    role: 'Design Director',
    company: 'Adobe',
    initials: 'A',
    stars: 4,
    accent: 'default',
    size: 'small',
  },
];

const CYCLE_INTERVAL = 4500;

const STATS = [
  { value: 25, suffix: '', label: 'Years running', icon: '🏔️' },
  { value: 100, suffix: 'K+', label: 'Teams trust us', icon: '👥' },
  { value: 76, suffix: '', label: 'Countries', icon: '🌍' },
];

/* ---- Animated Counter (Framer Motion useSpring) ---- */
function AnimatedNumber({ value, suffix = '', duration = 2.2 }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-40px' });

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (v) => {
    const rounded = Math.round(v);
    return `${rounded.toLocaleString()}${suffix}`;
  });

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  return <motion.span ref={nodeRef} className="cs__stat-value">{display}</motion.span>;
}
function StarRating({ count }) {
  return (
    <div className="cs__stars" aria-label={`${count} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`cs__star ${i <= count ? 'cs__star--filled' : ''}`}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 1.667l2.575 5.218 5.758.838-4.166 4.06.983 5.73L10 14.808l-5.15 2.705.983-5.73-4.166-4.06 5.758-.838L10 1.667z"
            fill={i <= count ? '#F59E0B' : 'rgba(255,255,255,0.15)'}
            stroke={i <= count ? '#F59E0B' : 'rgba(255,255,255,0.15)'}
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function TestimonialSection() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused || !isVisible) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(goToNext, CYCLE_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, isVisible, goToNext]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section
      className="cs section"
      id="testimonial"
      ref={ref}
      aria-labelledby="cs-title"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="cs__header"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="cs__title" id="cs-title">
            Loved by teams everywhere
          </h2>
          <p className="cs__subtitle">
            See why 100,000+ organizations trust Basecamp to keep their work calm and organized.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="cs__grid">
          {testimonials.map((t, i) => {
            const cardElement = (
              <motion.article
                key={t.name}
                className={`cs__card cs__card--${t.accent} cs__card--${t.size} ${i === activeIndex ? 'cs__card--highlighted' : ''}`}
                custom={i >= 3 ? i + 1 : i}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                onClick={() => setActiveIndex(i)}
              >
                <div className="cs__card-glow" aria-hidden="true" />

                <div className="cs__card-content">
                  <StarRating count={t.stars} />
                  <blockquote className="cs__quote">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="cs__card-footer">
                  <div className="cs__company-logo" aria-hidden="true">
                    {t.initials}
                  </div>
                  <div className="cs__author-info">
                    <div className="cs__author-name">{t.name}</div>
                    <div className="cs__author-role">{t.role}, {t.company}</div>
                  </div>
                </div>
              </motion.article>
            );

            if (i === 3) {
              return (
                <Fragment key="custom-wrapper">
                  <motion.div
                    className="cs__dash-card"
                    custom={3}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                  >
                    {/* Animated gradient mesh */}
                    <div className="cs__dash-mesh" aria-hidden="true" />

                    {/* Stats stack */}
                    <div className="cs__dash-stats">
                      {STATS.map((s) => (
                        <div className="cs__dash-stat" key={s.label}>
                          <span className="cs__dash-icon" aria-hidden="true">{s.icon}</span>
                          <div className="cs__dash-data">
                            <AnimatedNumber value={s.value} suffix={s.suffix} />
                            <span className="cs__dash-label">{s.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Micro CTA */}
                    <a href="#" className="cs__dash-cta">
                      Our story <span aria-hidden="true">→</span>
                    </a>
                  </motion.div>
                  {cardElement}
                </Fragment>
              );
            }

            return cardElement;
          })}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          className="cs__bottom-bar"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="cs__bottom-stat">
            Basecamp powers over <strong>100,000</strong> product teams. From ambitious startups to major enterprises.
          </p>
          <a href="#" className="cs__bottom-link">
            Customer stories <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
