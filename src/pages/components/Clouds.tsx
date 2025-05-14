"use client";
import { useEffect, useRef } from "react";

type CloudCircle = {
  offsetX: number;
  offsetY: number;
  r: number;
};

type Cloud = {
  x: number;
  y: number;
  speed: number;
  circles: CloudCircle[];
};

export const Clouds = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);
    const cloudCount = 20;

    // 구름 생성 함수
    const createCloud = (): Cloud => {
      const baseX = Math.random() * w;
      const baseY = h * (0.25 + Math.random() * 0.3);
      const circleCount = 3 + Math.floor(Math.random() * 3); // 최소 3개 이상
      const circles: CloudCircle[] = [];

      for (let i = 0; i < circleCount; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const distance = 10 + Math.random() * 30; // 중심에서 거리 제한
        circles.push({
          offsetX: Math.cos(angle) * distance,
          offsetY: Math.sin(angle) * distance,
          r: 20 + Math.random() * 30,
        });
      }

      return {
        x: baseX,
        y: baseY,
        speed: 0.2 + Math.random() * 0.3,
        circles,
      };
    };

    const clouds: Cloud[] = Array.from({ length: cloudCount }, createCloud);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255, 255, 255, 1)";
      clouds.forEach((cloud) => {
        cloud.circles.forEach((circle) => {
          ctx.beginPath();
          ctx.arc(
            cloud.x + circle.offsetX,
            cloud.y + circle.offsetY,
            circle.r,
            0,
            Math.PI * 2
          );
          ctx.fill();
        });
      });
    };

    const update = () => {
      clouds.forEach((cloud) => {
        cloud.x += cloud.speed;
        if (cloud.x - 100 > w) cloud.x = -100; // 화면 넘어가면 왼쪽에서 다시
      });
    };

    const loop = () => {
      update();
      draw();
      requestAnimationFrame(loop);
    };

    loop();

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[-2]"
      style={{ pointerEvents: "none" }}
    />
  );
};
