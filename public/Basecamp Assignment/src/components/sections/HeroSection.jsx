import { motion } from 'framer-motion';
import Button from '../ui/Button';
import heroImage from '../../assets/basecamp-dashboard.webp';
import './HeroSection.css';

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M5.333 3.333l7.334 4.667-7.334 4.667V3.333z" fill="currentColor" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const tabVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
  },
};

const floatVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1 },
  },
};

export default function HeroSection() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="container hero__container">
        {/* Left Content */}
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#"
            className="hero__announcement"
            variants={itemVariants}
            aria-label="Basecamp 5 is here. See what's new."
          >
            <span className="hero__announcement-badge">NEW</span>
            Basecamp 5 is here! See what's new
            <span className="hero__announcement-arrow" aria-hidden="true">→</span>
          </motion.a>

          <motion.h1 className="hero__title" id="hero-title" variants={itemVariants}>
            Work stays organized <em>without</em> the chaos.
          </motion.h1>

          <motion.p className="hero__subtitle" variants={itemVariants}>
            Basecamp brings projects, people, and communication together in one place so
            your team can focus on what matters.
          </motion.p>

          <motion.div className="hero__ctas" variants={itemVariants}>
            <Button
              variant="primary"
              size="lg"
              id="hero-cta-start-trial"
              icon={<span>→</span>}
            >
              Start free trial
            </Button>
            <Button
              variant="secondary"
              size="lg"
              id="hero-cta-demo"
              icon={<PlayIcon />}
              iconPosition="left"
            >
              See how it works
            </Button>
          </motion.div>

          <motion.div className="hero__meta" variants={itemVariants}>
            <span className="hero__meta-item">
              <span className="hero__meta-icon" aria-hidden="true"><CheckIcon /></span>
              Free 30-day trial
            </span>
            <span className="hero__meta-item">
              <span className="hero__meta-icon" aria-hidden="true"><CheckIcon /></span>
              No credit card required
            </span>
            <span className="hero__meta-item">
              <span className="hero__meta-icon" aria-hidden="true"><CheckIcon /></span>
              Cancel anytime
            </span>
          </motion.div>
        </motion.div>

        {/* Right — Product Image in Tab Frame */}
        <div className="hero__visual">
          {/* Static floating decorative elements */}
          <motion.div
            className="hero__float hero__float--pill-top"
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            <span className="hero__float-dot hero__float-dot--green" />
            Everything in one place
          </motion.div>

          <motion.div
            className="hero__float hero__float--badge-right"
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Organized
          </motion.div>

          <motion.div
            className="hero__float hero__float--stat-left"
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            <span className="hero__float-number">100k+</span>
            <span className="hero__float-label">teams</span>
          </motion.div>

          <motion.div
            className="hero__float hero__float--circle-1"
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          />

          <motion.div
            className="hero__float hero__float--circle-2"
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          />

          <motion.div
            className="hero__float hero__float--dots"
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            <span /><span /><span />
            <span /><span /><span />
            <span /><span /><span />
          </motion.div>

          {/* Tab / Browser Frame */}
          <motion.div
            className="hero__tab"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero__tab-header">
              <span className="hero__tab-dot hero__tab-dot--red" />
              <span className="hero__tab-dot hero__tab-dot--yellow" />
              <span className="hero__tab-dot hero__tab-dot--green" />
              <span className="hero__tab-url">basecamp.com</span>
            </div>
            <div className="hero__tab-body">
              <img
                src={heroImage}
                alt="Basecamp product dashboard showing project management features"
                className="hero__tab-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
