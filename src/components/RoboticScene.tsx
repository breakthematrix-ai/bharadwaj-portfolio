import React, { useEffect, useRef } from 'react';

interface Robot {
  x: number;
  y: number;
  z: number;
  scale: number;
  rotationY: number;
  velocityX: number;
  velocityZ: number;
  targetX: number;
  targetZ: number;
}

export const RoboticScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const robots: Robot[] = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height / 2,
      z: Math.random() * 1000 - 500,
      scale: Math.random() * 0.5 + 0.5,
      rotationY: Math.random() * Math.PI * 2,
      velocityX: 0,
      velocityZ: 0,
      targetX: Math.random() * canvas.width,
      targetZ: Math.random() * 1000 - 500
    }));

    const centerX = canvas.width / 2;
    const centerZ = 0;
    const safeRadius = 300; // Safe distance from particle sphere

    const drawRobot = (ctx: CanvasRenderingContext2D, robot: Robot) => {
      const perspective = 1000;
      const scale = perspective / (perspective + robot.z);
      const x = (robot.x - centerX) * scale + centerX;
      const y = robot.y * scale;

      // Calculate shadow
      const shadowScale = 0.5 * scale;
      const shadowY = canvas.height - 50;
      ctx.fillStyle = `rgba(0, 255, 255, ${0.2 * scale})`;
      ctx.beginPath();
      ctx.ellipse(x, shadowY, 30 * shadowScale, 10 * shadowScale, 0, 0, Math.PI * 2);
      ctx.fill();

      // Draw robot body
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale * robot.scale, scale * robot.scale);
      ctx.rotate(robot.rotationY);

      // Robot design
      ctx.fillStyle = `rgba(0, 255, 255, ${0.8 * scale})`;
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.5 * scale})`;
      ctx.lineWidth = 2;

      // Body
      ctx.fillRect(-20, -30, 40, 60);
      
      // Head
      ctx.fillRect(-15, -45, 30, 20);
      
      // Eyes
      ctx.fillStyle = `rgba(255, 255, 255, ${scale})`;
      ctx.fillRect(-10, -40, 6, 6);
      ctx.fillRect(4, -40, 6, 6);
      
      // Arms
      ctx.fillStyle = `rgba(0, 255, 255, ${0.8 * scale})`;
      ctx.fillRect(-30, -20, 10, 40);
      ctx.fillRect(20, -20, 10, 40);

      ctx.restore();
    };

    const updateRobotPosition = (robot: Robot) => {
      // Calculate distance to target
      const dx = robot.targetX - robot.x;
      const dz = robot.targetZ - robot.z;
      const distanceToTarget = Math.sqrt(dx * dx + dz * dz);

      // Calculate distance to center (particle sphere)
      const dcx = centerX - robot.x;
      const dcz = centerZ - robot.z;
      const distanceToCenter = Math.sqrt(dcx * dcx + dcz * dcz);

      // Update velocities with smooth acceleration
      const acceleration = 0.1;
      if (distanceToTarget < 10) {
        // Set new target when close to current target
        robot.targetX = Math.random() * canvas.width;
        robot.targetZ = Math.random() * 1000 - 500;
      } else {
        // Avoid getting too close to the particle sphere
        if (distanceToCenter < safeRadius) {
          const avoidFactor = (safeRadius - distanceToCenter) / safeRadius;
          robot.velocityX += (dcx / distanceToCenter) * avoidFactor * acceleration;
          robot.velocityZ += (dcz / distanceToCenter) * avoidFactor * acceleration;
        }

        // Move towards target
        robot.velocityX += (dx / distanceToTarget) * acceleration;
        robot.velocityZ += (dz / distanceToTarget) * acceleration;
      }

      // Apply friction
      const friction = 0.98;
      robot.velocityX *= friction;
      robot.velocityZ *= friction;

      // Update position
      robot.x += robot.velocityX;
      robot.z += robot.velocityZ;

      // Update rotation to face movement direction
      const targetRotation = Math.atan2(robot.velocityX, robot.velocityZ);
      const rotationDiff = targetRotation - robot.rotationY;
      robot.rotationY += rotationDiff * 0.1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sort robots by z-index for proper depth rendering
      robots.sort((a, b) => b.z - a.z);

      // Update and draw each robot
      robots.forEach(robot => {
        updateRobotPosition(robot);
        drawRobot(ctx, robot);
      });

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
      className="fixed inset-0 w-full h-full"
      style={{
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};