"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  const router = useRouter();
  const { backgroundColor, timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night";
  const timeOfDayStyle = isNight
    ? "bg-black/40 text-white"
    : "bg-white/50 text-black";

  const crumbs = router.pathname
    .split("/")
    .filter((crumb) => crumb)
    .map((segment, idx, arr) => {
      const href = "/" + arr.slice(0, idx + 1).join("/");
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);
      return { href, label };
    });

  return (
    <div
      className="w-full h-[100dvh] overflow-y-auto mx-auto justify-between"
      style={{ backgroundColor }}
    >
      <div className={clsx(timeOfDayStyle, "pt-20 p-5 min-h-full")}>
        {/* Breadcrumb */}
        <nav className="flex items-center text-md space-x-1 pb-3">
          <Link
            href="/#welcome"
            className={clsx(
              "flex items-center",
              isNight
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-700 hover:text-gray-900"
            )}
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          {crumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center space-x-1">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              {index === crumbs.length - 1 ? (
                <span>{crumb.label.replace("-", " ")}</span>
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
            </div>
          ))}
        </nav>

        {/* Page Content */}
        <div className="space-y-8 pt-4 pb-8 max-w-4xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
