"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { ThemedSlider } from "./ThemedSlider";
import { Press_Start_2P } from "next/font/google";
import { MenuDrawer } from "./MenuDrawer";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { hour, setHour, primaryColor, backgroundColor, timeOfDay } =
    useTimeThemeStore();

  const isLanding = pathname == "/";
  const isNight = timeOfDay == "night";

  return (
    <header
      className={clsx(
        `fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-5 space-x-6 backdrop-blur-xs h-[70px]`
      )}
    >
      <div
        className="font-bold flex items-center gap-2 cursor-pointer transform transition duration-200 hover:scale-105 active:scale-105"
        onClick={() => router.push("/#welcome")}
      >
        <span
          className={
            timeOfDay == "evening"
              ? `${pixelFont.className} text-xs`
              : "text-2xl"
          }
          style={{
            color: isLanding || isNight ? primaryColor : backgroundColor,
            WebkitTextStroke: `0.5px ${
              isLanding || isNight ? primaryColor : backgroundColor
            }`,
          }}
        >
          HelloJennPark
        </span>
      </div>

      <div className="flex-1">
        <ThemedSlider value={[hour]} onValueChange={([v]) => setHour(v)} />
      </div>

      <MenuDrawer>
        <button
          className={clsx(
            "rounded-md p-0.5 transform transition duration-200 hover:scale-105 active:scale-105",
            !isLanding && "border-2"
          )}
          style={{
            color: isLanding || isNight ? primaryColor : backgroundColor,
            borderColor: isLanding || isNight ? primaryColor : backgroundColor,
          }}
        >
          <Menu className="w-6 h-6" />
        </button>
      </MenuDrawer>
    </header>
  );
};
