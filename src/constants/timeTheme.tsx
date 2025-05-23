import { MoonStar, Sun, Sunrise, Sunset } from "lucide-react";

type Time = "morning" | "day" | "evening" | "night";

export const gradientBg = {
  morning: "from-[#ffb3b3] via-[#ff9898] to-[#a9ff68]", // coral pink → lime green
  day: "from-[#fde74c] via-[#b1d8ff] to-[#82bcf0]", // yellow → sky blue
  evening: "from-[#5ec9c0] via-[#a7c8d7] to-[#f26a8d]", // orange → white
  night: "from-[#043565] via-[#283e6d] to-[#eb4b98]", // navy → hot pink
};

export const timeIcon = (time: Time, className: string = "w-5 h-5") => {
  const icons = {
    morning: <Sunrise className={className} />,
    day: <Sun className={className} />,
    evening: <Sunset className={className} />,
    night: <MoonStar className={className} />,
  };
  return icons[time];
};
