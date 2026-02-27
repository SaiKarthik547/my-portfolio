import React, { useEffect, useRef } from 'react';

type BackgroundMode = 'synapse' | 'geometric' | 'stream' | 'orbit' | 'aurora' | 'grid' | 'magnetic' | 'nebula';

interface AnimatedBackgroundProps {
  mode?: BackgroundMode;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  baseSize?: number;
  originX?: number;
  originY?: number;
  angle?: number;
  spin?: number;
  sides?: number;
  speed?: number;
  length?: number;
  width?: number;
  centerX?: number;
  centerY?: number;
  distance?: number;
  amplitude?: number;
  frequency?: number;
  phase?: number;
  alpha?: number;
  history?: { x: number; y: number }[];
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  mode = 'synapse',
  primaryColor = '#38bdf8',
  secondaryColor = '#a855f7',
  accentColor = '#22c55e',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;

    const currentMode = mode;
    const c1 = primaryColor;
    const c2 = secondaryColor;
    const c3 = accentColor;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      ctx.scale(dpr, dpr);
      init();
    };

    let resizeTimeout: number;
    const handleResize = () => {
      cancelAnimationFrame(resizeTimeout);
      resizeTimeout = requestAnimationFrame(resize);
    };

    const init = () => {
      particles = [];
      const count = isMobile ? 30 : 60;

      switch (currentMode) {
        case 'synapse':
          for (let i = 0; i < count; i++) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              vx: (Math.random() - 0.5) * 0.5,
              vy: (Math.random() - 0.5) * 0.5,
              size: Math.random() * 2 + 1,
              color: i % 2 === 0 ? c1 : c2,
            });
          }
          break;
        case 'geometric':
          for (let i = 0; i < (isMobile ? 10 : 20); i++) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              size: Math.random() * 40 + 20,
              angle: Math.random() * Math.PI * 2,
              spin: (Math.random() - 0.5) * 0.02,
              vx: (Math.random() - 0.5) * 0.2,
              vy: (Math.random() - 0.5) * 0.2,
              sides: Math.floor(Math.random() * 3) + 3,
              color: i % 2 === 0 ? c1 : c3,
            });
          }
          break;
        case 'stream':
          for (let i = 0; i < (isMobile ? 50 : 100); i++) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              speed: Math.random() * 2 + 1,
              length: Math.random() * 100 + 50,
              width: Math.random() * 1 + 0.5,
              color: c1,
              vx: 0,
              vy: 0,
              size: 0
            });
          }
          break;
        case 'orbit':
          for (let i = 0; i < (isMobile ? 20 : 40); i++) {
            particles.push({
              centerX: canvas.width / 2,
              centerY: canvas.height / 2,
              distance: Math.random() * (canvas.width / 2.5) + 50,
              angle: Math.random() * Math.PI * 2,
              speed: (Math.random() * 0.01 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
              size: Math.random() * 4 + 2,
              color: i % 3 === 0 ? c1 : (i % 3 === 1 ? c2 : c3),
              x: 0, y: 0, vx: 0, vy: 0
            });
          }
          break;
        case 'grid': {
          const spacing = isMobile ? 40 : 60;
          for (let x = 0; x < canvas.width; x += spacing) {
            for (let y = 0; y < canvas.height; y += spacing) {
              particles.push({ x, y, size: 1, baseSize: 1, vx: 0, vy: 0, color: c1 });
            }
          }
          break;
        }
        case 'magnetic':
          for (let i = 0; i < (isMobile ? 80 : 150); i++) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              originX: Math.random() * canvas.width,
              originY: Math.random() * canvas.height,
              vx: 0,
              vy: 0,
              color: Math.random() > 0.5 ? c1 : c2,
              size: 1.5
            });
          }
          break;
        case 'aurora':
          for (let i = 0; i < 3; i++) {
            particles.push({
              x: 0,
              y: canvas.height * (0.3 + i * 0.2),
              amplitude: 50 + Math.random() * 100,
              frequency: 0.001 + Math.random() * 0.002,
              phase: Math.random() * Math.PI * 2,
              color: i === 0 ? c1 : (i === 1 ? c2 : c3),
              vx: 0, vy: 0, size: 0
            });
          }
          break;
        case 'nebula':
          for (let i = 0; i < (isMobile ? 80 : 150); i++) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              vx: 0,
              vy: 0,
              size: Math.random() * 2 + 1,
              color: i % 3 === 0 ? c1 : (i % 3 === 1 ? c2 : c3),
              alpha: Math.random() * 0.5 + 0.2,
              history: []
            });
          }
          break;
      }
    };

    const drawSynapse = (ctx: CanvasRenderingContext2D, pts: Particle[], mouse: { x: number, y: number, active: boolean }) => {
      pts.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            p.x -= dx * 0.02;
            p.y -= dy * 0.02;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const p2 = pts[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 150) * 0.2;
            ctx.stroke();
          }
        }
      });
    };

    const drawGeometric = (ctx: CanvasRenderingContext2D, pts: Particle[], mouse: { x: number, y: number, active: boolean }) => {
      pts.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.angle !== undefined && p.spin !== undefined) {
          p.angle += p.spin;
        }

        if (p.x < -p.size || p.x > canvas.width + p.size) p.vx *= -1;
        if (p.y < -p.size || p.y > canvas.height + p.size) p.vy *= -1;

        ctx.save();
        ctx.translate(p.x, p.y);
        if (p.angle !== undefined) {
          ctx.rotate(p.angle);
        }
        ctx.beginPath();
        const sides = p.sides || 3;
        for (let i = 0; i < sides; i++) {
          const x = p.size * Math.cos((i * 2 * Math.PI) / sides);
          const y = p.size * Math.sin((i * 2 * Math.PI) / sides);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = 0.1;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.globalAlpha = (1 - dist / 200) * 0.3;
            ctx.stroke();
          }
        }
        ctx.restore();
      });
    };

    const drawStream = (ctx: CanvasRenderingContext2D, pts: Particle[], mouse: { x: number, y: number, active: boolean }, canvas: HTMLCanvasElement) => {
      pts.forEach(p => {
        if (p.speed === undefined) return;
        p.y -= p.speed;
        if (mouse.active) {
            const dx = mouse.x - p.x;
            if (Math.abs(dx) < 100) {
                p.y -= p.speed * 2;
            }
        }
        const length = p.length || 50;
        if (p.y < -length) {
          p.y = canvas.height + length;
          p.x = Math.random() * canvas.width;
        }

        const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + length);
        grad.addColorStop(0, p.color);
        grad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + length);
        ctx.strokeStyle = grad;
        ctx.lineWidth = p.width || 1;
        ctx.globalAlpha = 0.2;
        ctx.stroke();
      });
    };

    const drawOrbit = (ctx: CanvasRenderingContext2D, pts: Particle[], mouse: { x: number, y: number, active: boolean }, canvas: HTMLCanvasElement) => {
        const cx = mouse.active ? mouse.x : canvas.width / 2;
        const cy = mouse.active ? mouse.y : canvas.height / 2;
        
        pts.forEach(p => {
            if (p.angle === undefined || p.speed === undefined || p.distance === undefined) return;
            p.angle += p.speed;
            const x = cx + Math.cos(p.angle) * p.distance;
            const y = cy + Math.sin(p.angle) * p.distance;
            
            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.4;
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(x, y, p.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.1;
            ctx.fill();
        });
    };

    const drawGrid = (ctx: CanvasRenderingContext2D, pts: Particle[], mouse: { x: number, y: number, active: boolean }, color: string) => {
        pts.forEach(p => {
            let size = p.baseSize || 1;
            let alpha = 0.1;
            
            if (mouse.active) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const factor = (1 - dist / 150);
                    size = (p.baseSize || 1) + factor * 10;
                    alpha = 0.1 + factor * 0.5;
                }
            }
            
            ctx.beginPath();
            ctx.rect(p.x - size/2, p.y - size/2, size, size);
            ctx.fillStyle = color;
            ctx.globalAlpha = alpha;
            ctx.fill();
        });
    };

    const drawMagnetic = (ctx: CanvasRenderingContext2D, pts: Particle[], mouse: { x: number, y: number, active: boolean }) => {
        pts.forEach(p => {
            if (mouse.active) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const force = Math.min(10, 1000 / dist);
                const angle = Math.atan2(dy, dx);
                
                p.vx += Math.cos(angle) * force * 0.2;
                p.vy += Math.sin(angle) * force * 0.2;
            }
            
            if (p.originX !== undefined && p.originY !== undefined) {
              p.vx += (p.originX - p.x) * 0.05;
              p.vy += (p.originY - p.y) * 0.05;
            }
            
            p.vx *= 0.9;
            p.vy *= 0.9;
            
            p.x += p.vx;
            p.y += p.vy;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.3;
            ctx.fill();
        });
    };

    const drawAurora = (ctx: CanvasRenderingContext2D, pts: Particle[], time: number, canvas: HTMLCanvasElement) => {
        pts.forEach((p) => {
            if (p.frequency === undefined || p.phase === undefined || p.amplitude === undefined) return;
            ctx.beginPath();

          ctx.moveTo(0, p.y);
          
          for (let x = 0; x < canvas.width; x += 10) {
              const y = p.y + Math.sin(x * p.frequency + time * 0.001 + p.phase) * p.amplitude;
              ctx.lineTo(x, y);
          }
          
          ctx.strokeStyle = p.color;
          ctx.lineWidth = isMobile ? 40 : 100;
          ctx.globalAlpha = 0.05;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
          
          ctx.globalAlpha = 0.1;
          ctx.lineWidth = isMobile ? 10 : 20;
          ctx.stroke();
      });
    };

    const drawNebula = (ctx: CanvasRenderingContext2D, pts: Particle[], mouse: { x: number, y: number, active: boolean }, time: number, canvas: HTMLCanvasElement) => {
        pts.forEach(p => {
            const noise = Math.sin(p.x * 0.003 + time * 0.0005) * Math.cos(p.y * 0.003 + time * 0.0005);
            const angle = noise * Math.PI * 4;
            
            p.vx += Math.cos(angle) * 0.1;
            p.vy += Math.sin(angle) * 0.1;

            if (mouse.active) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    const push = (1 - dist / 200) * 0.5;
                    p.vx += dx * 0.01 * push;
                    p.vy += dy * 0.01 * push;
                }
            }

            p.vx *= 0.95;
            p.vy *= 0.95;
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < -50) p.x = canvas.width + 50;
            if (p.x > canvas.width + 50) p.x = -50;
            if (p.y < -50) p.y = canvas.height + 50;
            if (p.y > canvas.height + 50) p.y = -50;

            if (p.history) {
              p.history.push({ x: p.x, y: p.y });
              if (p.history.length > (isMobile ? 5 : 10)) p.history.shift();

              if (p.history.length > 1) {
                  ctx.beginPath();
                  ctx.moveTo(p.history[0].x, p.history[0].y);
                  for (let j = 1; j < p.history.length; j++) {
                      ctx.lineTo(p.history[j].x, p.history[j].y);
                  }
                  ctx.strokeStyle = p.color;
                  ctx.lineWidth = p.size;
                  ctx.globalAlpha = (p.alpha || 0.5) * 0.5;
                  ctx.stroke();
              }
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha || 0.5;
            ctx.fill();
        });
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      switch (currentMode) {
        case 'synapse':
          drawSynapse(ctx, particles, mouse);
          break;
        case 'geometric':
          drawGeometric(ctx, particles, mouse);
          break;
        case 'stream':
          drawStream(ctx, particles, mouse, canvas);
          break;
        case 'orbit':
          drawOrbit(ctx, particles, mouse, canvas);
          break;
        case 'grid':
          drawGrid(ctx, particles, mouse, c1);
          break;
        case 'magnetic':
          drawMagnetic(ctx, particles, mouse);
          break;
        case 'aurora':
          drawAurora(ctx, particles, time, canvas);
          break;
        case 'nebula':
          drawNebula(ctx, particles, mouse, time, canvas);
          break;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', handleResize);
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, active: true };
      }
    };

    const handleLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouch);
    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('mouseleave', handleLeave);
    window.addEventListener('touchend', handleLeave);
    
    resize();
    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('touchend', handleLeave);
      cancelAnimationFrame(animationFrameId);
      cancelAnimationFrame(resizeTimeout);
    };
  }, [mode, primaryColor, secondaryColor, accentColor]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[#050507]">
      <div 
        className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-[0.15] animate-pulse pointer-events-none transition-colors duration-1000"
        style={{ background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)` }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-[0.15] animate-pulse pointer-events-none transition-colors duration-1000"
        style={{ background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`, animationDelay: '2s' }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default AnimatedBackground;
