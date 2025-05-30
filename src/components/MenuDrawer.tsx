"use client";

import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import { MenuDrawerContent } from "./MenuDrawerContent";

type MenuDrawerProps = {
  children: React.ReactNode;
};

export const MenuDrawer = ({ children }: MenuDrawerProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { timeOfDay } = useTimeThemeStore();

  const isNight = timeOfDay === "night";
  const timeOfDayStyle = isNight
    ? "bg-gray-900 text-white"
    : "bg-white text-black";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Drawer
      open={isDrawerOpen}
      onOpenChange={setIsDrawerOpen}
      direction={isMobile ? "bottom" : "right"}
    >
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className={clsx("p-6 pb-18", timeOfDayStyle)}>
        <MenuDrawerContent onClose={() => setIsDrawerOpen(false)} />
      </DrawerContent>
    </Drawer>
  );
};
