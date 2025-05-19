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
import { CustomAvatar } from "../CustomAvatar";

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

  const avatarName = name == "Harry Kim" ? "harry" : "edward";
  const Title = (
    <div className="font-medium flex">
      <CustomAvatar name={avatarName} size="lg" />
      <div className="ml-3">
        <p>{name}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {data.role} @ {data.from}
        </p>
      </div>
    </div>
  );

  const Content = (
    <div className="overflow-y-auto max-h-[60dvh] space-y-2 px-2">
      {data.content.map((paragraph, idx) => (
        <p key={idx} className="text-sm leading-relaxed text-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  );

  return isMobile ? (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle>{Title}</DrawerTitle>
          <DrawerDescription />
        </DrawerHeader>
        <div className="px-4 pb-6">{Content}</div>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{Title}</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        {Content}
      </DialogContent>
    </Dialog>
  );
};
