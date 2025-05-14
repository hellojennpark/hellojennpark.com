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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

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
  const [showTooltip, setShowTooltip] = useState(true); // 초기 true

  const { hour, setHour, themeTime, primaryColor, backgroundColor } =
    useTimeThemeStore();
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

  // 3초 뒤에 자동으로 툴팁 닫기
  useEffect(() => {
    const timeout = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header
      className={clsx(
        `fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-5 shadow-sm space-x-6 backdrop-blur-sm`,
        themeTime == "night" ? "bg-black/20" : "bg-white/20"
      )}
    >
      <TooltipProvider>
        <Tooltip open={showTooltip}>
          <TooltipTrigger asChild>
            <div
              className="font-bold text-2xl flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/")}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <span
                className={`${dancingScript.className}`}
                style={{
                  color: primaryColor,
                  WebkitTextStroke: `0.5px ${backgroundColor}`,
                }}
              >
                HelloJennPark
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={8}>
            <div className="text-lg max-w-[240px] whitespace-normal">
              Hello, I’m Jenn. I build tools that help developers work with joy
              and flow.
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="flex-1">
        <ThemedSlider value={[hour]} onValueChange={([v]) => setHour(v)} />
      </div>

      <Drawer direction={isMobile ? "bottom" : "right"}>
        <DrawerTrigger asChild>
          <button className="rounded-md p-0.5">
            <Menu
              className="w-6 h-6"
              style={{
                color: primaryColor,
              }}
            />
          </button>
        </DrawerTrigger>
        <DrawerContent className="p-6 pb-18">
          <DrawerHeader>
            <DrawerTitle className="text-xl">Menu</DrawerTitle>
          </DrawerHeader>
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <ThemedLink href="/">Home</ThemedLink>
            <ThemedLink href="/career">Career</ThemedLink>
            <ThemedLink href="/project">Project</ThemedLink>
            <ThemedLink href="/blog">Blog</ThemedLink>
          </nav>

          <div className="absolute bottom-4 right-4 flex gap-8">
            <Link href="https://github.com/hellojennpark" target="_blank">
              <Github className="w-8 h-8 active:opacity-60 hover:opacity-60 transition-opacity" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hellojennpark"
              target="_blank"
            >
              <Linkedin className="w-8 h-8 active:opacity-60 hover:opacity-60 transition-opacity" />
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
};
