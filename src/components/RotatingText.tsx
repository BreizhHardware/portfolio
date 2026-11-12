import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

/** Fait défiler une liste de textes avec une transition verticale. */
const RotatingText: React.FC<{ items: string[]; interval?: number; className?: string }> = ({ items, interval = 2600, className }) => {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || items.length < 2) return;
    const id = setInterval(() => setIndex(i => (i + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval, reduce]);
  return (
    <span className={`inline-block relative overflow-hidden align-bottom h-[1.5em] ${className ?? ''}`} aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={items[index]}
          className="inline-block"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
