import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  shape: 'circle' | 'square' | 'triangle';
  color: string;
}

export function AntigravityBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const colors = isDark ? [
      'rgba(147, 197, 253, 0.4)',    // bright blue
      'rgba(196, 181, 253, 0.4)',     // bright purple
      'rgba(165, 180, 252, 0.4)',     // bright indigo
      'rgba(103, 232, 249, 0.4)',     // bright cyan
      'rgba(216, 180, 254, 0.4)',     // bright violet
      'rgba(251, 146, 60, 0.4)',      // bright orange
    ] : [
      'rgba(99, 102, 241, 0.15)',    // indigo
      'rgba(139, 92, 246, 0.15)',     // purple
      'rgba(59, 130, 246, 0.15)',     // blue
      'rgba(14, 165, 233, 0.15)',     // sky
      'rgba(168, 85, 247, 0.15)',     // violet
      'rgba(236, 72, 153, 0.15)',     // pink
    ];

    const shapes: Array<'circle' | 'square' | 'triangle'> = ['circle', 'square', 'triangle'];

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 200,
      size: Math.random() * 30 + 10,
      speedY: -(Math.random() * 0.5 + 0.2), // Upward movement
      speedX: (Math.random() - 0.5) * 0.3,  // Horizontal drift
      opacity: Math.random() * 0.3 + 0.1,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
    });

    // Create initial particles
    for (let i = 0; i < 40; i++) {
      particlesRef.current.push(createParticle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.y += particle.speedY;
        particle.x += particle.speedX;

        // Add slight rotation/wobble effect
        particle.speedX += (Math.random() - 0.5) * 0.02;
        particle.speedX *= 0.99; // Damping

        // Wrap around horizontally
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;

        // Reset particle when it goes off screen (top)
        if (particle.y < -particle.size - 100) {
          particlesRef.current[index] = createParticle();
          return;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.strokeStyle = particle.color.replace(isDark ? '0.4' : '0.15', isDark ? '0.6' : '0.3');
        ctx.lineWidth = 2;

        // Add glow effect in dark mode
        if (isDark) {
          ctx.shadowColor = particle.color.replace('0.4', '1');
          ctx.shadowBlur = 15;
        }

        ctx.translate(particle.x, particle.y);
        
        // Rotate based on position for dynamic effect
        const rotation = (particle.x + particle.y) * 0.01;
        ctx.rotate(rotation);

        switch (particle.shape) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
          
          case 'square':
            ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            ctx.strokeRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            break;
          
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -particle.size / 2);
            ctx.lineTo(particle.size / 2, particle.size / 2);
            ctx.lineTo(-particle.size / 2, particle.size / 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
        }

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDark]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 10 }}
      />
      {/* Additional CSS-based floating elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 100 + 50;
          const delay = Math.random() * 10;
          const duration = Math.random() * 20 + 15;
          const startX = Math.random() * 100;
          
          return (
            <div
              key={i}
              className="absolute animate-float-up"
              style={{
                left: `${startX}%`,
                bottom: '-100px',
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                opacity: 0.1
              }}
            >
              <div
                className={`w-full h-full rounded-full blur-xl ${isDark ? 'drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]' : ''}`}
                style={{
                  background: `radial-gradient(circle,
                    ${isDark
                      ? ['#93c5fd', '#c4b5fd', '#a5b4fc', '#67e8f9', '#d8b4fe', '#fb923c'][i % 6]
                      : ['#6366f1', '#8b5cf6', '#3b82f6', '#0ea5e9', '#a855f7', '#ec4899'][i % 6]
                    }${isDark ? 'cc' : '80'},
                    transparent 70%)`,
                  filter: isDark ? 'drop-shadow(0 0 15px rgba(255,255,255,0.2))' : undefined
                }}
              />
            </div>
          );
        })}
      </div>
      
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-float-slow ${isDark ? 'bg-primary/20 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'bg-primary/5'}`} />
        <div className={`absolute bottom-40 right-20 w-80 h-80 rounded-full blur-3xl animate-float-slow ${isDark ? 'bg-purple-500/20 drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 'bg-purple-500/5'}`} style={{ animationDelay: '2s' }} />
        <div className={`absolute top-1/2 left-1/3 w-72 h-72 rounded-full blur-3xl animate-float-slow ${isDark ? 'bg-blue-500/20 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]' : 'bg-blue-500/5'}`} style={{ animationDelay: '4s' }} />
      </div>
    </>
  );
}
