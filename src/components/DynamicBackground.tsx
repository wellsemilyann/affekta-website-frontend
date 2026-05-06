import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  speed: number;
  opacity: number;
}

export function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const { scrollY } = useScroll();
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  // Parallax effect
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Initialize particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < 180; i++) {
      const angle = Math.random() * Math.PI * 2;
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: Math.cos(angle) * 0.2,
        vy: Math.sin(angle) * 0.2,
        size: Math.random() * 2.5 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }
    setParticles(newParticles);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Draw particles with enhanced movement
      newParticles.forEach((particle, index) => {
        // Floating movement pattern
        particle.x += particle.vx + Math.sin(time * 0.5 + index * 0.1) * 0.3;
        particle.y += particle.vy + Math.cos(time * 0.3 + index * 0.15) * 0.3;

        // Wrap around screen edges
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Pulsing opacity effect
        const pulseOpacity = particle.opacity * (0.7 + Math.sin(time * 2 + index * 0.5) * 0.3);

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `rgba(0, 113, 227, ${pulseOpacity})`);
        gradient.addColorStop(0.5, `rgba(100, 149, 237, ${pulseOpacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 113, 227, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Additional glow layer for larger particles
        if (particle.size > 1.5) {
          const outerGlow = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 6
          );
          outerGlow.addColorStop(0, `rgba(0, 113, 227, ${pulseOpacity * 0.2})`);
          outerGlow.addColorStop(1, 'rgba(0, 113, 227, 0)');
          ctx.fillStyle = outerGlow;
          ctx.fillRect(
            particle.x - particle.size * 6,
            particle.y - particle.size * 6,
            particle.size * 12,
            particle.size * 12
          );
        }
      });

      // Draw connections between nearby particles with variable line width
      newParticles.forEach((particle, i) => {
        newParticles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            // Variable opacity and line width based on distance
            const opacity = (1 - distance / 150) * 0.2;
            const lineWidth = (1 - distance / 150) * 1.5;
            
            // Gradient line
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            lineGradient.addColorStop(0, `rgba(0, 113, 227, ${opacity})`);
            lineGradient.addColorStop(0.5, `rgba(100, 149, 237, ${opacity * 0.7})`);
            lineGradient.addColorStop(1, `rgba(0, 113, 227, ${opacity})`);
            
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000510] via-[#000a1f] to-background" />

      {/* Animated gradient orbs - Multiple layers */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 113, 227, 0.5) 0%, rgba(100, 149, 237, 0.2) 50%, transparent 70%)',
          y: y1,
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)',
          y: y2,
        }}
        animate={{
          scale: [1.2, 0.9, 1.2],
          x: [0, -70, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.4, 1],
          x: [-50, 50, -50],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Canvas for particles */}
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity }}
      />

      {/* Grid overlay */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(0, 113, 227, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 113, 227, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          y: y2,
        }}
      />

      {/* Scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 113, 227, 0.8), transparent)',
          boxShadow: '0 0 20px rgba(0, 113, 227, 0.5)',
        }}
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Light rays - Enhanced */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-px h-full origin-top"
            style={{
              left: `${10 + i * 12}%`,
              background: 'linear-gradient(to bottom, rgba(0, 113, 227, 0.6), rgba(100, 149, 237, 0.3), transparent)',
            }}
            animate={{
              scaleY: [0.3, 1, 0.3],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Diagonal light beams */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`diag-${i}`}
            className="absolute w-full h-px origin-left"
            style={{
              top: `${30 + i * 30}%`,
              background: 'linear-gradient(to right, transparent, rgba(0, 113, 227, 0.4), transparent)',
              transform: 'rotate(-15deg)',
            }}
            animate={{
              scaleX: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating rings */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full border border-primary/30"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${20 + i * 25}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />
    </div>
  );
}
