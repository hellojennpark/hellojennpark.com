"use client";

import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import { Dancing_Script } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { ThemedLink } from "./ThemedLink";
import { ThemedSlider } from "./ThemedSlider";
import { CustomAvatar } from "./CustomAvatar";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export const Header = () => {
  const pathname = usePathname();
  const useDefaultFont = pathname == "/";

  const [isMobile, setIsMobile] = useState(false);
  const { hour, setHour, primaryColor, backgroundColor, timeOfDay } =
    useTimeThemeStore();
  const timeOfDayStyle =
    timeOfDay == "night" ? "bg-gray-900 text-white" : "bg-white text-black";

  const router = useRouter();

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
        `fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-5 space-x-6 backdrop-blur-sm`
      )}
    >
      <div
        className="font-bold text-2xl flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/#welcome")}
      >
        <span
          className={`${!useDefaultFont ? "" : dancingScript.className}`}
          style={{
            color: primaryColor,
            WebkitTextStroke: `0.5px ${backgroundColor}`,
          }}
        >
          HelloJennPark
        </span>
      </div>

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
        <DrawerContent className={clsx("p-6 pb-18", timeOfDayStyle)}>
          <div className="items-center flex flex-row py-2 mb-4">
            <CustomAvatar name="jenn" size="xl" />
            <div className="flex flex-col ml-3">
              <p className="text-lg font-semibold">Jenn</p>
              <p className="text-sm">
                Welcome to my space. Please enjoy and have a wonderful day!
              </p>
            </div>
          </div>
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <ThemedLink href="/">Home</ThemedLink>
            <ThemedLink href="/work">Work History</ThemedLink>
            <ThemedLink href="/recommendations">Recommendations</ThemedLink>
            <ThemedLink href="/projects">Projects</ThemedLink>
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
