"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type BlogLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function BlogLayout({ title, children }: BlogLayoutProps) {
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night";
  const timeOfDayStyle = isNight
    ? "bg-black/40 text-white"
    : "bg-white/60 text-black";

  const crumbs = [
    {
      key: 0,
      href: "/blog",
      label: "Blog",
    },
    {
      key: 1,
      label: title,
    },
  ];
  return (
    <div className="w-full h-[100dvh] mx-auto justify-between">
      <div
        className={clsx(
          timeOfDayStyle,
          isNight ? "dark-scroll-track" : "light-scroll-track",
          "pt-18 h-full"
        )}
      >
        <div className="p-5 h-full overflow-y-auto">
          <nav className="flex items-center text-md space-x-1 pb-3">
            <Link
              href="/#welcome"
              className="flex items-center hover:text-gray-500"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            {crumbs.map((crumb, index) => (
              <div key={crumb.key} className="flex items-center space-x-1">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                {index === crumbs.length - 1 ? (
                  <span className="font-bold">
                    {crumb.label.replace("-", " ")}
                  </span>
                ) : (
                  <Link href={crumb.href ?? ""}>{crumb.label}</Link>
                )}
              </div>
            ))}
          </nav>

          <div className="space-y-8 pt-4 pb-8 max-w-5xl mx-auto text-base md:text-lg leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
