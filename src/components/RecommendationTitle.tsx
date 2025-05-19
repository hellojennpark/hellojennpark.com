"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import { CustomAvatar } from "./CustomAvatar";

interface RecommendationTitleProps {
  name: string;
  from: string;
  role: string;
}

export const RecommendationTitle = ({
  name,
  from,
  role,
}: RecommendationTitleProps) => {
  const { timeOfDay } = useTimeThemeStore();
  const timeOfDayStyle =
    timeOfDay === "night" ? "bg-gray-900 text-white" : "bg-white text-black";

  const avatarName = name === "Harry Kim" ? "harry" : "edward";

  return (
    <div className={clsx("font-medium flex", timeOfDayStyle)}>
      <CustomAvatar name={avatarName} size="lg" />
      <div className="ml-3">
        <p>{name}</p>
        <p className="mt-1 text-sm">
          {role} @ {from}
        </p>
      </div>
    </div>
  );
};
