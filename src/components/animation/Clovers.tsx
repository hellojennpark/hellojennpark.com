// components/Clovers.tsx
import React from "react";
// import { Clover } from "lucide-react"; // Import a suitable icon from Lucide
import { PiCloverFill } from "react-icons/pi";

export const Clovers = () => {
  const cloverCount = 15; // Increased for more coverage
  const clovers = Array.from({ length: cloverCount }).map((_, i) => {
    // Random initial position within bounds
    const initialTop = -10 + Math.random() * 60; // 30% to 90%
    const initialLeft = Math.random() * 100;

    // Random animation durations and delays
    const animationDuration = 10 + Math.random() * 10; // 10s to 20s
    const animationDelay = Math.random() * 1; // 0s to 5s delay

    // Random rotation for the initial state of each clover
    const initialRotation = Math.random() * 360; // 0 to 360 degrees

    return (
      <div
        key={i}
        className="absolute animate-clover-float "
        style={{
          top: `${initialTop}%`,
          left: `${initialLeft}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          transform: `translate(-50%, -50%) rotate(${initialRotation}deg)`, // Apply initial random rotation
          opacity: 0.6 + Math.random() * 0.4, // Random initial opacity
          fontSize: `${20 + Math.random() * 20}px`, // Random size for variety
          color: `hsl(var(--primary-color) ${60 + Math.random() * 20}%)`, // Adjust color based on primary (assuming --primary-color is defined in CSS)
        }}
      >
        <PiCloverFill size="3em" color="Green" />
      </div>
    );
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-1">{clovers}</div>
  );
};
