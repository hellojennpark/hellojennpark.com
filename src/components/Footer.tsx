"use client";

import Link from "next/link";
import {
  Smile,
  Info,
  Briefcase,
  FolderKanban,
  ChevronRight,
  ChevronDown,
  ArrowUp,
} from "lucide-react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";

const navItems = [
  { label: "Welcome", href: "#welcome", icon: Smile },
  { label: "Introduce", href: "#introduce", icon: Info },
  { label: "Career", href: "#career", icon: Briefcase },
  { label: "Blog", href: "#blog", icon: FolderKanban },
];

export const Footer = () => {
  const { timeOfDay, primaryColor } = useTimeThemeStore();
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentIndex = navItems.findIndex(
    (item) => item.href.slice(1) === activeSection
  );
  const isLast = currentIndex === navItems.length - 1;
  const nextSection = isLast ? navItems[0] : navItems[currentIndex + 1];

  const handleScroll = () => {
    const el = document.getElementById(nextSection.href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Down Button */}
      <div className="fixed bottom-17 md:bottom-20 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={handleScroll}
          className={clsx(
            "flex items-center gap-1 px-4 py-2 rounded-xl text-sm shadow-sm transition-colors backdrop-blur-sm font-bold",
            timeOfDay !== "night"
              ? "bg-white/20 text-black hover:bg-white/40"
              : "bg-black/20 text-white hover:bg-black/40"
          )}
          style={{ color: primaryColor }}
        >
          {isLast ? (
            <>
              <ArrowUp className="w-4 h-4" />
              Back to top
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Scroll to {nextSection.label}
            </>
          )}
        </button>
      </div>

      {/* Footer */}
      <footer
        className={clsx(
          "fixed bottom-0 left-0 right-0 z-40 backdrop-blur-sm rounded-xl shadow-sm",
          "py-1.5 flex justify-center",
          "mx-3 md:mx-auto max-w-md my-3 md:my-5"
        )}
        style={{
          backgroundColor:
            timeOfDay == "night"
              ? "rgba(0, 0, 0, 0.2)"
              : "rgba(255, 255, 255, 0.2)",
        }}
      >
        <nav className="flex items-center">
          {navItems.map(({ label, href, icon: Icon }, index) => {
            const sectionId = href.slice(1);
            const isActive = sectionId === activeSection;

            return (
              <div key={label} className="flex items-center gap-3">
                <Link
                  href={href}
                  className="flex flex-col items-center text-xs group"
                >
                  <div
                    className={clsx(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                      isActive
                        ? timeOfDay === "night"
                          ? "bg-white/60"
                          : "bg-black/60"
                        : timeOfDay === "night"
                        ? "group-hover:bg-white/40"
                        : "group-hover:bg-black/40"
                    )}
                    style={{ color: primaryColor }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </Link>

                {index < navItems.length - 1 && (
                  <ChevronRight
                    className="w-4 h-4 mx-1"
                    style={{ color: primaryColor }}
                  />
                )}
              </div>
            );
          })}
        </nav>
      </footer>
    </>
  );
};
