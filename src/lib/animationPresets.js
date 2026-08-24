/**
 * Standardized Comic Motion Design System Presets
 * Ensures consistent timing, physics, and easing across all portfolio text animations.
 */

// Snappy, punchy comic ease-out curve (fast initial burst with smooth comic deceleration)
export const COMIC_EASE = [0.22, 1, 0.36, 1];

// Snappy comic bounce for badges, pills, and bursts
export const COMIC_SPRING = {
  type: "spring",
  stiffness: 350,
  damping: 24,
  mass: 0.8
};

// Gentle spring for modals, popups, and large panels
export const COMIC_SPRING_SOFT = {
  type: "spring",
  stiffness: 260,
  damping: 22
};

export const textVariants = {
  // 1. Page & Section Header Entrance
  headerEntrance: {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: COMIC_EASE
      }
    }
  },

  // 2. Staggered Container (For hero, title lines, or feature lists)
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.12
      }
    }
  },

  // 3. Stagger Child Item (Fade-up)
  staggerItem: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: COMIC_EASE
      }
    }
  },

  // 4. Interactive Step Content Switch (Cross-fade between flow steps / project tabs)
  stepContentSwitch: {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.22,
        ease: COMIC_EASE
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 1, 1]
      }
    }
  },

  // 5. Comic Burst / Badge Pop-in
  burstPop: {
    hidden: { opacity: 0, scale: 0.6, rotate: -6 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: COMIC_SPRING
    }
  },

  // 6. Issue Banner / Comic Pill Reveal
  issueBannerReveal: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: COMIC_EASE
      }
    }
  }
};
