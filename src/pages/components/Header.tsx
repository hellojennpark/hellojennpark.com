// components/Header.tsx
"use client";

import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";

const getTorontoTime = () => {
  const now = new Date().toLocaleString("en-US", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const [hourStr, minuteStr] = now.split(":");
  return {
    hour: parseInt(hourStr, 10),
    minute: parseInt(minuteStr, 10),
  };
};

export const Header = () => {
  const initial = getTorontoTime();
  const [selectedHour, setSelectedHour] = useState(initial.hour);
  const [torontoTime, setTorontoTime] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setTorontoTime(getTorontoTime());
    }, 60_000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      {/* 왼쪽 - 토론토 현재 시간 */}
      <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <MapPin className="w-4 h-4 text-gray-500" />
        <span>Toronto</span>
        <span className="text-gray-500">
          {torontoTime.hour}:{String(torontoTime.minute).padStart(2, "0")}
        </span>
      </div>

      {/* 중앙 - 시간 슬라이더 */}
      <div className="flex-1 px-10">
        <Slider
          min={0}
          max={23}
          step={1}
          value={[selectedHour]}
          onValueChange={([value]: number[]) => setSelectedHour(value)}
        />
        <div className="text-center text-xs text-gray-500 mt-1">
          Selected Hour: {selectedHour}:00
        </div>
      </div>

      {/* 오른쪽 - 메뉴 */}
      <nav className="flex space-x-6 text-sm font-medium text-gray-700">
        <a href="#career" className="hover:text-black">
          Career
        </a>
        <a href="#project" className="hover:text-black">
          Project
        </a>
        <a href="#blog" className="hover:text-black">
          Blog
        </a>
      </nav>
    </header>
  );
};
