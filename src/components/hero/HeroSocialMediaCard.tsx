"use client";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { timeIcon } from "@/constants/timeTheme";
import { FaBloggerB, FaLinkedinIn, FaGithub, FaList } from "react-icons/fa";
import clsx from "clsx";
import Link from "next/link";
import { MenuDrawer } from "../MenuDrawer";

const times = ["morning", "day", "evening", "night"] as const;

export default function HeroSocialMediaCard() {
  const { timeOfDay, setTimeOfDay, primaryColor, backgroundColor } =
    useTimeThemeStore();
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-4 rounded-xl p-6"
      )}
      style={{ color: backgroundColor }}
    >
      <div className="flex gap-3">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => setTimeOfDay(time)}
            className={clsx(
              "p-2 rounded-full shadow-sm",
              timeOfDay == "night"
                ? timeOfDay == time
                  ? "text-white"
                  : "text-black"
                : timeOfDay == time
                ? "text-black"
                : "text-white"
            )}
            style={{
              backgroundColor:
                timeOfDay == time
                  ? primaryColor
                  : timeOfDay == "night"
                  ? "white"
                  : "black",
            }}
          >
            {timeIcon(time, "w-5 h-5")}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 text-2xl">
        <MenuDrawer>
          <p
            className="flex items-center justify-center p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            aria-label="List"
          >
            <FaList className="w-5 h-5" />
          </p>
        </MenuDrawer>
        <Link
          href="/blog"
          passHref
          className="flex items-center justify-center p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          aria-label="Blog"
        >
          <FaBloggerB className="w-5 h-5" />
        </Link>
        <a
          href="https://www.linkedin.com/in/hellojennpark"
          className="flex items-center justify-center p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/hellojennpark"
          className="flex items-center justify-center p-2 rounded-full bg-black text-white hover:bg-gray-900 transition-colors"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
