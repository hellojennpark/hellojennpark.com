import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

const tagColorMap = [
  { light: "bg-[#FFCDD2]", dark: "bg-[#e57373]" }, // red
  { light: "bg-[#F8BBD0]", dark: "bg-[#ec407a]" }, // pink
  { light: "bg-[#E1BEE7]", dark: "bg-[#ab47bc]" }, // purple
  { light: "bg-[#C5CAE9]", dark: "bg-[#5c6bc0]" }, // indigo
  { light: "bg-[#BBDEFB]", dark: "bg-[#42a5f5]" }, // blue
  { light: "bg-[#B2EBF2]", dark: "bg-[#26c6da]" }, // cyan
  { light: "bg-[#C8E6C9]", dark: "bg-[#66bb6a]" }, // green
  { light: "bg-[#FFF9C4]", dark: "bg-[#fdd835]" }, // yellow
  { light: "bg-[#FFE0B2]", dark: "bg-[#fb8c00]" }, // orange
  { light: "bg-[#FFECB3]", dark: "bg-[#fbc02d]" }, // amber
  { light: "bg-[#D7CCC8]", dark: "bg-[#8d6e63]" }, // brown
  { light: "bg-[#F0F4C3]", dark: "bg-[#c0ca33]" }, // lime
];

const getDeterministicColor = (tag: string, isNight: boolean) => {
  const index = Math.abs(hashString(tag)) % tagColorMap.length;
  return isNight ? tagColorMap[index].dark : tagColorMap[index].light;
};

interface TagListProps {
  tags?: string[];
}

export function TagList({ tags }: TagListProps) {
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay === "night";

  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const bgColor = getDeterministicColor(tag, isNight);
        return (
          <p
            key={tag}
            className={clsx("text-sm px-1.5 py-0.5 rounded-xs", bgColor)}
          >
            # {tag}
          </p>
        );
      })}
    </div>
  );
}
