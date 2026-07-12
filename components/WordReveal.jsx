'use client';
import { createElement } from 'react';

export default function WordReveal({
  text,
  as        = 'h1',
  className = '',
  style     = {},
  stagger   = 0.07,
}) {
  void stagger;
  return createElement(as, { className, style }, text);
}
