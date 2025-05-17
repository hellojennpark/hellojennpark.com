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
  const { themeTime } = useTimeThemeStore();
  const isNight = themeTime == "night";
  return (
    <div
      className={clsx(
        "p-3 md:p5 rounded-lg shadow-md flex items-center gap-4",
        isNight
          ? "bg-black/30 text-white/80 hover:ring-white-500"
          : "bg-white/30 text-black/80 hover:ring-black-500"
      )}
    >
      {Icon && <Icon className={clsx("w-10 h-10", iconColor)} />}
      <div>
        <div className="text-sm">{title}</div>
        <div className="text-lg md:text-xl">{value}</div>
      </div>
    </div>
  );
};
