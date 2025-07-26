// components/ui/sparkles.tsx
import { useEffect, useRef } from "react";

export const SparklesCore = ({ className = "", id, background = "transparent", particleColor = "#3b82f6", minSize = 1, maxSize = 3, particleDensity = 100 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const generateParticles = () => {
      particles.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / particleDensity);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          dx: Math.random() * 0.5 - 0.25,
          dy: Math.random() * 0.5 - 0.25,
        });
      }
    };
    generateParticles();

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }

      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [particleColor, background, minSize, maxSize, particleDensity]);

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} id={id} />;
};
