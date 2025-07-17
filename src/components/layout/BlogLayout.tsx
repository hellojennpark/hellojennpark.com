"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import { Home, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type BlogLayoutProps = {
  title?: string;
  tag?: string;
  children: ReactNode;
};

export default function BlogLayout({ title, tag, children }: BlogLayoutProps) {
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night";
  const timeOfDayStyle = isNight
    ? "bg-black/40 text-white"
    : "bg-white/60 text-black";

  const crumbs = [
    {
      key: 0,
      href: title ? "/blog" : "/tags",
      label: title ? "Blog" : "Tags",
    },
    {
      key: 1,
      label: title ? title : tag,
    },
  ];

  const router = useRouter();

  return (
    <div className="w-full h-[100dvh] mx-auto justify-between">
      <div
        className={clsx(
          timeOfDayStyle,
          isNight ? "dark-scroll-track" : "light-scroll-track",
          "h-full"
        )}
      >
        <div className="pt-25 p-5 h-full overflow-y-auto">
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
                  <span className="font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px] truncate">
                    {crumb && crumb.label
                      ? crumb.label.replace("-", " ")
                      : "Loading..."}
                  </span>
                ) : (
                  <Link href={crumb.href ?? ""}>{crumb.label}</Link>
                )}
              </div>
            ))}
          </nav>

          <div className="space-y-8 py-2 md:py-4 max-w-5xl mx-auto text-base md:text-lg leading-relaxed">
            {children}
          </div>
          <div className="mt-4">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-sm hover:underline"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
