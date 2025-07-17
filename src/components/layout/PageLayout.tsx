"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import categories from "@/data/categories.json";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  const router = useRouter();
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night";
  const timeOfDayStyle = isNight
    ? "bg-black/40 text-white"
    : "bg-white/60 text-black";

  const crumbs = router.pathname
    .split("/")
    .filter((crumb) => crumb)
    .map((segment, idx, arr) => {
      const href = "/" + arr.slice(0, idx + 1).join("/");
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);
      return { href, label };
    });
  const currentHrefFromRouter = router.pathname;

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
                  <span className="font-bold">
                    {crumb.label.replace("-", " ")}
                  </span>
                ) : (
                  <Link href={crumb.href}>{crumb.label}</Link>
                )}
              </div>
            ))}
          </nav>

          <div className="space-y-8 pt-2 md:pt-4 pb-8 max-w-5xl mx-auto text-base md:text-lg leading-relaxed">
            {children}
          </div>
          {categories.length > 0 &&
            currentHrefFromRouter != "/blog" &&
            currentHrefFromRouter != "/projects" && (
              <div className="mt-8 max-w-5xl mx-auto">
                <h2 className="text-xl font-bold mb-4">You might also like</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories.map((category) => {
                    if (
                      category.href != currentHrefFromRouter &&
                      category.id != 0 &&
                      category.id != 99
                    )
                      return (
                        <Link key={category.id} href={category.href}>
                          <div
                            className={clsx(
                              "p-3 px-5 h-full rounded-lg shadow-md",
                              isNight
                                ? "bg-black/40 border-white border hover:bg-gray-800 active:bg-gray-800 text-white"
                                : "bg-white/80 border-black border hover:bg-white active:bg-white text-black"
                            )}
                          >
                            <h3 className="text-lg font-semibold mb-2">
                              {category.label}
                            </h3>
                            <p>{category.description}</p>
                          </div>
                        </Link>
                      );
                  })}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
