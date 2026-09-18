'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  shape: 'rect' | 'circle' | 'petal';
  opacity: number;
}

const CELEBRATION_COLORS = [
  '#f59e0b', // Saffron Amber
  '#e69b22', // Deep Amber
  '#4d8b31', // Tulsi Green
  '#10b981', // Emerald
  '#f43f5e', // Rose Petal Pink
  '#fb7185', // Soft Lotus
  '#fbbf24', // Golden Sunlight
  '#38bdf8', // Festive Sky
  '#818cf8', // Divine Violet
  '#ffffff', // Pure Pearl
];

export default function ConfettiCanvas({ triggerKey = 0 }: { triggerKey?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate burst of 120 celebratory confetti and flower petals
    const count = 120;
    const originX = canvas.width / 2;
    const originY = Math.min(canvas.height * 0.35, 300);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 4;
      const shapes: ('rect' | 'circle' | 'petal')[] = ['rect', 'circle', 'petal'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];

      particles.push({
        x: originX + (Math.random() - 0.5) * 120,
        y: originY + (Math.random() - 0.5) * 40,
        w: shape === 'petal' ? Math.random() * 8 + 6 : Math.random() * 7 + 5,
        h: shape === 'petal' ? Math.random() * 12 + 8 : Math.random() * 10 + 4,
        color: CELEBRATION_COLORS[Math.floor(Math.random() * CELEBRATION_COLORS.length)],
        vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : 0.8),
        vy: Math.sin(angle) * speed - (Math.random() * 4 + 3), // Initial upward burst
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        shape,
        opacity: 1,
      });
    }

    let isAlive = true;
    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let aliveCount = 0;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.18; // Gravity
        p.vx *= 0.985; // Air drag
        p.rotation += p.vRot;

        if (p.y > canvas.height * 0.6) {
          p.opacity -= 0.012;
        }

        if (p.opacity > 0 && p.y < canvas.height + 40) {
          aliveCount++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillStyle = p.color;

          if (p.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.shape === 'petal') {
            ctx.beginPath();
            ctx.ellipse(0, 0, p.w / 2, p.h / 2, Math.PI / 4, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          }

          ctx.restore();
        }
      });

      if (aliveCount > 0 && isAlive) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    render();

    return () => {
      isAlive = false;
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [triggerKey]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40 w-full h-full"
      aria-hidden="true"
    />
  );
}
