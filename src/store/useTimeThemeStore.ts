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
    primary: "#FFB5C2", //
    background: "#FFF0F3", //
  },
  day: {
    primary: "#4A90E2", //
    background: "#EAF4FF", //
  },
  evening: {
    primary: "#FF9F1C", //
    background: "#FFF3E0", //
  },
  night: {
    primary: "#eb4b98", // pink
    background: "#043565", // navy
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
