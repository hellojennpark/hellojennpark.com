"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import clsx from "clsx";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { gradientBg, timeIcon } from "@/constants/timeTheme";

type Props = {
  value: number[];
  onValueChange: (v: number[]) => void;
};

export const ThemedSlider = ({ value, onValueChange }: Props) => {
  const { timeOfDay, primaryColor, isNight } = useTimeThemeStore();

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
          isNight() ? "bg-white/80" : "bg-black/80"
        )}
        style={{
          color: primaryColor,
        }}
      >
        {timeIcon(timeOfDay)}
      </RadixSlider.Thumb>
    </RadixSlider.Root>
  );
};
