"use client";

import clsx from "clsx";
import { ReactNode, MouseEventHandler } from "react"; // MouseEventHandler 추가
import { usePathname } from "next/navigation";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import Link from "next/link";

type ThemedLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>; // onClick prop 추가 (선택적)
};

export const ThemedLink = ({ href, children, onClick }: ThemedLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname == href;

  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night";
  const linkClassName = isActive
    ? isNight
      ? "text-white"
      : "text-black"
    : isNight
    ? "text-gray-400 hover:text-white active:text-white"
    : "text-gray-500 hover:text-black active:text-black";

  return (
    <Link
      href={href}
      className={clsx(
        "transition text-lg flex items-center gap-2",
        linkClassName
      )}
      onClick={onClick}
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
    </Link>
  );
};
