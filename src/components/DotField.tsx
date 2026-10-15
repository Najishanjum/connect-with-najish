import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  angle: number;
  offsetX: number;
  offsetY: number;
  tone: string;
};

const DotField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -1000, y: -1000 };
    const particles: Particle[] = [];
    const tones = ["--primary", "--primary", "--muted-foreground", "--foreground"];
    let width = 0;
    let height = 0;
    let frame = 0;
    let animationFrame = 0;
    let reducedMotion = motionQuery.matches;

    const readTone = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.round((width * height) / 5200);
      particles.length = 0;
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          dx: (Math.random() - 0.5) * 0.22,
          dy: (Math.random() - 0.5) * 0.22,
          radius: 0.7 + Math.random() * 1.05,
          angle: Math.random() * Math.PI,
          offsetX: 0,
          offsetY: 0,
          tone: tones[Math.floor(Math.random() * tones.length)] ?? "--primary",
        });
      }
      draw();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const pointerRadius = 150;

      particles.forEach((particle, index) => {
        if (!reducedMotion) {
          particle.x += particle.dx;
          particle.y += particle.dy;
          if (particle.x < -2) particle.x = width + 2;
          if (particle.x > width + 2) particle.x = -2;
          if (particle.y < -2) particle.y = height + 2;
          if (particle.y > height + 2) particle.y = -2;
        }

        const distanceX = particle.x - pointer.x;
        const distanceY = particle.y - pointer.y;
        const distance = Math.hypot(distanceX, distanceY);
        const influence = !reducedMotion && distance < pointerRadius
          ? (1 - distance / pointerRadius) * 34
          : 0;
        const targetX = distance > 0 ? (distanceX / distance) * influence : 0;
        const targetY = distance > 0 ? (distanceY / distance) * influence : 0;
        particle.offsetX += (targetX - particle.offsetX) * 0.065;
        particle.offsetY += (targetY - particle.offsetY) * 0.065;

        const tone = readTone(particle.tone);
        const shimmer = reducedMotion ? 0.3 : 0.18 + 0.26 * (0.5 + 0.5 * Math.sin(frame * 0.012 + index));
        context.fillStyle = `hsl(${tone} / ${shimmer})`;
        context.beginPath();
        context.ellipse(
          particle.x + particle.offsetX,
          particle.y + particle.offsetY,
          particle.radius * 1.35,
          particle.radius * 0.72,
          particle.angle,
          0,
          Math.PI * 2,
        );
        context.fill();
      });

      frame += 1;
      if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handlePointerLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      window.cancelAnimationFrame(animationFrame);
      draw();
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    motionQuery.addEventListener("change", handleMotionChange);
    resize();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] h-full w-full" />;
};

export default DotField;