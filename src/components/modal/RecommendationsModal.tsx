"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import recommendationsData from "@/data/recommendations.json";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { RecommendationTitle } from "../RecommendationTitle";
import { RecommendationContent } from "../RecommendationContent";

interface RecommendationsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name: string; // e.g. "Harry Kim"
}

export const RecommendationsModal = ({
  open,
  onOpenChange,
  name,
}: RecommendationsModalProps) => {
  const { timeOfDay } = useTimeThemeStore();
  const timeOfDayStyle =
    timeOfDay == "night" ? "bg-gray-900 text-white" : "bg-white text-black";

  const isMobile = useIsMobile();
  const [data, setData] = useState<{
    from: string;
    role: string;
    content: string[];
  } | null>(null);

  useEffect(() => {
    const found = recommendationsData.recommendations.find(
      (r) => r.name === name
    );
    if (found) {
      setData({
        from: found.from,
        role: found.role,
        content: found.content,
      });
    } else {
      setData(null);
    }
  }, [name]);

  if (!data) return null;

  return isMobile ? (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className={timeOfDayStyle}>
        <DrawerHeader>
          <DrawerTitle>
            <RecommendationTitle
              name={name}
              from={data.from}
              role={data.role}
            />
          </DrawerTitle>
          <DrawerDescription />
        </DrawerHeader>
        <div className="px-4 pb-6">
          <RecommendationContent content={data.content} />
        </div>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={timeOfDayStyle}>
        <DialogHeader>
          <DialogTitle>
            <RecommendationTitle
              name={name}
              from={data.from}
              role={data.role}
            />
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <RecommendationContent content={data.content} />
      </DialogContent>
    </Dialog>
  );
};
