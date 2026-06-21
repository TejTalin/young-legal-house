'use client';

import { useEffect, useRef } from 'react';

const nodes = [
  { x: 7, y: 17, icon: 1, size: 44 },
  { x: 20, y: 29, icon: 6, size: 38 },
  { x: 36, y: 18, icon: 8, size: 42 },
  { x: 52, y: 32, icon: 4, size: 46 },
  { x: 68, y: 18, icon: 3, size: 42 },
  { x: 86, y: 30, icon: 2, size: 44 },
  { x: 94, y: 15, icon: 5, size: 38 },
  { x: 12, y: 56, icon: 5, size: 42 },
  { x: 28, y: 68, icon: 7, size: 44 },
  { x: 44, y: 54, icon: 1, size: 46 },
  { x: 61, y: 70, icon: 6, size: 40 },
  { x: 78, y: 55, icon: 8, size: 45 },
  { x: 92, y: 73, icon: 4, size: 44 },
  { x: 5, y: 84, icon: 3, size: 38 },
  { x: 35, y: 90, icon: 2, size: 42 },
  { x: 70, y: 88, icon: 7, size: 40 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [1, 7], [3, 9], [5, 11],
  [7, 8], [8, 9], [9, 10], [10, 11], [11, 12],
  [7, 13], [8, 14], [10, 15],
];

export default function NetworkBackground() {
  const rootRef = useRef(null);
  const svgRef = useRef(null);
  const nodeRefs = useRef([]);
  const rafRef = useRef(null);
  const cursorRef = useRef({ x: 50, y: 50, active: false });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setCursor = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      cursorRef.current = { x, y, active: true };
      root.style.setProperty('--cursor-x', `${x}%`);
      root.style.setProperty('--cursor-y', `${y}%`);
    };

    const triggerPulse = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      root.style.setProperty('--click-x', `${x}%`);
      root.style.setProperty('--click-y', `${y}%`);
      root.classList.remove('network-clicked');
      // Reflow intentionally restarts the CSS pulse animation.
      void root.offsetWidth;
      root.classList.add('network-clicked');

      const pulse = document.createElement('span');
      pulse.className = 'network-click-pulse';
      pulse.style.left = `${event.clientX}px`;
      pulse.style.top = `${event.clientY}px`;
      root.appendChild(pulse);
      window.setTimeout(() => pulse.remove(), 900);
    };

    window.addEventListener('pointermove', setCursor, { passive: true });
    window.addEventListener('pointerdown', triggerPulse, { passive: true });

    if (!reducedMotion) {
      const phases = nodes.map((_, index) => ({
        xPhase: index * 0.73,
        yPhase: index * 0.47 + 1.4,
        xAmp: 2.2 + (index % 3) * 0.85,
        yAmp: 1.7 + (index % 4) * 0.65,
        speed: 0.00022 + (index % 5) * 0.00004,
      }));

      const offsetFor = (index, timestamp) => {
        const node = nodes[index];
        const phase = phases[index];
        const cursor = cursorRef.current;
        const distance = Math.hypot(cursor.x - node.x, cursor.y - node.y);
        const influence = cursor.active ? Math.max(0, 1 - distance / 24) : 0;
        const angle = Math.atan2(node.y - cursor.y, node.x - cursor.x);

        return {
          dx: Math.sin(timestamp * phase.speed + phase.xPhase) * phase.xAmp + Math.cos(angle) * influence * 18,
          dy: Math.cos(timestamp * phase.speed + phase.yPhase) * phase.yAmp + Math.sin(angle) * influence * 18,
          influence,
        };
      };

      const animate = (timestamp) => {
        const offsets = nodes.map((_, index) => offsetFor(index, timestamp));

        nodeRefs.current.forEach((element, index) => {
          if (!element) return;
          const { dx, dy, influence } = offsets[index];
          element.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${1 + influence * 0.18})`;
          element.style.opacity = `${0.22 + influence * 0.34}`;
          element.classList.toggle('is-near-cursor', influence > 0.45);
        });

        if (svgRef.current) {
          const lines = svgRef.current.querySelectorAll('line');
          lines.forEach((line, index) => {
            const [from, to] = connections[index];
            const fromOffset = offsets[from];
            const toOffset = offsets[to];
            const active = Math.max(fromOffset.influence, toOffset.influence);

            line.setAttribute('x1', nodes[from].x + (fromOffset.dx / window.innerWidth) * 100);
            line.setAttribute('y1', nodes[from].y + (fromOffset.dy / window.innerHeight) * 100);
            line.setAttribute('x2', nodes[to].x + (toOffset.dx / window.innerWidth) * 100);
            line.setAttribute('y2', nodes[to].y + (toOffset.dy / window.innerHeight) * 100);
            line.style.opacity = String(0.16 + active * 0.42);
            line.style.strokeWidth = String(0.085 + active * 0.06);
          });
        }

        rafRef.current = window.requestAnimationFrame(animate);
      };

      rafRef.current = window.requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('pointermove', setCursor);
      window.removeEventListener('pointerdown', triggerPulse);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={rootRef} className="community-bg ylh-interactive-network" aria-hidden="true">
      <svg ref={svgRef} className="network-lattice" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([from, to], index) => (
          <line
            key={`${from}-${to}-${index}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
          />
        ))}
      </svg>

      <div className="network-icons">
        {nodes.map((node, index) => (
          <span
            key={`${node.icon}-${index}`}
            ref={(element) => { nodeRefs.current[index] = element; }}
            className="network-icon"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              backgroundImage: `url(/network-icons/legal-icon-${node.icon}.png)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
