"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

type Props = {
  value: number[];
  onValueChange: (v: number[]) => void;
  themeTime: "morning" | "day" | "evening" | "night";
};

export const ThemedSlider = ({ value, onValueChange, themeTime }: Props) => {
  const isNight = themeTime === "night";

  const gradientBg = {
    morning: "from-[#ffb3b3] via-[#ff9898] to-[#a9ff68]", // coral pink → lime green
    day: "from-[#fde74c] via-[#b1d8ff] to-[#82bcf0]", // yellow → sky blue
    evening: "from-[#f4a261] via-[#f6aa72] to-[#ffffff]", // orange → white
    night: "from-[#043565] via-[#283e6d] to-[#eb4b98]", // navy → hot pink
  };

  return (
    <RadixSlider.Root
      className="relative flex items-center select-none touch-none w-full h-6"
      min={0}
      max={23}
      step={1}
      value={value}
      onValueChange={onValueChange}
    >
      {/* Track (bar) */}
      <RadixSlider.Track
        className={clsx(
          "relative h-2 w-full rounded-full overflow-hidden",
          "bg-gradient-to-r",
          gradientBg[themeTime]
        )}
      >
        <RadixSlider.Range className="absolute h-full bg-white/50" />
      </RadixSlider.Track>

      {/* Thumb (icon instead of dot) */}
      <RadixSlider.Thumb
        className={clsx(
          "w-6 h-6 rounded-full flex items-center justify-center border-none shadow-none",
          "transition-colors duration-200",
          isNight ? "bg-black/30" : "bg-white/30"
        )}
      >
        {isNight ? (
          <Moon className="w-5 h-5 text-white" />
        ) : (
          <Sun className="w-5 h-5 text-gray-700" />
        )}
      </RadixSlider.Thumb>
    </RadixSlider.Root>
  );
};
