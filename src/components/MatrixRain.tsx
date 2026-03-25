import { useEffect, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()+-/~{}[]|";
const FONT_SIZE = 14;
const NEON_GREEN = "#00ff41";
const NEON_TEAL = "#00ffcc";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const dropsRef = useRef<number[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1, y: -1 });

  const initDrops = useCallback((cols: number) => {
    dropsRef.current = Array.from({ length: cols }, () =>
      Math.random() * -100
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / FONT_SIZE);
      if (dropsRef.current.length !== cols) initDrops(cols);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    let lastTime = 0;
    const FPS = 30;
    const interval = 1000 / FPS;

    const draw = (time: number) => {
      animRef.current = requestAnimationFrame(draw);
      const delta = time - lastTime;
      if (delta < interval) return;
      lastTime = time - (delta % interval);

      // Fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px 'Courier New', monospace`;

      const drops = dropsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // Distance from mouse for interactive glow
        const dist = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
        const nearMouse = dist < 150;

        if (nearMouse) {
          ctx.fillStyle = NEON_TEAL;
          ctx.shadowColor = NEON_TEAL;
          ctx.shadowBlur = 20;
        } else if (Math.random() > 0.95) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#ffffff";
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = NEON_GREEN;
          ctx.shadowColor = NEON_GREEN;
          ctx.shadowBlur = 4;
        }

        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [initDrops]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default MatrixRain;
