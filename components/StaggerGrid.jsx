'use client';
import { Children } from 'react';
export default function StaggerGrid({
  children,
  className   = 'cards-grid',
  style       = {},
  stagger     = 0.12,
  delay       = 0.1,
  itemClass   = '',
  itemStyle   = {},
}) {
  void stagger;
  void delay;
  const items = Children.toArray(children);
  const shouldWrap = Boolean(itemClass) || Object.keys(itemStyle).length > 0;

  return (
    <div className={className} style={style}>
      {items.map((child, i) => {
        if (!shouldWrap) return child;
        return (
          <div
            key={i}
            className={itemClass}
            style={itemStyle}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
