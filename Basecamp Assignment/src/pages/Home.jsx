import { Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import HeroSection from '../components/sections/HeroSection';
import TrustSection from '../components/sections/TrustSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ProductDemoSection from '../components/sections/ProductDemoSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <ProductDemoSection />
        <TestimonialSection />
        <FinalCtaSection />
      </main>

      <Footer />
      
      <Link 
        to="/design-system"
        className="ds-toggle-btn"
        aria-label="Open Design System"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '12px 24px',
          background: 'var(--color-primary)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-full)',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 50,
          fontFamily: 'inherit',
          transition: 'transform 0.2s ease, background 0.2s ease',
          textDecoration: 'none'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.background = 'var(--color-primary-hover)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.background = 'var(--color-primary)';
        }}
      >
        🎨 View Design System
      </Link>
    </>
  );
}
