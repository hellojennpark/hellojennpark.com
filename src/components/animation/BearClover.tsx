// components/Clovers.tsx
// import Image from "next/image";
import React from "react";
// import { Clover } from "lucide-react"; // Import a suitable icon from Lucide
import { PiStarFill } from "react-icons/pi";

export const BearClover = () => {
  const initialTop = 30 + Math.random() * 50; // 30% to 90%
  const initialLeft = Math.random() * 100;

  const animationDuration = 10 + Math.random() * 10; // 10s to 20s
  const animationDelay = Math.random() * 1; // 0s to 5s delay

  const initialRotation = Math.random() * 360; // 0 to 360 degrees

  return (
    <div className="absolute inset-0 pointer-events-none z-1">
      <div
        className="absolute animate-clover-float-full"
        style={{
          top: `${initialTop}%`,
          left: `${initialLeft}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          transform: `translate(-50%, -50%) rotate(${initialRotation}deg)`, // Apply initial random rotation
          opacity: 1,
          fontSize: `${20 + Math.random() * 20}px`, // Random size for variety
          color: `hsl(var(--primary-color) ${60 + Math.random() * 20}%)`, // Adjust color based on primary (assuming --primary-color is defined in CSS)
        }}
      >
        {/* <Image src={"/bearbear.png"} fill alt="bear" /> */}
        <PiStarFill size="5em" color="#fde74c" />
      </div>
    </div>
  );
};
