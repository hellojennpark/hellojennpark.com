import { LucideIcon } from "lucide-react";
import clsx from "clsx";

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
  return (
    <div className="bg-gray-900 p-3 md:p5 rounded-lg shadow-md flex items-center gap-4">
      {Icon && <Icon className={clsx("w-10 h-10", iconColor)} />}
      <div>
        <div className="text-sm text-gray-400">{title}</div>
        <div className="text-lg md:text-xl font-bold">{value}</div>
      </div>
    </div>
  );
};
