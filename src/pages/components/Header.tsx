"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { ThemedLink } from "./ThemedLink";
import clsx from "clsx";
import { ThemedSlider } from "./ThemedSlider";

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
  const [torontoTime, setTorontoTime] = useState(initial);
  const [isMobile, setIsMobile] = useState(false);
  const { hour, setHour, themeTime } = useTimeThemeStore();

  useEffect(() => {
    const updateTime = () => {
      setTorontoTime(getTorontoTime());
    };
    updateTime();
    const interval = setInterval(updateTime, 60_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header
      className={clsx(
        `fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 shadow-sm`,
        themeTime == "night"
          ? "bg-black/30 text-gray-500"
          : "bg-white/30 text-gray-700"
      )}
    >
      <Drawer>
        <DrawerTrigger asChild>
          <button className={`flex items-center gap-2 text-md font-semibold`}>
            <MapPin className="w-4 h-4" />
            <span>Toronto</span>
            <span>
              {torontoTime.hour}:{String(torontoTime.minute).padStart(2, "0")}
            </span>
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Select Hour</DrawerTitle>
          </DrawerHeader>
          <div className="px-6 py-4 pb-50">
            <ThemedSlider
              value={[hour]}
              onValueChange={([v]) => setHour(v)}
              themeTime={themeTime}
            />
          </div>
        </DrawerContent>
      </Drawer>

      {/* 중앙 - 데스크탑일 때만 슬라이더 */}
      {!isMobile && (
        <div className="flex-1 px-10">
          <ThemedSlider
            value={[hour]}
            onValueChange={([v]) => setHour(v)}
            themeTime={themeTime}
          />
        </div>
      )}

      {/* 오른쪽 - 메뉴 */}
      <nav className="flex space-x-6 text-md font-medium">
        <ThemedLink href="#career" themeTime={themeTime}>
          Career
        </ThemedLink>
        <ThemedLink href="#project" themeTime={themeTime}>
          Project
        </ThemedLink>
        <ThemedLink href="#blog" themeTime={themeTime}>
          Blog
        </ThemedLink>
      </nav>
    </header>
  );
};
