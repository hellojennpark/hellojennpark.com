"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";

type Props = {
  value: number[];
  onValueChange: (v: number[]) => void;
};

export const ThemedSlider = ({ value, onValueChange }: Props) => {
  const { timeOfDay, primaryColor } = useTimeThemeStore();
  const isNight = timeOfDay === "night";

  const gradientBg = {
    morning: "from-[#ffb3b3] via-[#ff9898] to-[#a9ff68]", // coral pink → lime green
    day: "from-[#fde74c] via-[#b1d8ff] to-[#82bcf0]", // yellow → sky blue
    evening: "from-[#5ec9c0] via-[#a7c8d7] to-[#f26a8d]", // orange → white
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
          gradientBg[timeOfDay]
        )}
      >
        <RadixSlider.Range className={clsx("absolute h-full")} />
      </RadixSlider.Track>

      {/* Thumb (icon instead of dot) */}
      <RadixSlider.Thumb
        className={clsx(
          "w-6 h-6 rounded-full flex items-center justify-center border-none shadow-none",
          "transition-colors duration-200 p-1",
          isNight ? "bg-white/60" : "bg-black/60"
        )}
        style={{
          color: primaryColor,
        }}
      >
        {isNight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </RadixSlider.Thumb>
    </RadixSlider.Root>
  );
};
