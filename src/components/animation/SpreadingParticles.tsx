import React from "react";

export const SpreadingParticles = () => {
  const particleCount = 30;
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const size = 4 + Math.random() * 10;
    const duration = 5 + Math.random() * 5;
    const delay = Math.random() * 5;
    const x = (Math.random() - 0.5) * 200 + "px"; // -100px ~ +100px
    const y = (Math.random() - 0.5) * 200 + "px"; // -100px ~ +100px
    const left = Math.random() * 100;
    const top = Math.random() * 100;

    return (
      <div
        key={i}
        className="absolute rounded-full bg-pink-400"
        style={
          {
            width: size,
            height: size,
            top: `${top}%`,
            left: `${left}%`,
            animation: `spread-out ${duration}s ease-out ${delay}s infinite`,
            opacity: 0.7,
            "--x": x,
            "--y": y,
          } as React.CSSProperties
        }
      />
    );
  });

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {particles}
    </div>
  );
};
