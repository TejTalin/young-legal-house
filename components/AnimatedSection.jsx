'use client';
import { createElement } from 'react';

export default function AnimatedSection({
  children,
  variant   = 'fadeUp',
  delay     = 0,
  className = '',
  style     = {},
  as        = 'div',
}) {
  void variant;
  void delay;
  return createElement(as, { className, style }, children);
}
