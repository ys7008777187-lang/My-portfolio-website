import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useAnimations';
import Button from '../ui/Button';
import './FinalCtaSection.css';

export default function FinalCtaSection() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="final-cta section" ref={ref} aria-labelledby="cta-title">
      {/* Decorative blobs */}
      <div className="final-cta__decoration final-cta__decoration--1" aria-hidden="true" />
      <div className="final-cta__decoration final-cta__decoration--2" aria-hidden="true" />
      <div className="final-cta__decoration final-cta__decoration--3" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="final-cta__inner"
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="final-cta__title" id="cta-title">
            Ready to bring calm to your work?
          </h2>
          <p className="final-cta__subtitle">
            Join thousands of teams who choose clarity over chaos.
          </p>

          <div className="final-cta__actions">
            <Button
              variant="primary"
              size="lg"
              id="final-cta-start-trial"
              icon={<span>→</span>}
            >
              Start your free trial
            </Button>
            <Button
              variant="secondary"
              size="lg"
              id="final-cta-book-demo"
            >
              Book a Demo
            </Button>
          </div>

          <p className="final-cta__note">No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
}
