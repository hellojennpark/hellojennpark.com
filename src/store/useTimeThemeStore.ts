import { create } from "zustand";

type TimeTheme = "morning" | "day" | "evening" | "night";

interface TimeThemeStore {
  hour: number;
  themeTime: TimeTheme;
  primaryColor: string;
  backgroundColor: string;
  setHour: (hour: number) => void;
}

const getTimeTheme = (hour: number): TimeTheme => {
  if (hour >= 5 && hour < 11) return "morning";
  if (hour >= 11 && hour < 17) return "day";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
};

const colorMap: Record<TimeTheme, { primary: string; background: string }> = {
  morning: {
    primary: "#FFB5C2", // soft pink
    background: "#FFF0F3", // very light pink
  },
  day: {
    primary: "#4A90E2", // blue
    background: "#EAF4FF", // light sky blue
  },
  evening: {
    primary: "#FF9F1C", // orange
    background: "#FFF3E0", // soft orange
  },
  night: {
    primary: "#2E3440", // deep navy
    background: "#1A1C24", // dark
  },
};

export const useTimeThemeStore = create<TimeThemeStore>((set) => {
  const hour = new Date().getHours();
  const theme = getTimeTheme(hour);
  const colors = colorMap[theme];

  return {
    hour,
    themeTime: theme,
    primaryColor: colors.primary,
    backgroundColor: colors.background,
    setHour: (hour: number) => {
      const theme = getTimeTheme(hour);
      const colors = colorMap[theme];
      set({
        hour,
        themeTime: theme,
        primaryColor: colors.primary,
        backgroundColor: colors.background,
      });
    },
  };
});
