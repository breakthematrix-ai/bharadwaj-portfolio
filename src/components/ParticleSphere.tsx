import React, { useEffect, useRef } from 'react';

export const ParticleSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const particles: Particle[] = [];
    const particleCount = 1000;
    const radius = Math.min(canvas.width, canvas.height) / 4; // Adjust radius based on canvas size

    class Particle {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      speed: number;

      constructor() {
        this.calculateInitialPosition();
        this.speed = Math.random() * 0.5 + 0.2;
      }

      calculateInitialPosition() {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        
        this.baseX = radius * Math.sin(phi) * Math.cos(theta);
        this.baseY = radius * Math.sin(phi) * Math.sin(theta);
        this.baseZ = radius * Math.cos(phi);
        
        this.x = this.baseX;
        this.y = this.baseY;
        this.z = this.baseZ;
      }

      update(angle: number) {
        const rotationMatrix = [
          Math.cos(angle), 0, Math.sin(angle),
          0, 1, 0,
          -Math.sin(angle), 0, Math.cos(angle)
        ];

        this.x = (rotationMatrix[0] * this.baseX + rotationMatrix[1] * this.baseY + rotationMatrix[2] * this.baseZ);
        this.y = (rotationMatrix[3] * this.baseX + rotationMatrix[4] * this.baseY + rotationMatrix[5] * this.baseZ);
        this.z = (rotationMatrix[6] * this.baseX + rotationMatrix[7] * this.baseY + rotationMatrix[8] * this.baseZ);
      }

      draw(ctx: CanvasRenderingContext2D) {
        const scale = (radius + this.z) / (2 * radius);
        const x = this.x * scale + canvas.width / 2;
        const y = this.y * scale + canvas.height / 2;
        const r = Math.max(0.5, 2 * scale);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${scale * 0.8})`; // Increased opacity
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let angle = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(angle);
        particle.draw(ctx);
      });

      angle += 0.002;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ 
        width: '100%', 
        height: '100%',
        opacity: 0.8,
        mixBlendMode: 'screen'
      }}
    />
  );
};