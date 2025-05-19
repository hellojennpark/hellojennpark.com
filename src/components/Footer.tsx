"use client";

import Link from "next/link";
import {
  Smile,
  Info,
  Briefcase,
  FolderKanban,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";

const navItems = [
  { label: "Welcome", href: "#welcome", icon: Smile },
  { label: "Introduce", href: "#introduce", icon: Info },
  { label: "Career", href: "#career", icon: Briefcase },
  { label: "Project", href: "#project", icon: FolderKanban },
  { label: "Etc", href: "#etc", icon: MoreHorizontal },
];

export const Footer = () => {
  const { timeOfDay, primaryColor } = useTimeThemeStore();
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1)); // remove '#'
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

  return (
    <footer
      className={clsx(
        "fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md",
        "py-3 px-4 flex justify-center"
      )}
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
                    "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
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
  );
};
