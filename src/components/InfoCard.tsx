import { LucideIcon } from "lucide-react";
import clsx from "clsx";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";

type InfoCardProps = {
  title: string;
  value: string;
  icon?: LucideIcon;
  iconColor?: string;
};

export const InfoCard = ({
  title,
  value,
  icon: Icon,
  iconColor,
}: InfoCardProps) => {
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night";
  return (
    <div
      className={clsx(
        "p-3 md:p-5 rounded-lg shadow-md flex items-center gap-4",
        isNight
          ? "bg-black/40 text-white/80 hover:bg-gray-900 active:bg-gray-900"
          : "bg-white/60 text-black/80 hover:bg-white active:bg-white"
      )}
    >
      {Icon && <Icon className={iconColor} />}
      <div>
        <div className="text-sm">{title}</div>
        <div className="text-base md:text-xl">{value}</div>
      </div>
    </div>
  );
};
