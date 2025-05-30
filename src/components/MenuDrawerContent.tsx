"use client";

import { CustomAvatar } from "./CustomAvatar";
import { ThemedLink } from "./ThemedLink";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import categories from "@/data/categories.json";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";

interface MenuDrawerContentProps {
  onClose: () => void;
}

export const MenuDrawerContent = ({ onClose }: MenuDrawerContentProps) => {
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay === "night";

  const timeOfDayStyle = isNight
    ? "bg-gray-900 text-white"
    : "bg-white text-black";

  return (
    <div className={clsx("md:p-4 md:pb-18", timeOfDayStyle)}>
      <div className="items-center flex flex-row py-2 mb-4">
        <CustomAvatar name="jenn" size="xl" />
        <div className="flex flex-col ml-3">
          <p className="text-lg font-semibold">Jenn</p>
          <p className="text-sm">
            Welcome to my space. Please enjoy and have a wonderful day!
          </p>
        </div>
      </div>

      <nav className="flex flex-col space-y-4 px-4 py-2">
        {categories.map((category) => (
          <ThemedLink key={category.id} href={category.href} onClick={onClose}>
            {category.label}
          </ThemedLink>
        ))}
      </nav>

      <div className="absolute bottom-4 right-8 flex gap-8">
        <Link href="https://github.com/hellojennpark" target="_blank">
          <Github className="w-8 h-8 active:opacity-60 hover:opacity-60 transition-opacity" />
        </Link>
        <Link href="https://www.linkedin.com/in/hellojennpark" target="_blank">
          <Linkedin className="w-8 h-8 active:opacity-60 hover:opacity-60 transition-opacity" />
        </Link>
      </div>
    </div>
  );
};
