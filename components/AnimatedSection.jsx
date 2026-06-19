'use client';
import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, scaleUp, VIEW } from '@/lib/motion';

const VARIANTS = { fadeUp, slideLeft, slideRight, scaleUp };

/**
 * AnimatedSection
 * A generic scroll-triggered reveal wrapper.
 * 
 * Props:
 *   variant   — 'fadeUp' | 'slideLeft' | 'slideRight' | 'scaleUp'  (default: 'fadeUp')
 *   delay     — extra delay in seconds (default: 0)
 *   className — forwarded to the motion.div
 *   style     — forwarded to the motion.div
 *   as        — HTML tag to render as (default: 'div')
 */
export default function AnimatedSection({
  children,
  variant   = 'fadeUp',
  delay     = 0,
  className = '',
  style     = {},
  as        = 'div',
}) {
  const base     = VARIANTS[variant] ?? fadeUp;
  const variants = {
    hidden:  base.hidden,
    visible: {
      ...base.visible,
      transition: {
        ...base.visible.transition,
        delay,
      },
    },
  };

  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEW}
    >
      {children}
    </Tag>
  );
}

