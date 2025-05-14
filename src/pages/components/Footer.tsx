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
import { useTimeThemeStore } from "@/store/useTimeThemeStore";

const navItems = [
  { label: "Welcome", href: "#welcome", icon: Smile },
  { label: "Introduce", href: "#introduce", icon: Info },
  { label: "Career", href: "#career", icon: Briefcase },
  { label: "Project", href: "#project", icon: FolderKanban },
  { label: "Etc", href: "#etc", icon: MoreHorizontal },
];

export const Footer = () => {
  const { themeTime, primaryColor } = useTimeThemeStore();

  return (
    <footer
      className={clsx(
        "fixed bottom-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm",
        "py-3 px-4 flex justify-center",
        themeTime == "night" ? "bg-black/20" : "bg-white/20"
      )}
    >
      <nav className="flex items-center">
        {navItems.map(({ label, href, icon: Icon }, index) => (
          <div key={label} className="flex items-center gap-3">
            <Link
              href={href}
              className="flex flex-col items-center text-xs group"
            >
              <div
                className={clsx(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                  themeTime == "night"
                    ? "group-hover:bg-black/40"
                    : "group-hover:bg-white/40"
                )}
                style={{ color: primaryColor }}
              >
                <Icon className="w-6 h-6" />
              </div>
            </Link>

            {index < navItems.length - 1 && (
              <ChevronRight
                className="w-4 h-4"
                style={{ color: primaryColor }}
              />
            )}
          </div>
        ))}
      </nav>
    </footer>
  );
};
