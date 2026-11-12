import React, { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

/** Compteur animé qui démarre à l'entrée dans le viewport. */
const Counter: React.FC<{ to: number; suffix?: string }> = ({ to, suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    if (reduce) { node.textContent = `${to}${suffix}`; return; }
    const controls = animate(0, to, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: v => { node.textContent = `${Math.round(v)}${suffix}`; },
    });
    return () => controls.stop();
  }, [inView, to, suffix, reduce]);
  return <span ref={ref}>0{suffix}</span>;
};

export default Counter;
