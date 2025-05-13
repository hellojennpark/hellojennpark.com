"use client";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { ThemedLink } from "./ThemedLink";
import clsx from "clsx";
import { ThemedSlider } from "./ThemedSlider";
import { Dancing_Script } from "next/font/google";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

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

  const { hour, setHour, themeTime, primaryColor } = useTimeThemeStore();
  const router = useRouter();

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
        `fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-5 shadow-sm space-x-6`,
        themeTime == "night"
          ? "bg-black/30 text-gray-500"
          : "bg-white/30 text-gray-700"
      )}
    >
      <div
        className="font-bold text-2xl flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <span
          className={`${dancingScript.className}`}
          style={{ color: primaryColor }}
        >
          HelloJennPark
        </span>
      </div>

      <div className="flex-1">
        <ThemedSlider value={[hour]} onValueChange={([v]) => setHour(v)} />
      </div>

      <Drawer direction={isMobile ? "bottom" : "right"}>
        <DrawerTrigger asChild>
          <button>
            <Menu className="w-6 h-6" style={{ color: primaryColor }} />
          </button>
        </DrawerTrigger>
        <DrawerContent className="p-6">
          <DrawerHeader>
            <DrawerTitle className="text-xl">Menu</DrawerTitle>
          </DrawerHeader>
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <ThemedLink href="#career">Career</ThemedLink>
            <ThemedLink href="#project">Project</ThemedLink>
            <ThemedLink href="#blog">Blog</ThemedLink>
          </nav>
        </DrawerContent>
      </Drawer>
    </header>
  );
};
