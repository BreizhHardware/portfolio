import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/** Barre de progression de lecture en haut de page. */
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
