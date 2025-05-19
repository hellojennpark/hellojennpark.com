"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";

type ThemedLinkProps = {
  href: string;
  children: ReactNode;
};

export const ThemedLink = ({ href, children }: ThemedLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname == href;

  const { themeTime } = useTimeThemeStore();
  const isNight = themeTime == "night";
  const linkClassName = isActive
    ? isNight
      ? "text-white"
      : "text-black"
    : isNight
    ? "text-gray-400 hover:text-white active:text-white"
    : "text-gray-500 hover:text-black active:text-black";

  return (
    <a
      href={href}
      className={clsx(
        "transition text-lg flex items-center gap-2",
        linkClassName
      )}
    >
      {children}
      {isActive && (
        <span
          className={clsx(
            "text-xs px-2 py-0.5 rounded-md",
            isNight ? "bg-white text-black" : "bg-black text-white"
          )}
        >
          current
        </span>
      )}
    </a>
  );
};
