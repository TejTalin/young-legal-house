'use client';

import { useEffect, useRef } from 'react';

const nodeRows = [
  [
    { x: 8, y: 12, icon: 'scale', size: 25 },
    { x: 22, y: 12, icon: 'document', size: 24 },
    { x: 36, y: 12, icon: 'gavel', size: 25 },
    { x: 50, y: 12, icon: 'court', size: 27 },
    { x: 64, y: 12, icon: 'briefcase', size: 25 },
    { x: 78, y: 12, icon: 'handshake', size: 26 },
    { x: 92, y: 12, icon: 'lawyer', size: 25 },
  ],
  [
    { x: 8, y: 31, icon: 'court', size: 26 },
    { x: 22, y: 31, icon: 'briefcase', size: 24 },
    { x: 36, y: 31, icon: 'scale', size: 26 },
    { x: 50, y: 31, icon: 'news', size: 24 },
    { x: 64, y: 31, icon: 'document', size: 25 },
    { x: 78, y: 31, icon: 'gavel', size: 25 },
    { x: 92, y: 31, icon: 'handshake', size: 26 },
  ],
  [
    { x: 8, y: 50, icon: 'document', size: 24 },
    { x: 22, y: 50, icon: 'lawyer', size: 25 },
    { x: 36, y: 50, icon: 'handshake', size: 26 },
    { x: 50, y: 50, icon: 'gavel', size: 25 },
    { x: 64, y: 50, icon: 'court', size: 27 },
    { x: 78, y: 50, icon: 'briefcase', size: 25 },
    { x: 92, y: 50, icon: 'scale', size: 26 },
  ],
  [
    { x: 8, y: 69, icon: 'news', size: 24 },
    { x: 22, y: 69, icon: 'scale', size: 26 },
    { x: 36, y: 69, icon: 'document', size: 24 },
    { x: 50, y: 69, icon: 'lawyer', size: 25 },
    { x: 64, y: 69, icon: 'court', size: 27 },
    { x: 78, y: 69, icon: 'briefcase', size: 25 },
    { x: 92, y: 69, icon: 'gavel', size: 25 },
  ],
  [
    { x: 8, y: 88, icon: 'handshake', size: 26 },
    { x: 22, y: 88, icon: 'news', size: 24 },
    { x: 36, y: 88, icon: 'court', size: 27 },
    { x: 50, y: 88, icon: 'scale', size: 26 },
    { x: 64, y: 88, icon: 'document', size: 24 },
    { x: 78, y: 88, icon: 'lawyer', size: 25 },
    { x: 92, y: 88, icon: 'briefcase', size: 25 },
  ],
];

const nodes = nodeRows.flat();

const links = (() => {
  const rowLength = nodeRows[0].length;
  const rows = nodeRows.length;
  const next = (row, col) => row * rowLength + col;
  const result = [];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < rowLength - 1; col += 1) {
      result.push([next(row, col), next(row, col + 1)]);
    }
  }

  for (let row = 0; row < rows - 1; row += 1) {
    for (let col = 0; col < rowLength; col += 1) {
      result.push([next(row, col), next(row + 1, col)]);
      if ((row + col) % 2 === 0 && col < rowLength - 1) {
        result.push([next(row, col), next(row + 1, col + 1)]);
      }
    }
  }

  return result;
})();

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const lerp = (from, to, amount) => from + (to - from) * amount;

function line(ctx, x1, y1, x2, y2) {
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
}

function drawScale(ctx, s) {
  ctx.beginPath();
  line(ctx, 0, -s * 0.46, 0, s * 0.35);
  line(ctx, -s * 0.42, -s * 0.22, s * 0.42, -s * 0.22);
  line(ctx, -s * 0.32, -s * 0.22, -s * 0.48, s * 0.16);
  line(ctx, -s * 0.18, -s * 0.22, -s * 0.04, s * 0.16);
  line(ctx, s * 0.18, -s * 0.22, s * 0.04, s * 0.16);
  line(ctx, s * 0.32, -s * 0.22, s * 0.48, s * 0.16);
  line(ctx, -s * 0.55, s * 0.16, -s * 0.02, s * 0.16);
  line(ctx, s * 0.02, s * 0.16, s * 0.55, s * 0.16);
  line(ctx, -s * 0.24, s * 0.48, s * 0.24, s * 0.48);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, -s * 0.52, s * 0.1, 0, Math.PI * 2);
  ctx.stroke();
}

function drawGavel(ctx, s) {
  ctx.save();
  ctx.rotate(-0.65);
  ctx.strokeRect(-s * 0.28, -s * 0.36, s * 0.55, s * 0.18);
  ctx.strokeRect(-s * 0.07, -s * 0.18, s * 0.14, s * 0.7);
  ctx.restore();
  ctx.beginPath();
  line(ctx, -s * 0.5, s * 0.44, s * 0.1, s * 0.44);
  line(ctx, -s * 0.4, s * 0.34, 0, s * 0.34);
  ctx.stroke();
}

function drawDocument(ctx, s) {
  ctx.beginPath();
  line(ctx, -s * 0.34, -s * 0.5, s * 0.18, -s * 0.5);
  line(ctx, s * 0.18, -s * 0.5, s * 0.42, -s * 0.25);
  line(ctx, s * 0.42, -s * 0.25, s * 0.42, s * 0.52);
  line(ctx, s * 0.42, s * 0.52, -s * 0.34, s * 0.52);
  line(ctx, -s * 0.34, s * 0.52, -s * 0.34, -s * 0.5);
  line(ctx, s * 0.18, -s * 0.5, s * 0.18, -s * 0.25);
  line(ctx, s * 0.18, -s * 0.25, s * 0.42, -s * 0.25);
  line(ctx, -s * 0.18, -s * 0.06, s * 0.2, -s * 0.06);
  line(ctx, -s * 0.18, s * 0.14, s * 0.24, s * 0.14);
  line(ctx, -s * 0.18, s * 0.34, s * 0.08, s * 0.34);
  ctx.stroke();
}

function drawCourt(ctx, s) {
  ctx.beginPath();
  line(ctx, -s * 0.55, -s * 0.2, 0, -s * 0.5);
  line(ctx, 0, -s * 0.5, s * 0.55, -s * 0.2);
  line(ctx, -s * 0.45, -s * 0.2, s * 0.45, -s * 0.2);
  [-0.32, 0, 0.32].forEach((x) => {
    line(ctx, s * x, -s * 0.14, s * x, s * 0.34);
  });
  line(ctx, -s * 0.5, s * 0.38, s * 0.5, s * 0.38);
  line(ctx, -s * 0.56, s * 0.52, s * 0.56, s * 0.52);
  ctx.stroke();
}

function drawBriefcase(ctx, s) {
  ctx.strokeRect(-s * 0.5, -s * 0.1, s, s * 0.58);
  ctx.strokeRect(-s * 0.22, -s * 0.3, s * 0.44, s * 0.2);
  ctx.strokeRect(-s * 0.1, s * 0.08, s * 0.2, s * 0.16);
  ctx.beginPath();
  line(ctx, -s * 0.5, s * 0.12, -s * 0.1, s * 0.12);
  line(ctx, s * 0.1, s * 0.12, s * 0.5, s * 0.12);
  ctx.stroke();
}

function drawHandshake(ctx, s) {
  ctx.beginPath();
  line(ctx, -s * 0.56, -s * 0.1, -s * 0.28, s * 0.18);
  line(ctx, s * 0.56, -s * 0.1, s * 0.28, s * 0.18);
  line(ctx, -s * 0.28, s * 0.18, -s * 0.06, -s * 0.02);
  line(ctx, -s * 0.06, -s * 0.02, s * 0.08, s * 0.1);
  line(ctx, s * 0.08, s * 0.1, s * 0.28, s * 0.18);
  line(ctx, -s * 0.08, s * 0.18, s * 0.14, s * 0.38);
  line(ctx, s * 0.14, s * 0.38, s * 0.34, s * 0.16);
  ctx.stroke();
}

function drawLawyer(ctx, s) {
  ctx.beginPath();
  ctx.arc(0, -s * 0.34, s * 0.18, 0, Math.PI * 2);
  line(ctx, -s * 0.38, s * 0.44, -s * 0.22, -s * 0.02);
  line(ctx, s * 0.38, s * 0.44, s * 0.22, -s * 0.02);
  line(ctx, -s * 0.22, -s * 0.02, 0, s * 0.18);
  line(ctx, s * 0.22, -s * 0.02, 0, s * 0.18);
  line(ctx, -s * 0.36, s * 0.44, s * 0.36, s * 0.44);
  ctx.stroke();
}

function drawNews(ctx, s) {
  ctx.strokeRect(-s * 0.44, -s * 0.42, s * 0.74, s * 0.78);
  ctx.beginPath();
  line(ctx, s * 0.3, -s * 0.26, s * 0.48, -s * 0.16);
  line(ctx, s * 0.48, -s * 0.16, s * 0.48, s * 0.36);
  line(ctx, -s * 0.24, -s * 0.16, s * 0.12, -s * 0.16);
  line(ctx, -s * 0.24, s * 0.02, s * 0.16, s * 0.02);
  line(ctx, -s * 0.24, s * 0.2, s * 0.06, s * 0.2);
  ctx.stroke();
}

const iconDrawers = {
  scale: drawScale,
  gavel: drawGavel,
  document: drawDocument,
  court: drawCourt,
  briefcase: drawBriefcase,
  handshake: drawHandshake,
  lawyer: drawLawyer,
  news: drawNews,
};

export default function NetworkBackground() {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0, tx: 0, ty: 0, active: false, down: false });
  const ripplesRef = useRef([]);
  const rafRef = useRef(null);
  const timeRef = useRef(0);
  const lastFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d', { alpha: true });
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let liveNodes = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.35);
      width = window.innerWidth;
      height = window.innerHeight;
      const sizeScale = width < 640 ? 0.68 : width < 1024 ? 0.82 : 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      liveNodes = nodes.map((node, index) => ({
        ...node,
        size: node.size * sizeScale,
        baseX: (node.x / 100) * width,
        baseY: (node.y / 100) * height,
        phase: index * 0.83,
        x: (node.x / 100) * width,
        y: (node.y / 100) * height,
      }));
    };

    const onMove = (event) => {
      const pointer = pointerRef.current;
      pointer.tx = event.clientX;
      pointer.ty = event.clientY;
      pointer.active = true;
    };

    const onLeave = () => {
      pointerRef.current.active = false;
    };

    const onDown = (event) => {
      const pointer = pointerRef.current;
      pointer.down = true;
      pointer.tx = event.clientX;
      pointer.ty = event.clientY;
      pointer.active = true;
      ripplesRef.current.push({ x: event.clientX, y: event.clientY, radius: 0, alpha: 1 });
    };

    const onUp = () => {
      pointerRef.current.down = false;
    };

    const drawIcon = (node, color, alpha, glow) => {
      const draw = iconDrawers[node.icon] || drawScale;
      ctx.save();
      ctx.translate(node.x, node.y);
      ctx.lineWidth = Math.max(1.2, node.size * 0.075);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha;
      if (glow > 0.28) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 5 + glow * 9;
      }
      draw(ctx, node.size);
      ctx.restore();
    };

    const render = (now = 0) => {
      const dark = document.body.classList.contains('dark-mode');
      const ink = dark ? '255,255,255' : '16,16,16';
      const accent = dark ? '235,235,235' : '20,20,20';
      const pointer = pointerRef.current;
      const speed = reduced ? 0 : 1;
      const delta = lastFrameRef.current ? Math.min((now - lastFrameRef.current) / 1000, 0.033) : 0.016;

      lastFrameRef.current = now;
      timeRef.current += delta;
      pointer.x = lerp(pointer.x || pointer.tx || width / 2, pointer.tx || width / 2, 0.12);
      pointer.y = lerp(pointer.y || pointer.ty || height / 2, pointer.ty || height / 2, 0.12);

      ctx.clearRect(0, 0, width, height);

      const halo = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, Math.max(width, height) * 0.26);
      halo.addColorStop(0, `rgba(${ink}, ${dark ? 0.055 : 0.032})`);
      halo.addColorStop(0.42, `rgba(${ink}, ${dark ? 0.018 : 0.014})`);
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);

      liveNodes.forEach((node) => {
        const distance = Math.hypot(pointer.x - node.baseX, pointer.y - node.baseY);
        const influence = pointer.active ? clamp(1 - distance / (width < 760 ? 150 : 230), 0, 1) : 0;
        const microFloat = reduced ? 0 : Math.sin(timeRef.current * 0.32 + node.phase) * 0.55;

        node.x = lerp(node.x, node.baseX, 0.18);
        node.y = lerp(node.y, node.baseY + microFloat * speed, 0.18);
        node.influence = influence;
      });

      links.forEach(([from, to], index) => {
        const a = liveNodes[from];
        const b = liveNodes[to];
        const active = Math.max(a.influence, b.influence);
        const mobileFade = width < 760 ? 0.74 : 1;
        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.lineWidth = 0.55 + active * 0.95;
        ctx.strokeStyle = `rgba(${ink}, ${(dark ? 0.075 + active * 0.22 : 0.065 + active * 0.18) * mobileFade})`;
        line(ctx, a.x, a.y, b.x, b.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 1.5 + active * 0.9;
        ctx.strokeStyle = `rgba(${ink}, ${(0.012 + active * 0.05) * mobileFade})`;
        line(ctx, a.x, a.y, b.x, b.y);
        ctx.stroke();

        const dotCount = 2 + (index % 2);
        for (let dot = 0; dot < dotCount; dot += 1) {
          const progress = (timeRef.current * (0.075 + (index % 4) * 0.01) + index * 0.065 + dot / dotCount) % 1;
          const px = lerp(a.x, b.x, progress);
          const py = lerp(a.y, b.y, progress);
          ctx.beginPath();
          ctx.fillStyle = `rgba(${accent}, ${0.16 + active * 0.32})`;
          if (active > 0.38) {
            ctx.shadowColor = `rgba(${accent}, 0.28)`;
            ctx.shadowBlur = 5 + active * 7;
          }
          ctx.arc(px, py, 1.25 + active * 1.15, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      liveNodes.forEach((node) => {
        const pulse = 0.5 + Math.sin(timeRef.current * 1.4 + node.phase) * 0.5;
        drawIcon(
          node,
          `rgba(${ink}, 1)`,
          dark ? 0.115 + node.influence * 0.34 + pulse * 0.024 : 0.092 + node.influence * 0.27 + pulse * 0.018,
          node.influence
        );
      });

      ripplesRef.current = ripplesRef.current.filter((ripple) => ripple.alpha > 0.02);
      ripplesRef.current.forEach((ripple) => {
        ripple.radius += 7;
        ripple.alpha *= 0.9;
        ctx.beginPath();
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = `rgba(${ink}, ${ripple.alpha * 0.24})`;
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      rafRef.current = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    rafRef.current = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="community-bg ylh-live-legal-field" aria-hidden="true">
      <canvas ref={canvasRef} className="ylh-legal-canvas" />
    </div>
  );
}
