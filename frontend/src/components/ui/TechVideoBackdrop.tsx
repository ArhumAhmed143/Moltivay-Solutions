'use client';

import React, { useEffect, useRef } from 'react';

interface TechVideoBackdropProps {
  opacity?: number;
  className?: string;
}

export const TechVideoBackdrop: React.FC<TechVideoBackdropProps> = ({
  opacity = 0.18,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', onResize);

    // Monochrome streaming code lines & data packets
    const codeLines = [
      'const cluster = await edgeMesh.connect({ region: "us-east-1" });',
      'export async function POST(req: Request) { return syncQueue(req); }',
      'const agent = new AutonomousAgent({ model: "gemini-1.5", temperature: 0.1 });',
      'interface DeploymentConfig { memoryMB: 1024; ttfbTargetMs: 18; }',
      'await redis.pipeline().hset("session:token", hash).expire(3600).exec();',
      'git commit -m "feat(core): sub-millisecond edge cache invalidation"',
      'HTTP/2 200 OK [x-edge-cache: HIT, latency: 11.4ms]',
      'const db = await prisma.workspace.findUniqueOrThrow({ where: { id } });',
      'k8s.applyManifest("production-mesh.yaml", { replicas: 12 });',
    ];

    interface Particle {
      x: number;
      y: number;
      speed: number;
      text: string;
      alpha: number;
    }

    const items: Particle[] = [];
    const count = Math.min(18, Math.floor(width / 75));

    for (let i = 0; i < count; i++) {
      items.push({
        x: (width / count) * i + Math.random() * 20,
        y: Math.random() * height,
        speed: 0.4 + Math.random() * 0.5,
        text: codeLines[Math.floor(Math.random() * codeLines.length)],
        alpha: 0.25 + Math.random() * 0.45,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Fine tech grid background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;

      const gridSize = 32;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Render streaming mono code text
      ctx.font = '11px "JetBrains Mono", monospace';

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        ctx.fillStyle = `rgba(161, 161, 170, ${item.alpha})`;
        ctx.fillText(item.text, item.x, item.y);

        item.y += item.speed;
        if (item.y > height + 20) {
          item.y = -20;
          item.x = Math.random() * width;
          item.text = codeLines[Math.floor(Math.random() * codeLines.length)];
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ opacity }}
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      <canvas ref={canvasRef} className="h-full w-full block" />
      {/* Heavy dark gradient overlays so all foreground content stays 100% readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
};

export default TechVideoBackdrop;
