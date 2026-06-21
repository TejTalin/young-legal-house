'use client';

import { useEffect, useRef } from 'react';

const nodes = [
  { x: 8, y: 18, icon: 'scale', size: 34 },
  { x: 20, y: 31, icon: 'briefcase', size: 31 },
  { x: 34, y: 18, icon: 'handshake', size: 34 },
  { x: 50, y: 32, icon: 'document', size: 35 },
  { x: 66, y: 18, icon: 'gavel', size: 34 },
  { x: 84, y: 30, icon: 'court', size: 36 },
  { x: 94, y: 15, icon: 'lawyer', size: 32 },
  { x: 12, y: 58, icon: 'news', size: 33 },
  { x: 29, y: 70, icon: 'scale', size: 35 },
  { x: 44, y: 54, icon: 'briefcase', size: 32 },
  { x: 61, y: 71, icon: 'document', size: 33 },
  { x: 78, y: 56, icon: 'handshake', size: 36 },
  { x: 92, y: 74, icon: 'gavel', size: 34 },
  { x: 5, y: 86, icon: 'court', size: 34 },
  { x: 35, y: 91, icon: 'news', size: 32 },
  { x: 70, y: 89, icon: 'lawyer', size: 33 },
];

const links = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [1, 7], [3, 9], [5, 11], [7, 8], [8, 9], [9, 10],
  [10, 11], [11, 12], [7, 13], [8, 14], [10, 15],
];

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
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      liveNodes = nodes.map((node, index) => ({
        ...node,
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
      if (glow > 0) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 10 + glow * 18;
      }
      draw(ctx, node.size);
      ctx.restore();
    };

    const render = () => {
      const dark = document.body.classList.contains('dark-mode');
      const ink = dark ? '255,255,255' : '16,16,16';
      const accent = dark ? '235,235,235' : '20,20,20';
      const pointer = pointerRef.current;
      const speed = reduced ? 0 : 1;

      timeRef.current += 0.016;
      pointer.x = lerp(pointer.x || pointer.tx || width / 2, pointer.tx || width / 2, 0.14);
      pointer.y = lerp(pointer.y || pointer.ty || height / 2, pointer.ty || height / 2, 0.14);

      ctx.clearRect(0, 0, width, height);

      const halo = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, Math.max(width, height) * 0.42);
      halo.addColorStop(0, `rgba(${ink}, ${dark ? 0.13 : 0.08})`);
      halo.addColorStop(0.35, `rgba(${ink}, ${dark ? 0.045 : 0.035})`);
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);

      liveNodes.forEach((node, index) => {
        const floatX = Math.sin(timeRef.current * (0.55 + (index % 4) * 0.06) + node.phase) * 7 * speed;
        const floatY = Math.cos(timeRef.current * (0.48 + (index % 5) * 0.05) + node.phase) * 6 * speed;
        const distance = Math.hypot(pointer.x - node.baseX, pointer.y - node.baseY);
        const influence = pointer.active ? clamp(1 - distance / 250, 0, 1) : 0;
        const angle = Math.atan2(node.baseY - pointer.y, node.baseX - pointer.x);
        const force = pointer.down ? 44 : 24;

        node.x = lerp(node.x, node.baseX + floatX + Math.cos(angle) * influence * force, 0.12);
        node.y = lerp(node.y, node.baseY + floatY + Math.sin(angle) * influence * force, 0.12);
        node.influence = influence;
      });

      links.forEach(([from, to], index) => {
        const a = liveNodes[from];
        const b = liveNodes[to];
        const active = Math.max(a.influence, b.influence);
        ctx.beginPath();
        ctx.lineWidth = 0.7 + active * 1.25;
        ctx.strokeStyle = `rgba(${ink}, ${dark ? 0.13 + active * 0.4 : 0.14 + active * 0.32})`;
        line(ctx, a.x, a.y, b.x, b.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 2.1 + active * 1.5;
        ctx.strokeStyle = `rgba(${ink}, ${0.018 + active * 0.11})`;
        line(ctx, a.x, a.y, b.x, b.y);
        ctx.stroke();

        const progress = (timeRef.current * (0.08 + (index % 4) * 0.012) + index * 0.09) % 1;
        const px = lerp(a.x, b.x, progress);
        const py = lerp(a.y, b.y, progress);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${accent}, ${0.25 + active * 0.45})`;
        ctx.shadowColor = `rgba(${accent}, 0.45)`;
        ctx.shadowBlur = 12 + active * 18;
        ctx.arc(px, py, 2.1 + active * 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      liveNodes.forEach((node) => {
        const pulse = 0.5 + Math.sin(timeRef.current * 1.4 + node.phase) * 0.5;
        drawIcon(node, `rgba(${ink}, 1)`, dark ? 0.18 + node.influence * 0.5 + pulse * 0.04 : 0.16 + node.influence * 0.42 + pulse * 0.035, node.influence);
      });

      ripplesRef.current = ripplesRef.current.filter((ripple) => ripple.alpha > 0.02);
      ripplesRef.current.forEach((ripple) => {
        ripple.radius += 9;
        ripple.alpha *= 0.91;
        ctx.beginPath();
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = `rgba(${ink}, ${ripple.alpha * 0.38})`;
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
