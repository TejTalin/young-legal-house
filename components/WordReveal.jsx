'use client';
import { motion } from 'framer-motion';
import { wordRevealContainer, wordRevealItem, VIEW } from '@/lib/motion';

/**
 * WordReveal
 * Splits a heading into words and reveals them one-by-one on scroll.
 *
 * Props:
 *   text      — the string to animate
 *   as        — HTML tag: 'h1' | 'h2' | 'h3' | 'p' (default: 'h1')
 *   className — forwarded to the wrapper element
 *   style     — forwarded to the wrapper element
 *   stagger   — seconds between each word (default: 0.07)
 */
export default function WordReveal({
  text,
  as        = 'h1',
  className = '',
  style     = {},
  stagger   = 0.07,
}) {
  const words = text.split(' ');
  const container = {
    hidden:  {},
    visible: { transition: { staggerChildren: stagger, delayChildren: 0.1 } },
  };

  const Tag = motion[as] ?? motion.h1;

  return (
    <Tag
      className={className}
      style={{ ...style, display: 'flex', flexWrap: 'wrap', gap: '0.25em', justifyContent: style.textAlign === 'center' ? 'center' : undefined }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={VIEW}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordRevealItem}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

