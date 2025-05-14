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

    // DPR 설정
    const dpr = window.devicePixelRatio || 1;
    let logicalWidth = window.innerWidth;
    let logicalHeight = window.innerHeight;

    // 캔버스 크기 설정
    const setCanvasSize = () => {
      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;
      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${logicalHeight}px`;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();

    const cloudCount = 20;

    const createCloud = (): Cloud => {
      const baseX = Math.random() * logicalWidth;
      const baseY = logicalHeight * (0.25 + Math.random() * 0.3);
      const circleCount = 3 + Math.floor(Math.random() * 3);
      const circles: CloudCircle[] = [];

      for (let i = 0; i < circleCount; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const distance = 10 + Math.random() * 20;
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

    let clouds: Cloud[] = Array.from({ length: cloudCount }, createCloud);

    const draw = () => {
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);
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
        if (cloud.x - 100 > logicalWidth) cloud.x = -100;
      });
    };

    let animationFrameId: number;
    const loop = () => {
      update();
      draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    const resizeHandler = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      clouds = clouds.map((cloud) => ({
        ...cloud,
        x: (cloud.x / logicalWidth) * newWidth,
        y: (cloud.y / logicalHeight) * newHeight,
      }));
      logicalWidth = newWidth;
      logicalHeight = newHeight;
      setCanvasSize();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        pointerEvents: "none",
        zIndex: 1, // zIndex 증가로 테스트
      }}
    />
  );
};
